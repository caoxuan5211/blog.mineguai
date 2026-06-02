import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import matter from "gray-matter";
import { parse as parseToml } from "smol-toml";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";
import { createHighlighter } from "shiki";
import { build as viteBuild } from "vite";
import { allRoutes, routePath, siteDescription, siteTitle, siteUrl } from "../src/routes";
import type { EvidenceDocument, EvidenceMeta, RouteData, SiteData } from "../src/types";

const root = path.resolve(fileURLToPath(new URL("..", import.meta.url)));
const contentDir = path.join(root, "src", "content", "evidence");
const generatedDir = path.join(root, "src", "generated");
const distDir = path.join(root, "dist");
const ssrOutDir = path.join(root, ".ssg");

type FrontMatter = Record<string, unknown>;
type ParsedMarkdown = {
  data: FrontMatter;
  content: string;
};

const ensureDir = async (target: string) => {
  await fs.mkdir(target, { recursive: true });
};

const walk = async (dir: string): Promise<string[]> => {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const target = path.join(dir, entry.name);
      if (entry.isDirectory()) return walk(target);
      if (entry.isFile() && entry.name.toLowerCase().endsWith(".md")) return [target];
      return [];
    })
  );
  return files.flat();
};

const slugify = (file: string): string => {
  const relative = path.relative(contentDir, file).replace(/\\/g, "/");
  const withoutExt = relative.replace(/\.md$/i, "");
  return withoutExt
    .split("/")
    .map((part) => encodeURIComponent(part.trim().toLowerCase().replace(/\s+/g, "-")))
    .join("/");
};

const toArray = (value: unknown): string[] => {
  if (!value) return [];
  if (Array.isArray(value)) return value.map(String).map((item) => item.trim()).filter(Boolean);
  return [String(value).trim()].filter(Boolean);
};

const readTime = (plainText: string): number => {
  const cjk = (plainText.match(/[\u4e00-\u9fff]/g) || []).length;
  const words = (plainText.replace(/[\u4e00-\u9fff]/g, " ").match(/\b[\w-]+\b/g) || []).length;
  return Math.max(1, Math.ceil((cjk + words) / 420));
};

const stripHtml = (value: string): string =>
  value
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const escapeHtml = (value: string): string =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const parseFrontMatter = (raw: string): ParsedMarkdown => {
  if (raw.startsWith("+++")) {
    const match = raw.match(/^\+\+\+\r?\n([\s\S]*?)\r?\n\+\+\+\r?\n?/);
    if (!match) return { data: {}, content: raw };
    return {
      data: parseToml(match[1]) as FrontMatter,
      content: raw.slice(match[0].length)
    };
  }
  const parsed = matter(raw);
  return { data: parsed.data, content: parsed.content };
};

const parseDate = (value: unknown): string => {
  if (value instanceof Date) return value.toISOString();
  if (typeof value === "string" && value.trim()) return new Date(value).toISOString();
  return new Date(0).toISOString();
};

const parseCover = (data: FrontMatter): EvidenceMeta["cover"] => {
  const params = data.params;
  if (params && typeof params === "object" && "cover" in params) {
    const cover = (params as Record<string, unknown>).cover;
    if (cover && typeof cover === "object") {
      const raw = cover as Record<string, unknown>;
      if (raw.image) {
        return {
          image: String(raw.image),
          alt: raw.alt ? String(raw.alt) : undefined,
          relative: Boolean(raw.relative)
        };
      }
    }
  }
  if (data.cover || data.image) {
    return { image: String(data.cover || data.image) };
  }
  return undefined;
};

const normalizeRefLinks = (markdown: string, slugsByBase: Map<string, string>): string =>
  markdown
    .replace(/\{\{<\s*ref\s+"([^"]+)"\s*>\}\}/g, (_, target: string) => {
      const key = target.replace(/\\/g, "/").split("/").pop()?.replace(/\.md$/i, "").toLowerCase() || target.toLowerCase();
      const slug = slugsByBase.get(key);
      return slug ? `/evidence/${slug}/` : "#missing-ref";
    })
    .replace(/\{\{<\s*ref\s+([^>\s]+)\s*>\}\}/g, (_, target: string) => {
      const key = String(target).replace(/["']/g, "").replace(/\\/g, "/").split("/").pop()?.replace(/\.md$/i, "").toLowerCase() || String(target).toLowerCase();
      const slug = slugsByBase.get(key);
      return slug ? `/evidence/${slug}/` : "#missing-ref";
    });

const normalizeLang = (value: string): string => {
  const normalized = value.trim().toLowerCase();
  const aliases: Record<string, string> = {
    "c++": "cpp",
    "cxx": "cpp",
    "cc": "cpp",
    "js": "javascript",
    "ts": "typescript",
    "shell": "bash",
    "ps": "powershell",
    "ps1": "powershell",
    "md": "markdown"
  };
  const lang = aliases[normalized] || normalized || "text";
  const loaded = new Set(["javascript", "typescript", "cpp", "c", "python", "bash", "powershell", "json", "markdown", "html", "css", "text"]);
  return loaded.has(lang) ? lang : "text";
};

const assetExists = async (urlPath: string): Promise<boolean> => {
  const local = path.join(root, "site-public", ...urlPath.replace(/^\/+/, "").split("/"));
  try {
    await fs.access(local);
    return true;
  } catch {
    return false;
  }
};

const missingImage = (src: string): string =>
  `<figure class="missing-evidence"><span>图片缺失</span><code>${escapeHtml(src)}</code></figure>`;

const fixImagePaths = async (html: string): Promise<string> => {
  const pattern = /<img([^>]*?)src="([^"]+)"([^>]*)>/g;
  let output = "";
  let cursor = 0;

  for (const match of html.matchAll(pattern)) {
    const [full, before, src, after] = match;
    output += html.slice(cursor, match.index);
    cursor = (match.index || 0) + full.length;

    if (/^https?:\/\//.test(src)) {
      output += full;
      continue;
    }

    if (/^[a-zA-Z]:(?:\\|\/|%5[cC])/.test(src)) {
      output += missingImage(src);
      continue;
    }

    if (src.startsWith("/images/")) {
      const next = `/assets${src}`;
      output += (await assetExists(next)) ? `<img${before}src="${next}"${after}>` : missingImage(src);
      continue;
    }

    if (src.startsWith("images/")) {
      const next = `/assets/content/first-blog/${src.replace(/^images\//, "")}`;
      output += (await assetExists(next)) ? `<img${before}src="${next}"${after}>` : missingImage(src);
      continue;
    }

    output += full;
  }

  return output + html.slice(cursor);
};

let highlighterPromise: ReturnType<typeof createHighlighter> | undefined;

const getHighlighter = () => {
  highlighterPromise ??= createHighlighter({
    themes: [
      {
        name: "guai-ink",
        type: "light",
        colors: {
          "editor.background": "#efebe1",
          "editor.foreground": "#171717"
        },
        tokenColors: [
          { scope: ["comment", "punctuation.definition.comment"], settings: { foreground: "#76716a", fontStyle: "italic" } },
          { scope: ["keyword", "storage", "storage.type", "storage.modifier"], settings: { foreground: "#171717", fontStyle: "bold" } },
          { scope: ["constant.numeric", "constant.language", "constant.character"], settings: { foreground: "#3d3a35" } },
          { scope: ["string", "string.quoted", "string punctuation"], settings: { foreground: "#5a554e" } },
          { scope: ["entity.name.function", "support.function"], settings: { foreground: "#171717" } },
          { scope: ["entity.name.type", "support.type", "support.class"], settings: { foreground: "#44413c" } },
          { scope: ["variable", "variable.other", "parameter"], settings: { foreground: "#2f2d29" } },
          { scope: ["meta.preprocessor", "keyword.control.directive", "punctuation.definition.directive"], settings: { foreground: "#5f5a52" } },
          { scope: ["punctuation", "operator"], settings: { foreground: "#6e6961" } }
        ]
      }
    ],
    langs: ["javascript", "typescript", "cpp", "c", "python", "bash", "powershell", "json", "markdown", "html", "css"]
  });
  return highlighterPromise;
};

const renderMarkdown = async (markdown: string): Promise<string> => {
  const highlighter = await getHighlighter();

  const tree = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(() => (node: any) => {
      const visit = (target: any) => {
        if (!target || typeof target !== "object") return;
        if (target.tagName === "pre" && Array.isArray(target.children)) {
          const code = target.children.find((child: any) => child.tagName === "code");
          const className = code?.properties?.className || [];
          const langClass = Array.isArray(className) ? className.find((item) => String(item).startsWith("language-")) : "";
          const lang = normalizeLang(String(langClass || "language-text").replace("language-", ""));
          const source = Array.isArray(code?.children) ? code.children.map((child: any) => child.value || "").join("") : "";
          const highlighted = highlighter.codeToHtml(source, { lang: lang || "text", theme: "guai-ink" });
          target.type = "raw";
          target.value = highlighted;
          delete target.tagName;
          delete target.properties;
          delete target.children;
          return;
        }
        if (Array.isArray(target.children)) target.children.forEach(visit);
      };
      visit(node);
    })
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(markdown);

  return fixImagePaths(String(tree));
};

const loadSite = async (): Promise<SiteData> => {
  const files = await walk(contentDir);
  const slugsByBase = new Map<string, string>();
  files.forEach((file) => {
    const base = path.basename(file, ".md").toLowerCase();
    slugsByBase.set(base, slugify(file));
  });

  const evidences = await Promise.all(
    files.map(async (file) => {
      const raw = await fs.readFile(file, "utf8");
      const parsed = parseFrontMatter(raw);
      const body = normalizeRefLinks(parsed.content, slugsByBase);
      const html = await renderMarkdown(body);
      const plainText = stripHtml(html);
      const tags = toArray(parsed.data.tags);
      const categories = toArray(parsed.data.categories || parsed.data.category);
      const clues = Array.from(new Set([...tags, ...categories])).sort((a, b) => a.localeCompare(b, "zh-CN"));
      const meta: EvidenceMeta = {
        title: String(parsed.data.title || path.basename(file, ".md")),
        date: parseDate(parsed.data.date),
        draft: Boolean(parsed.data.draft),
        tags,
        categories,
        clues,
        slug: slugify(file),
        sourcePath: path.relative(root, file).replace(/\\/g, "/"),
        readingTime: readTime(plainText),
        cover: parseCover(parsed.data)
      };
      return { meta, html, plainText };
    })
  );

  evidences.sort((left, right) => new Date(right.meta.date).getTime() - new Date(left.meta.date).getTime());

  const clueMap = new Map<string, { slug: string; name: string; count: number }>();
  evidences.forEach((evidence) => {
    evidence.meta.clues.forEach((name) => {
      const slug = encodeURIComponent(name.trim().toLowerCase().replace(/\s+/g, "-"));
      const current = clueMap.get(slug) || { slug, name, count: 0 };
      current.count += 1;
      clueMap.set(slug, current);
    });
  });

  const clues = Array.from(clueMap.values()).sort((left, right) => right.count - left.count || left.name.localeCompare(right.name, "zh-CN"));
  return { evidences, clues };
};

const writeGeneratedData = async (site: SiteData) => {
  await ensureDir(generatedDir);
  const payload = `import type { SiteData } from "../types";\n\nexport const siteData: SiteData = ${JSON.stringify(site, null, 2)};\n`;
  await fs.writeFile(path.join(generatedDir, "site-data.ts"), payload, "utf8");
};

const writePublishAttributes = async () => {
  await fs.writeFile(
    path.join(distDir, ".gitattributes"),
    "* text eol=lf\n*.png binary\n*.jpg binary\n*.jpeg binary\n*.gif binary\n*.ico binary\n*.woff binary\n*.woff2 binary\n",
    "utf8"
  );
};

const htmlPathForRoute = (route: RouteData): string => {
  if (route.kind === "not-found") return path.join(distDir, "404.html");
  const routeName = routePath(route).replace(/^\/|\/$/g, "");
  if (!routeName) return path.join(distDir, "index.html");
  const fileParts = routeName.split("/").map((part) => decodeURIComponent(part));
  return path.join(distDir, ...fileParts, "index.html");
};

const pageTitle = (route: RouteData): string => {
  if (route.kind === "home") return siteTitle;
  if (route.kind === "dossier") return `归档 · ${siteTitle}`;
  if (route.kind === "clues") return `标签 · ${siteTitle}`;
  if (route.kind === "clue") return `#${decodeURIComponent(route.clue)} · ${siteTitle}`;
  if (route.kind === "evidence") return `${route.evidence.meta.title} · ${siteTitle}`;
  return `页面不存在 · ${siteTitle}`;
};

const renderPage = async (route: RouteData, template: string, render: (route: RouteData) => string) => {
  const appHtml = render(route);
  const title = pageTitle(route);
  const description = route.kind === "evidence" ? route.evidence.plainText.slice(0, 140) : siteDescription;
  const canonical = new URL(routePath(route), siteUrl).href;
  const html = template
    .replace("<!--app-html-->", appHtml)
    .replace(/<title>.*?<\/title>/, `<title>${escapeHtml(title)}</title>`)
    .replace("</head>", `<meta name="description" content="${escapeHtml(description)}" />\n<meta property="og:title" content="${escapeHtml(title)}" />\n<meta property="og:description" content="${escapeHtml(description)}" />\n<meta property="og:url" content="${canonical}" />\n<link rel="canonical" href="${canonical}" />\n</head>`);
  const target = htmlPathForRoute(route);
  await ensureDir(path.dirname(target));
  await fs.writeFile(target, html, "utf8");
};

const writeFeeds = async (site: SiteData) => {
  const urls = allRoutes(site)
    .filter((route) => route.kind !== "not-found")
    .map((route) => `<url><loc>${new URL(routePath(route), siteUrl).href}</loc></url>`)
    .join("");
  await fs.writeFile(path.join(distDir, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, "utf8");

  const items = site.evidences
    .slice(0, 30)
    .map((evidence) => {
      const link = new URL(`/evidence/${evidence.meta.slug}/`, siteUrl).href;
      return `<item><title>${escapeHtml(evidence.meta.title)}</title><link>${link}</link><guid>${link}</guid><pubDate>${new Date(evidence.meta.date).toUTCString()}</pubDate><description>${escapeHtml(evidence.plainText.slice(0, 180))}</description></item>`;
    })
    .join("");
  await fs.writeFile(path.join(distDir, "rss.xml"), `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>${escapeHtml(siteTitle)}</title><link>${siteUrl}</link><description>${escapeHtml(siteDescription)}</description>${items}</channel></rss>`, "utf8");

  const search = site.evidences.map((evidence) => ({
    title: evidence.meta.title,
    slug: evidence.meta.slug,
    date: evidence.meta.date,
    clues: evidence.meta.clues,
    body: evidence.plainText
  }));
  await fs.writeFile(path.join(distDir, "search-index.json"), JSON.stringify(search), "utf8");
};

const build = async () => {
  const site = await loadSite();
  await writeGeneratedData(site);
  await fs.rm(distDir, { recursive: true, force: true });
  await fs.rm(ssrOutDir, { recursive: true, force: true });

  await viteBuild({ build: { outDir: distDir, emptyOutDir: true, manifest: true } });

  const template = await fs.readFile(path.join(distDir, "index.html"), "utf8");
  const serverEntry = pathToFileURL(path.join(ssrOutDir, "server.js")).href;
  await viteBuild({
    build: {
      ssr: "src/server.tsx",
      outDir: ssrOutDir,
      emptyOutDir: true,
      rollupOptions: {
        output: { entryFileNames: "server.js" }
      }
    }
  });
  const { render } = await import(`${serverEntry}?v=${Date.now()}`);

  await Promise.all(allRoutes(site).map((route) => renderPage(route, template, render)));
  await writeFeeds(site);
  await writePublishAttributes();
  await fs.rm(ssrOutDir, { recursive: true, force: true });
};

build().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
