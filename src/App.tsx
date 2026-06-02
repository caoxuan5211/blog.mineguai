import { useEffect, useMemo, useState } from "react";
import { cluePath, evidencePath, findRoute, routePath, siteTitle } from "./routes";
import { byNewest, estimateReadLabel, formatDate, shortTitle } from "./content-utils";
import type { EvidenceDocument, RouteData, SiteData } from "./types";

type AppProps = {
  route: RouteData;
};

type Theme = "light" | "dark";

const themeKey = "guai-theme";
const navItems = [
  { label: "文章", hint: "posts", href: "/" },
  { label: "归档", hint: "archive", href: "/dossier/" },
  { label: "标签", hint: "tags", href: "/clues/" }
];

export function App({ route }: AppProps) {
  const [commandOpen, setCommandOpen] = useState(false);

  return (
    <>
      <a className="skip-link" href="#content">跳到正文</a>
      <ThemeBoot />
      <InkBackground />
      <Header route={route} onSearch={() => setCommandOpen(true)} />
      <main id="content" className="site-main">
        <RouteSwitch route={route} />
      </main>
      <SiteFooter site={route.site} />
      <CommandPanel site={route.site} open={commandOpen} onClose={() => setCommandOpen(false)} />
    </>
  );
}

export function AppForPath({ path, site }: { path: string; site: SiteData }) {
  return <App route={findRoute(path, site)} />;
}

function ThemeBoot() {
  return (
    <script
      suppressHydrationWarning
      dangerouslySetInnerHTML={{
        __html:
          "(()=>{try{const t=localStorage.getItem('guai-theme')||'light';document.documentElement.dataset.theme=t==='dark'?'dark':'light';}catch{document.documentElement.dataset.theme='light';}})();"
      }}
    />
  );
}

function InkBackground() {
  return (
    <>
      <div className="ink-wash" aria-hidden="true" />
      <div className="paper-grain" aria-hidden="true" />
    </>
  );
}

function Header({ route, onSearch }: { route: RouteData; onSearch: () => void }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>("light");
  const currentPath = routePath(route);
  const writerHref = getWriterHref(route);
  const isActive = (href: string) => href === "/" ? route.kind === "home" : currentPath.startsWith(href);

  const setNextTheme = () => {
    const next = readTheme() === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    localStorage.setItem(themeKey, next);
  };

  useEffect(() => setTheme(readTheme()), []);
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => event.key === "Escape" && setMobileMenuOpen(false);
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [mobileMenuOpen]);

  return (
    <header className="site-header">
      <a className="brand-stamp" href="/" aria-label="返回博客首页">
        <strong>怪话怪</strong>
        <small>blog notes</small>
      </a>
      <nav className="paper-nav" aria-label="主导航">
        <NavLinks isActive={isActive} />
      </nav>
      <div className="header-tools">
        <a className="site-edit-link" href={writerHref} target="_blank" rel="noreferrer" title="本地写作台">
          写作
        </a>
        <button className="ink-button" type="button" onClick={() => { setMobileMenuOpen(false); onSearch(); }}>
          搜索
        </button>
        <ThemeToggle theme={theme} onToggle={setNextTheme} className="desktop-theme-toggle" />
        <button
          className="ink-button menu-button"
          type="button"
          aria-controls="mobile-site-menu"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "关闭导航" : "打开导航"}
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          菜单
        </button>
      </div>
      <div id="mobile-site-menu" className="mobile-menu" hidden={!mobileMenuOpen}>
        <nav className="mobile-nav" aria-label="手机端导航">
          <NavLinks isActive={isActive} onNavigate={() => setMobileMenuOpen(false)} />
        </nav>
        <ThemeToggle theme={theme} onToggle={() => { setNextTheme(); setMobileMenuOpen(false); }} />
      </div>
    </header>
  );
}

function getWriterHref(route: RouteData) {
  if (route.kind !== "evidence") return "guai-blog://edit";
  return `guai-blog://edit?path=${encodeURIComponent(route.evidence.meta.sourcePath)}`;
}

function NavLinks({ isActive, onNavigate }: { isActive: (href: string) => boolean; onNavigate?: () => void }) {
  return navItems.map((item) => (
    <a key={item.href} href={item.href} className={isActive(item.href) ? "is-active" : ""} onClick={onNavigate}>
      <span>{item.label}</span>
      <em>{item.hint}</em>
    </a>
  ));
}

function ThemeToggle({ theme, onToggle, className = "" }: { theme: Theme; onToggle: () => void; className?: string }) {
  return (
    <button className={`theme-toggle ${className}`.trim()} type="button" onClick={onToggle} aria-label="切换黑白主题">
      {theme === "dark" ? "白" : "墨"}
    </button>
  );
}

function readTheme(): Theme {
  if (typeof document === "undefined") return "light";
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

function RouteSwitch({ route }: { route: RouteData }) {
  if (route.kind === "home") return <HomePage site={route.site} />;
  if (route.kind === "dossier") return <DossierPage site={route.site} />;
  if (route.kind === "clues") return <CluesPage site={route.site} />;
  if (route.kind === "clue") return <CluePage site={route.site} clue={route.clue} />;
  if (route.kind === "evidence") return <EvidencePage evidence={route.evidence} site={route.site} />;
  return <NotFoundPage site={route.site} />;
}

function HomePage({ site }: { site: SiteData }) {
  const newest = byNewest(site.evidences);
  const lead = newest[0];
  return (
    <section className="home-stage">
      <div className="home-intro">
        <p className="kicker">写作、算法、工程记录</p>
        <h1>{siteTitle}</h1>
        <p className="lead">
          {site.evidences.length} 篇文章，{site.clues.length} 个标签
          {lead ? `，最近更新 ${formatDate(lead.meta.date)}` : ""}。
        </p>
        <div className="home-actions">
          <a className="primary-link" href="/dossier/">查看归档</a>
          <a href="guai-blog://edit">打开写作台</a>
        </div>
      </div>
      <div className="personal-mark" aria-label="个人标记">
        <img src="/assets/images/wanzi1.jpg" alt="怪话怪头像" />
        <span>mineguai</span>
      </div>
      <EvidenceRail evidences={newest.slice(0, 8)} title="近期文章" action="全部文章" />
      <ClueStrip site={site} />
    </section>
  );
}

function EvidenceRail({ evidences, title, action = "归档" }: { evidences: EvidenceDocument[]; title: string; action?: string }) {
  return (
    <section className="evidence-section">
      <div className="section-head">
        <h2>{title}</h2>
        <a href="/dossier/">{action}</a>
      </div>
      <div className="evidence-grid">
        {evidences.map((evidence) => <EvidenceCard key={evidence.meta.slug} evidence={evidence} />)}
      </div>
    </section>
  );
}

function EvidenceCard({ evidence }: { evidence: EvidenceDocument }) {
  return (
    <a className="evidence-card" href={evidencePath(evidence)}>
      <span className="evidence-meta">{formatDate(evidence.meta.date)} · {estimateReadLabel(evidence.meta.readingTime)}</span>
      <strong>{shortTitle(evidence.meta.title, 28)}</strong>
      <span className="clue-list">
        {evidence.meta.draft ? <em>草稿</em> : null}
        {evidence.meta.clues.slice(0, 3).map((clue) => <em key={clue}>#{clue}</em>)}
      </span>
    </a>
  );
}

function ClueStrip({ site }: { site: SiteData }) {
  return (
    <section className="clue-strip" aria-label="标签">
      <div className="section-head">
        <h2>标签</h2>
        <a href="/clues/">全部标签</a>
      </div>
      <div className="clue-row">
        {site.clues.slice(0, 18).map((clue) => (
          <a key={clue.slug} href={cluePath(clue.slug)}>#{clue.name}<span>{clue.count}</span></a>
        ))}
      </div>
    </section>
  );
}

function DossierPage({ site }: { site: SiteData }) {
  const grouped = useMemo(() => {
    const map = new Map<string, EvidenceDocument[]>();
    byNewest(site.evidences).forEach((evidence) => {
      const year = new Date(evidence.meta.date).getFullYear().toString();
      map.set(year, [...(map.get(year) || []), evidence]);
    });
    return Array.from(map.entries());
  }, [site.evidences]);

  return (
    <section className="page-shell">
      <PageHeader eyebrow="archive" title="归档" text="按时间查看全部文章，草稿会保留标记。" />
      <div className="timeline">
        {grouped.map(([year, evidences]) => (
          <section key={year} className="year-stack">
            <h2>{year}</h2>
            <div className="evidence-list">
              {evidences.map((evidence) => <EvidenceCard key={evidence.meta.slug} evidence={evidence} />)}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}

function CluesPage({ site }: { site: SiteData }) {
  return (
    <section className="page-shell">
      <PageHeader eyebrow="tags" title="标签" text="标签和分类合并显示，点击后查看相关文章。" />
      <div className="clue-wall">
        {site.clues.map((clue) => <a key={clue.slug} href={cluePath(clue.slug)}><span>#{clue.name}</span><em>{clue.count} 篇</em></a>)}
      </div>
    </section>
  );
}

function CluePage({ site, clue }: { site: SiteData; clue: string }) {
  const target = site.clues.find((item) => item.slug === clue);
  const evidences = byNewest(site.evidences).filter((evidence) =>
    evidence.meta.clues.some((item) => encodeURIComponent(item.toLowerCase().replace(/\s+/g, "-")) === clue)
  );

  return (
    <section className="page-shell">
      <PageHeader eyebrow="tag" title={`#${target?.name || clue}`} text="当前标签下的相关文章。" />
      <div className="evidence-grid">
        {evidences.map((evidence) => <EvidenceCard key={evidence.meta.slug} evidence={evidence} />)}
      </div>
    </section>
  );
}

function EvidencePage({ evidence }: { evidence: EvidenceDocument; site: SiteData }) {
  const headingView = useMemo(() => buildHeadingView(evidence.html), [evidence.html]);
  return (
    <article className="evidence-page">
      <header className="evidence-hero">
        <a className="back-link" href="/dossier/">返回归档</a>
        <p className="kicker">article</p>
        <h1>{evidence.meta.title}</h1>
        <div className="evidence-hero-meta">
          <span>{formatDate(evidence.meta.date)}</span>
          <span>{estimateReadLabel(evidence.meta.readingTime)}</span>
          {evidence.meta.draft ? <span>草稿</span> : null}
        </div>
        <div className="clue-list hero-clues">
          {evidence.meta.clues.map((clue) => (
            <a key={clue} href={cluePath(encodeURIComponent(clue.toLowerCase().replace(/\s+/g, "-")))}>#{clue}</a>
          ))}
        </div>
      </header>
      <div className="manuscript" dangerouslySetInnerHTML={{ __html: headingView.html }} />
      <EvidenceToc headings={headingView.headings} />
    </article>
  );
}

type TocHeading = { id: string; level: number; text: string };

function EvidenceToc({ headings }: { headings: TocHeading[] }) {
  const [open, setOpen] = useState(false);
  if (headings.length < 3) return null;

  return (
    <aside className={`evidence-toc${open ? " is-open" : ""}`} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button className="toc-tab" type="button" aria-label="展开文章目录" aria-expanded={open} onClick={() => setOpen((value) => !value)}>
        目
      </button>
      <nav className="toc-panel" aria-label="文章目录">
        <strong>目录</strong>
        <ol>
          {headings.map((heading) => (
            <li key={heading.id} className={`toc-level-${heading.level}`}><a href={`#${heading.id}`}>{heading.text}</a></li>
          ))}
        </ol>
      </nav>
    </aside>
  );
}

function buildHeadingView(html: string): { html: string; headings: TocHeading[] } {
  const used = new Map<string, number>();
  const headings: TocHeading[] = [];
  const withIds = html.replace(/<h([2-3])([^>]*)>([\s\S]*?)<\/h\1>/g, (full, levelText: string, attrs: string, inner: string) => {
    if (/\sid=("|')[^"']+\1/.test(attrs)) return full;
    const text = decodeHtml(stripTags(inner)).trim();
    if (!text) return full;
    const base = slugHeading(text);
    const count = used.get(base) || 0;
    used.set(base, count + 1);
    const id = count ? `${base}-${count + 1}` : base;
    headings.push({ id, level: Number(levelText), text });
    return `<h${levelText}${attrs} id="${id}">${inner}</h${levelText}>`;
  });
  return { html: withIds, headings };
}

function stripTags(value: string) {
  return value.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ");
}

function decodeHtml(value: string) {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, "\"")
    .replace(/&#39;/g, "'")
    .replace(/&#x([0-9a-f]+);/gi, (_, code: string) => String.fromCodePoint(Number.parseInt(code, 16)))
    .replace(/&#(\d+);/g, (_, code: string) => String.fromCodePoint(Number.parseInt(code, 10)));
}

function slugHeading(value: string) {
  return value.toLowerCase().replace(/[`"'“”‘’]/g, "").replace(/[^\p{L}\p{N}]+/gu, "-").replace(/^-+|-+$/g, "") || "section";
}

function NotFoundPage({ site }: { site: SiteData }) {
  return (
    <section className="page-shell not-found">
      <PageHeader eyebrow="404" title="页面不存在" text="路径不存在。可以回到归档，或者打开搜索面板。" />
      <EvidenceRail evidences={byNewest(site.evidences).slice(0, 4)} title="最近文章" />
    </section>
  );
}

function PageHeader({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <header className="page-header">
      <p className="kicker">{eyebrow}</p>
      <h1>{title}</h1>
      <p>{text}</p>
    </header>
  );
}

function CommandPanel({ site, open, onClose }: { site: SiteData; open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const results = useMemo(() => {
    const needle = query.trim().toLowerCase();
    const source = byNewest(site.evidences);
    if (!needle) return source.slice(0, 8);
    return source.filter((evidence) => [evidence.meta.title, evidence.meta.clues.join(" "), evidence.plainText.slice(0, 1200)].join(" ").toLowerCase().includes(needle)).slice(0, 12);
  }, [query, site.evidences]);

  useEffect(() => setActiveIndex(0), [query, results.length]);
  if (!open) return null;

  const openActiveResult = () => {
    const target = results[activeIndex];
    if (!target) return;
    window.location.href = evidencePath(target);
    onClose();
  };
  const handleCommandKeys = (event: React.KeyboardEvent) => {
    if (event.key === "Escape") { event.preventDefault(); onClose(); }
    if (!results.length) return;
    if (event.key === "ArrowDown") { event.preventDefault(); setActiveIndex((current) => (current + 1) % results.length); }
    if (event.key === "ArrowUp") { event.preventDefault(); setActiveIndex((current) => (current - 1 + results.length) % results.length); }
    if (event.key === "Enter") { event.preventDefault(); openActiveResult(); }
  };

  return (
    <div className="command-layer" role="dialog" aria-modal="true" aria-label="搜索文章">
      <button className="command-backdrop" type="button" onClick={onClose} aria-label="关闭搜索" />
      <section className="command-panel" onKeyDown={handleCommandKeys}>
        <div className="command-head">
          <span>搜索文章</span>
          <button type="button" onClick={onClose}>关闭</button>
        </div>
        <input autoFocus value={query} onChange={(event) => setQuery(event.target.value)} placeholder="输入标题、标签或正文片段" />
        <div className="command-results" role="listbox" aria-label="搜索结果">
          {results.map((evidence, index) => (
            <a key={evidence.meta.slug} href={evidencePath(evidence)} className={index === activeIndex ? "is-active" : ""} role="option" aria-selected={index === activeIndex} onMouseEnter={() => setActiveIndex(index)} onClick={onClose}>
              <span>{formatDate(evidence.meta.date)}</span>
              <strong>{shortTitle(evidence.meta.title, 30)}</strong>
              <em>{commandMeta(evidence)}</em>
            </a>
          ))}
          {!results.length ? <p className="command-empty">没有命中文章</p> : null}
        </div>
      </section>
    </div>
  );
}

function commandMeta(evidence: EvidenceDocument) {
  const clues = evidence.meta.clues.slice(0, 2).join(" / ");
  return clues ? `${estimateReadLabel(evidence.meta.readingTime)} · ${clues}` : estimateReadLabel(evidence.meta.readingTime);
}

function SiteFooter({ site }: { site: SiteData }) {
  return (
    <footer className="site-footer">
      <span>{site.evidences.length} 篇文章 / {site.clues.length} 个标签</span>
      <a href="/rss.xml">RSS</a>
    </footer>
  );
}
