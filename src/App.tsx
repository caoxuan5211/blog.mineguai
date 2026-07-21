import { useEffect, useMemo, useRef, useState } from "react";
import { cluePath, evidencePath, findRoute, routePath, siteTitle } from "./routes";
import { byNewest, byUpdated, estimateReadLabel, formatDate, normalizeClueSlug, shortTitle } from "./content-utils";
import type { EvidenceDocument, RouteData, SiteData } from "./types";

type AppProps = {
  route: RouteData;
};

const navItems = [
  { label: "首页", href: "/" },
  { label: "归档", href: "/dossier/" },
  { label: "标签", href: "/clues/" }
];

export function App({ route }: AppProps) {
  const [commandOpen, setCommandOpen] = useState(false);
  const searchTrigger = useRef<HTMLElement | null>(null);
  const isHome = route.kind === "home";
  const openCommand = () => {
    searchTrigger.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    setCommandOpen(true);
  };
  const closeCommand = () => {
    setCommandOpen(false);
    window.requestAnimationFrame(() => searchTrigger.current?.focus());
  };

  useEffect(() => {
    const openSearch = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      const typing = target?.tagName === "INPUT" || target?.tagName === "TEXTAREA" || target?.isContentEditable;
      if (!typing && (event.key === "/" || ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k"))) {
        event.preventDefault();
        openCommand();
      }
    };
    window.addEventListener("keydown", openSearch);
    return () => window.removeEventListener("keydown", openSearch);
  }, []);

  return (
    <>
      <a className="skip-link" href="#content">跳到正文</a>
      <div className="bg-noise" aria-hidden="true" />
      <div className="scroll-progress" aria-hidden="true" />
      <SiteHeader route={route} onSearch={openCommand} />
      <main id="content" className={`site-main${isHome ? " site-main--home" : ""}`}>
        <RouteSwitch route={route} onSearch={openCommand} />
      </main>
      <SiteFooter site={route.site} />
      <CommandPanel site={route.site} open={commandOpen} onClose={closeCommand} />
    </>
  );
}

export function AppForPath({ path, site }: { path: string; site: SiteData }) {
  return <App route={findRoute(path, site)} />;
}

function SiteHeader({ route, onSearch }: { route: RouteData; onSearch: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const currentPath = routePath(route);
  const isActive = (href: string) => href === "/" ? route.kind === "home" : currentPath.startsWith(href);

  useEffect(() => {
    if (!menuOpen) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [menuOpen]);

  return (
    <header className="site-header">
      <div className="shell site-header__row">
        <a className="brand" href="/" aria-label="返回首页">
          <span className="brand__mark">{siteTitle}</span>
          <span className="brand__cursor" aria-hidden="true" />
        </a>
        <nav className="site-nav" aria-label="主导航">
          <NavLinks isActive={isActive} />
        </nav>
        <div className="site-header__tools">
          <button className="tool-button tool-button--search" type="button" onClick={onSearch} aria-label="搜索">
            <Icon name="search" />
            <span>搜索</span>
          </button>
          <button
            className="tool-button tool-button--icon"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((value) => !value)}
          >
            <Icon name={menuOpen ? "close" : "menu"} />
            <span className="sr-only">切换导航</span>
          </button>
        </div>
      </div>
      <div id="mobile-nav" className={`mobile-nav-panel${menuOpen ? " is-open" : ""}`} hidden={!menuOpen}>
        <NavLinks isActive={isActive} onNavigate={() => setMenuOpen(false)} />
      </div>
    </header>
  );
}

function NavLinks({ isActive, onNavigate }: { isActive: (href: string) => boolean; onNavigate?: () => void }) {
  return (
    <>
      {navItems.map((item) => {
        const active = isActive(item.href);
        return (
          <a
            key={item.href}
            href={item.href}
            className={active ? "is-active" : undefined}
            aria-current={active ? "page" : undefined}
            onClick={onNavigate}
          >
            <strong>{item.label}</strong>
          </a>
        );
      })}
    </>
  );
}

function RouteSwitch({ route, onSearch }: { route: RouteData; onSearch: () => void }) {
  if (route.kind === "home") return <HomePage site={route.site} onSearch={onSearch} />;
  if (route.kind === "dossier") return <DossierPage site={route.site} />;
  if (route.kind === "clues") return <CluesPage site={route.site} />;
  if (route.kind === "clue") return <CluePage site={route.site} clue={route.clue} />;
  if (route.kind === "evidence") return <EvidencePage evidence={route.evidence} />;
  return <NotFoundPage site={route.site} />;
}

/* ---------------------------------- home ---------------------------------- */

function HomePage({ site, onSearch }: { site: SiteData; onSearch: () => void }) {
  const newest = byUpdated(site.evidences);
  const featured = newest[0];
  const recent = newest.slice(0, 6);
  const firstPostHref = featured ? evidencePath(featured) : "/dossier/";

  return (
    <div className="home-page">
      <section className="hero shell" aria-labelledby="home-title">
        <div className="hero__copy" data-reveal>
          <h1 id="home-title">
            <em className="hero__kai">怪话</em><span className="hero__cursor" aria-hidden="true" />
          </h1>
          <div className="hero__actions">
            <a className="btn btn--solid" href={firstPostHref}>
              <span>读最新一篇</span><i aria-hidden="true">→</i>
            </a>
            <button className="btn btn--ghost" type="button" onClick={onSearch}>
              <span>搜索全站</span>
            </button>
          </div>
        </div>

        <div className="hero__side" data-reveal>
          <figure className="portrait">
            <span className="portrait__tape" aria-hidden="true" />
            <img src="/assets/images/wanzi1.jpg" alt="mineguai 的头像" />
          </figure>
          {featured ? (
            <a className="latest-card" href={evidencePath(featured)}>
              <span className="latest-card__label">最新</span>
              <strong>{shortTitle(featured.meta.title, 30)}</strong>
              <span className="latest-card__meta">
                {formatDate(featured.meta.updated || featured.meta.date)} · {estimateReadLabel(featured.meta.readingTime)}
              </span>
            </a>
          ) : null}
        </div>
      </section>

      <Ticker posts={newest} />

      <section className="section shell" aria-labelledby="recent-title">
        <header className="section-head" data-reveal>
          <div>
            <h2 id="recent-title">最近更新</h2>
          </div>
          <a className="section-head__more" href="/dossier/">
            全部 {site.evidences.length} 篇 <i aria-hidden="true">→</i>
          </a>
        </header>
        <PostRows posts={recent} />
      </section>

      <section className="manifest" aria-labelledby="manifest-title">
        <div className="shell" data-reveal>
          <header className="manifest__head">
            <h2 id="manifest-title">标签</h2>
            <a className="manifest__more" href="/clues/">
              全部标签 <i aria-hidden="true">→</i>
            </a>
          </header>
          <nav className="manifest__tags" aria-label="热门标签">
            {site.clues.slice(0, 12).map((clue) => (
              <a key={clue.slug} href={cluePath(clue.slug)}>
                <strong>#{clue.name}</strong>
                <span>{clue.count}</span>
              </a>
            ))}
          </nav>
        </div>
      </section>
    </div>
  );
}

function Ticker({ posts }: { posts: EvidenceDocument[] }) {
  if (!posts.length) return null;
  const loop = [...posts, ...posts];
  const duration = Math.max(28, Math.min(72, posts.length * 3.4));
  return (
    <div className="ticker" aria-label="最新文章滚动">
      <div className="ticker__glow" aria-hidden="true" />
      <div className="ticker__viewport">
        <div
          className="ticker__track"
          style={{ ["--ticker-duration" as string]: `${duration}s` }}
        >
          {loop.map((post, index) => {
            const duplicate = index >= posts.length;
            return (
              <a
                key={`${post.meta.slug}-${index}`}
                className="ticker__item"
                href={evidencePath(post)}
                aria-hidden={duplicate ? "true" : undefined}
                tabIndex={duplicate ? -1 : undefined}
              >
                <span className="ticker__dot" aria-hidden="true" />
                <span className="ticker__label">{shortTitle(post.meta.title, 24)}</span>
                <span className="ticker__meta" aria-hidden="true">
                  {formatDate(post.meta.updated || post.meta.date)}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function PostRows({ posts, offset = 0 }: { posts: EvidenceDocument[]; offset?: number }) {
  return (
    <ol className="post-rows" data-reveal>
      {posts.map((post, index) => (
        <li key={post.meta.slug}>
          <a className="post-row" href={evidencePath(post)}>
            <span className="post-row__no">{String(offset + index + 1).padStart(2, "0")}</span>
            <span className="post-row__title">
              <strong>{shortTitle(post.meta.title, 40)}</strong>
              {post.meta.draft ? <i className="stamp">草稿</i> : null}
            </span>
            <span className="post-row__meta">
              <time dateTime={post.meta.updated || post.meta.date}>{formatDate(post.meta.updated || post.meta.date)}</time>
              <em>{estimateReadLabel(post.meta.readingTime)}</em>
            </span>
            <span className="post-row__arrow" aria-hidden="true">↗</span>
          </a>
        </li>
      ))}
    </ol>
  );
}

/* ------------------------------- inner pages ------------------------------ */

function PageShell({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="page-shell shell">
      <header className="page-intro" data-reveal>
        <h1>{title}</h1>
      </header>
      {children}
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

  let offset = 0;
  return (
    <PageShell title="归档">
      <div className="archive-stack">
        {grouped.map(([year, posts]) => {
          const start = offset;
          offset += posts.length;
          return (
            <section key={year} className="archive-year" data-reveal>
              <div className="archive-year__label">
                <strong>{year}</strong>
                <span>{posts.length} 篇</span>
              </div>
              <PostRows posts={posts} offset={start} />
            </section>
          );
        })}
      </div>
    </PageShell>
  );
}

function CluesPage({ site }: { site: SiteData }) {
  const clues = [...site.clues].sort((left, right) => right.count - left.count);
  return (
    <PageShell title="标签">
      <div className="tag-cloud" data-reveal>
        {clues.map((clue) => (
          <a key={clue.slug} href={cluePath(clue.slug)}>
            <strong>#{clue.name}</strong>
            <span>{clue.count} 篇</span>
          </a>
        ))}
      </div>
    </PageShell>
  );
}

function CluePage({ site, clue }: { site: SiteData; clue: string }) {
  const target = site.clues.find((item) => item.slug === clue);
  const posts = byNewest(site.evidences).filter((evidence) =>
    evidence.meta.clues.some((item) => normalizeClueSlug(item) === clue)
  );

  return (
    <PageShell title={`#${target?.name || clue}`}>
      <PostRows posts={posts} />
    </PageShell>
  );
}

function EvidencePage({ evidence }: { evidence: EvidenceDocument }) {
  const headingView = useMemo(() => buildHeadingView(evidence.html), [evidence.html]);
  return (
    <article className="entry-shell shell">
      <header className="entry-hero" data-reveal>
        <div className="entry-hero__topline">
          <a className="entry-back" href="/dossier/">← 返回归档</a>
        </div>
        <h1>{evidence.meta.title}</h1>
        <div className="entry-hero__meta">
          <span>{formatDate(evidence.meta.updated || evidence.meta.date)}</span>
          <span>{estimateReadLabel(evidence.meta.readingTime)}</span>
          {evidence.meta.draft ? <span className="stamp">草稿</span> : null}
          {evidence.meta.clues.map((clue) => (
            <a key={clue} href={cluePath(normalizeClueSlug(clue))}>#{clue}</a>
          ))}
        </div>
      </header>
      <div className="entry-body">
        <div className="manuscript" dangerouslySetInnerHTML={{ __html: headingView.html }} />
      </div>
      <EvidenceToc headings={headingView.headings} />
    </article>
  );
}

type TocHeading = { id: string; level: number; text: string };

function EvidenceToc({ headings }: { headings: TocHeading[] }) {
  const [open, setOpen] = useState(false);
  if (headings.length < 2) return null;

  return (
    <aside className={`entry-toc${open ? " is-open" : ""}`} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button className="entry-toc__tab" type="button" aria-expanded={open} onClick={() => setOpen((value) => !value)}>
        目录
      </button>
      <nav className="entry-toc__panel" aria-label="文章目录">
        <strong>本页目录</strong>
        <ol>
          {headings.map((heading) => (
            <li key={heading.id} className={`toc-level-${heading.level}`}>
              <a href={`#${heading.id}`}>{heading.text}</a>
            </li>
          ))}
        </ol>
      </nav>
    </aside>
  );
}

function NotFoundPage({ site }: { site: SiteData }) {
  return (
    <PageShell title="404">
      <PostRows posts={byNewest(site.evidences).slice(0, 4)} />
    </PageShell>
  );
}

/* --------------------------------- search --------------------------------- */

function CommandPanel({ site, open, onClose }: { site: SiteData; open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const searchSource = useMemo(() => byUpdated(site.evidences).map((evidence) => ({
    evidence,
    title: normalizeSearchText(evidence.meta.title),
    clues: normalizeSearchText(evidence.meta.clues.join(" ")),
    body: normalizeSearchText(evidence.plainText.slice(0, 4000))
  })), [site.evidences]);
  const results = useMemo(() => {
    const terms = normalizeSearchText(query).split(" ").filter(Boolean);
    if (!terms.length) return searchSource.slice(0, 8).map((item) => item.evidence);
    return searchSource
      .map((item) => ({
        evidence: item.evidence,
        score: terms.reduce((total, term) => total
          + (item.title.includes(term) ? 12 : 0)
          + (item.clues.includes(term) ? 7 : 0)
          + (item.body.includes(term) ? 2 : 0), 0)
      }))
      .filter((item) => item.score > 0)
      .sort((left, right) => right.score - left.score)
      .slice(0, 12)
      .map((item) => item.evidence);
  }, [query, searchSource]);

  useEffect(() => setActiveIndex(0), [query, results.length]);
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previousOverflow; };
  }, [open]);
  if (!open) return null;

  const openActiveResult = () => {
    const target = results[activeIndex];
    if (!target) return;
    window.location.href = evidencePath(target);
    onClose();
  };

  const handleKeys = (event: React.KeyboardEvent) => {
    if (event.key === "Escape") {
      event.preventDefault();
      onClose();
      return;
    }
    if (event.key === "Tab") {
      const focusable = Array.from(event.currentTarget.querySelectorAll<HTMLElement>(
        'input, button:not([disabled]), a[href]'
      ));
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
      return;
    }
    if ((event.target as HTMLElement).getAttribute("role") !== "combobox") return;
    if (!results.length) return;
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((current) => (current + 1) % results.length);
    }
    if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((current) => (current - 1 + results.length) % results.length);
    }
    if (event.key === "Enter") {
      event.preventDefault();
      openActiveResult();
    }
  };

  return (
    <div className="command-layer" role="dialog" aria-modal="true" aria-label="搜索文章">
      <button className="command-layer__backdrop" type="button" onClick={onClose} aria-label="关闭搜索" />
      <section className="command-panel" onKeyDown={handleKeys}>
        <div className="command-panel__head">
          <strong>搜索</strong>
          <span>{results.length} 条结果</span>
          <button type="button" onClick={onClose}>关闭</button>
        </div>
        <div className="command-panel__input">
          <input
            autoFocus
            aria-label="搜索文章"
            aria-controls="search-results"
            aria-expanded="true"
            aria-activedescendant={results[activeIndex] ? `search-result-${activeIndex}` : undefined}
            role="combobox"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="标题、标签或正文"
          />
        </div>
        <div id="search-results" className="command-panel__results" role="listbox" aria-label="搜索结果">
          {results.map((evidence, index) => (
            <a
              key={evidence.meta.slug}
              id={`search-result-${index}`}
              href={evidencePath(evidence)}
              className={index === activeIndex ? "is-active" : ""}
              role="option"
              aria-selected={index === activeIndex}
              onMouseEnter={() => setActiveIndex(index)}
              onClick={onClose}
            >
              <span>{formatDate(evidence.meta.updated || evidence.meta.date)}</span>
              <strong>{shortTitle(evidence.meta.title, 34)}</strong>
              <em>{commandMeta(evidence)}</em>
            </a>
          ))}
          {!results.length ? <p className="command-panel__empty">没有找到匹配内容，试试更短的关键词或标签名。</p> : null}
        </div>
      </section>
    </div>
  );
}

/* --------------------------------- footer --------------------------------- */

function SiteFooter({ site }: { site: SiteData }) {
  return (
    <footer className="site-footer">
      <div className="shell site-footer__row">
        <div className="site-footer__brand">
          <strong>{siteTitle}<span className="brand__cursor" aria-hidden="true" /></strong>
        </div>
        <nav aria-label="页脚导航">
          <a href="/rss.xml">RSS</a>
          <a href="/dossier/">归档</a>
          <a href="/clues/">标签</a>
        </nav>
        <p className="site-footer__colophon">
          © 2026 mineguai · {site.evidences.length} 篇 · {site.clues.length} 标签
        </p>
      </div>
    </footer>
  );
}

/* --------------------------------- helpers -------------------------------- */

function commandMeta(evidence: EvidenceDocument) {
  const clues = evidence.meta.clues.slice(0, 2).join(" / ");
  return clues ? `${estimateReadLabel(evidence.meta.readingTime)} · ${clues}` : estimateReadLabel(evidence.meta.readingTime);
}

function buildHeadingView(html: string): { html: string; headings: TocHeading[] } {
  const used = new Map<string, number>();
  const headings: TocHeading[] = [];
  const withIds = html.replace(/<h([2-4])([^>]*)>([\s\S]*?)<\/h\1>/g, (full, levelText: string, attrs: string, inner: string) => {
    const text = decodeHtml(stripTags(inner)).trim();
    if (!text) return full;
    const existingId = attrs.match(/\sid=("|')([^"']+)\1/)?.[2];
    if (existingId) {
      headings.push({ id: existingId, level: Number(levelText), text });
      return full;
    }
    const base = slugHeading(text);
    const count = used.get(base) || 0;
    used.set(base, count + 1);
    const id = count ? `${base}-${count + 1}` : base;
    headings.push({ id, level: Number(levelText), text });
    return `<h${levelText}${attrs} id="${id}">${inner}</h${levelText}>`;
  });
  return { html: withIds, headings };
}

function normalizeSearchText(value: string) {
  return value
    .normalize("NFKC")
    .toLocaleLowerCase("zh-CN")
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim();
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

function Icon({ name }: { name: string }) {
  if (name === "search") {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.6-3.6" /></svg>;
  }
  if (name === "menu") {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 7h14M5 12h14M5 17h14" /></svg>;
  }
  if (name === "close") {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" /></svg>;
  }
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 12h12" /></svg>;
}
