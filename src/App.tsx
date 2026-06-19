import { useEffect, useMemo, useState, type CSSProperties } from "react";
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

const topicItems = ["#wrogu", "#Algorithm", "#AI", "#pictures", "#Deep_Learning", "#workflow"];
const navWheelItems = [
  { title: "Articles", subtitle: "文章归档", icon: "article", href: "/dossier/" },
  { title: "Categories", subtitle: "分类目录", icon: "grid", href: "/clues/" },
  { title: "Explore More", subtitle: "探索更多", icon: "more", href: "/" },
  { title: "Tags", subtitle: "标签集合", icon: "tag", href: "/clues/" },
  { title: "Timeline", subtitle: "时间线", icon: "clock", href: "/dossier/" },
  { title: "Projects", subtitle: "项目记录", icon: "folder", href: "/clues/workflow/" },
  { title: "About", subtitle: "个人节点", icon: "person", href: "/evidence/kmp/" },
  { title: "Friends", subtitle: "友情链接", icon: "link", href: "/clues/pictures/" },
  { title: "More...", subtitle: "更多入口", icon: "more", href: "/clues/" }
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
  const focus = newest.find((evidence) => !evidence.meta.draft) || lead;
  const recent = newest.filter((evidence) => !evidence.meta.draft).slice(0, 3);
  const leftFeature = newest[2] || focus || lead;
  const rightFeature = newest.find((evidence) => evidence.meta.clues.some((clue) => clue.toLowerCase().includes("note"))) || newest[1] || focus || lead;

  return (
    <section className="home-stage crystal-home" aria-labelledby="home-title">
      <CrystalField />
      <div className="home-topline" aria-label="核心信息">
        <TopicConstellation />
        <HeroIdentity focus={focus} lead={lead} />
        <StatusNode focus={newest[1] || focus} />
        <ObserverCard />
      </div>

      <div className="home-showcase">
        {leftFeature ? <FloatingCrystalCard evidence={leftFeature} side="left" icon="github" fallbackTitle="Hugo & GitHub" /> : null}
        <RecentPostsPanel evidences={recent.length ? recent : newest.slice(0, 3)} />
        {rightFeature ? <FloatingCrystalCard evidence={rightFeature} side="right" icon="key" fallbackTitle="Keys Issue" /> : null}
      </div>

      <NavigationWheel />
    </section>
  );
}

function CrystalField() {
  return (
    <div className="crystal-field" aria-hidden="true">
      {Array.from({ length: 14 }, (_, index) => (
        <span key={index} className={`crystal-particle p${index + 1}`} />
      ))}
    </div>
  );
}

function TopicConstellation() {
  return (
    <aside className="topic-constellation" aria-label="核心主题">
      <div className="topic-tags">
        {topicItems.map((topic) => <span key={topic}>{topic}</span>)}
      </div>
      <strong>算法</strong>
      <em>Core Topics</em>
    </aside>
  );
}

function HeroIdentity({ focus, lead }: { focus?: EvidenceDocument; lead?: EvidenceDocument }) {
  return (
    <header className="hero-identity">
      <CrystalLogo />
      <div className="hero-title-row">
        <h1 id="home-title">{siteTitle}</h1>
        <span>Computing Base</span>
      </div>
      <p>
        {focus ? shortTitle(focus.meta.title, 18) : "Personal technical notes"}
        {lead ? ` · 最近更新 ${formatDate(lead.meta.date)}` : ""}
      </p>
    </header>
  );
}

function CrystalLogo() {
  return (
    <span className="crystal-logo" aria-hidden="true">
      <span />
      <i />
    </span>
  );
}

function StatusNode({ focus }: { focus?: EvidenceDocument }) {
  if (!focus) return null;
  return (
    <a className="status-node" href={evidencePath(focus)} aria-label={`查看 ${focus.meta.title}`}>
      <span className="status-node-icon"><Icon name="lock" /></span>
      <strong>{shortTitle(focus.meta.title, 10)}</strong>
      <em>{formatDate(focus.meta.date)} · {estimateReadLabel(focus.meta.readingTime)}</em>
    </a>
  );
}

function ObserverCard() {
  return (
    <aside className="observer-card" aria-label="观察者节点">
      <span className="observer-arc">Observer Node</span>
      <a className="observer-avatar" href="/evidence/kmp/" aria-label="关于 mineguai">
        <img src="/assets/images/wanzi1.jpg" alt="mineguai avatar" />
      </a>
      <strong>mineguai</strong>
      <a href="/evidence/kmp/">About Me / 个人</a>
    </aside>
  );
}

function RecentPostsPanel({ evidences }: { evidences: EvidenceDocument[] }) {
  return (
    <section className="recent-panel glass-surface" aria-labelledby="recent-title">
      <div className="panel-head">
        <h2 id="recent-title">Recent Posts</h2>
      </div>
      <div className="recent-list">
        {evidences.map((evidence, index) => (
          <HomeBlogCard key={evidence.meta.slug} evidence={evidence} index={index} />
        ))}
      </div>
      <a className="view-posts-link" href="/dossier/">View all posts <span aria-hidden="true">→</span></a>
    </section>
  );
}

function FloatingCrystalCard({ evidence, side, icon, fallbackTitle }: { evidence: EvidenceDocument; side: "left" | "right"; icon: string; fallbackTitle: string }) {
  return (
    <a className={`floating-crystal-card ${side}`} href={evidencePath(evidence)} aria-label={`查看 ${evidence.meta.title}`}>
      <span className="crystal-card-icon"><Icon name={icon} /></span>
      <strong>{fallbackTitle}</strong>
      <em>{formatDate(evidence.meta.date)}</em>
    </a>
  );
}

function HomeBlogCard({ evidence, index }: { evidence: EvidenceDocument; index: number }) {
  const firstTag = evidence.meta.clues[0] || "Notes";
  return (
    <article className="home-blog-card">
      <a className="post-thumb" data-variant={(index % 3) + 1} href={evidencePath(evidence)} aria-label={`查看 ${evidence.meta.title}`}>
        <i className="thumb-crystal" aria-hidden="true" />
        <span>{String(index + 1).padStart(2, "0")}</span>
      </a>
      <div className="home-post-copy">
        <span className="mini-tag">#{firstTag}</span>
        <h3><a href={evidencePath(evidence)}>{shortTitle(evidence.meta.title, 24)}</a></h3>
        <p>{postDescription(evidence)}</p>
      </div>
      <time dateTime={evidence.meta.date}>{formatDate(evidence.meta.date)}</time>
    </article>
  );
}

function NavigationWheel() {
  const [rotation, setRotation] = useState(0);
  const rotateWheel = (delta: number) => setRotation((current) => current + delta);
  const wheelStyle = {
    "--wheel-rotation": `${rotation}deg`,
    "--wheel-counter-rotation": `${rotation * -1}deg`
  } as CSSProperties;
  const segmentStep = 26;
  const startAngle = -52;

  return (
    <nav
      className="wheel-shell"
      aria-label="博客导航"
      onWheel={(event) => {
        event.preventDefault();
        rotateWheel(event.deltaY > 0 ? -segmentStep : segmentStep);
      }}
    >
      <button className="wheel-arrow wheel-arrow-left" type="button" aria-label="向左旋转导航" onClick={() => rotateWheel(segmentStep)}>
        <Icon name="chevronLeft" />
      </button>
      <div className="nav-wheel" style={wheelStyle}>
        {navWheelItems.map((item, index) => (
          <a
            key={item.title}
            className="nav-segment"
            href={item.href}
            style={{
              "--segment-angle": `${startAngle + index * segmentStep}deg`,
              "--segment-counter-angle": `${(startAngle + index * segmentStep) * -1}deg`
            } as CSSProperties}
          >
            <span className="segment-icon"><Icon name={item.icon} /></span>
            <strong>{item.title}</strong>
            <em>{item.subtitle}</em>
          </a>
        ))}
      </div>
      <button className="wheel-arrow wheel-arrow-right" type="button" aria-label="向右旋转导航" onClick={() => rotateWheel(-segmentStep)}>
        <Icon name="chevronRight" />
      </button>
      <p className="wheel-instruction"><Icon name="mouse" />滚动鼠标滚轮以探索更多</p>
    </nav>
  );
}

function Icon({ name }: { name: string }) {
  if (name === "article") {
    return <svg viewBox="0 0 24 24"><path d="M7 3h7l4 4v14H7z" /><path d="M14 3v5h5M9 12h6M9 16h6" /></svg>;
  }
  if (name === "grid") {
    return <svg viewBox="0 0 24 24"><path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" /></svg>;
  }
  if (name === "tag") {
    return <svg viewBox="0 0 24 24"><path d="M4 12V5h7l9 9-6 6z" /><path d="M8.5 8.5h.01" /></svg>;
  }
  if (name === "clock") {
    return <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" /><path d="M12 7v5l3 2" /></svg>;
  }
  if (name === "folder") {
    return <svg viewBox="0 0 24 24"><path d="M3 7h7l2 3h9v9H3z" /></svg>;
  }
  if (name === "person") {
    return <svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4" /><path d="M5 21c1.6-4 12.4-4 14 0" /></svg>;
  }
  if (name === "link") {
    return <svg viewBox="0 0 24 24"><path d="M10 14a4 4 0 0 1 0-6l2-2a4 4 0 1 1 6 6l-1 1" /><path d="M14 10a4 4 0 0 1 0 6l-2 2a4 4 0 1 1-6-6l1-1" /></svg>;
  }
  if (name === "more") {
    return <svg viewBox="0 0 24 24"><path d="M5 12h.01M12 12h.01M19 12h.01" /></svg>;
  }
  if (name === "crystal") {
    return <svg viewBox="0 0 24 24"><path d="M12 2l5 7-5 13L7 9z" /><path d="M7 9h10M12 2v20" /></svg>;
  }
  if (name === "github") {
    return <svg viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9c0-1 .1-1.4-.5-2 2-.2 4.1-1 4.1-4.6 0-1-.4-1.9-1-2.6.1-.3.4-1.3-.1-2.6 0 0-.8-.3-2.7 1a9.4 9.4 0 0 0-4.9 0c-1.9-1.3-2.7-1-2.7-1-.5 1.3-.2 2.3-.1 2.6-.6.7-1 1.6-1 2.6 0 3.6 2.1 4.4 4.1 4.6-.3.3-.5.8-.5 1.6V22" /></svg>;
  }
  if (name === "key") {
    return <svg viewBox="0 0 24 24"><circle cx="7" cy="12" r="3" /><path d="M10 12h10M16 12v3M19 12v3" /></svg>;
  }
  if (name === "lock") {
    return <svg viewBox="0 0 24 24"><rect x="6" y="10" width="12" height="10" rx="2" /><path d="M9 10V7a3 3 0 0 1 6 0v3" /></svg>;
  }
  if (name === "mouse") {
    return <svg viewBox="0 0 24 24"><rect x="8" y="3" width="8" height="16" rx="4" /><path d="M12 7v3" /></svg>;
  }
  if (name === "chevronLeft") {
    return <svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7" /></svg>;
  }
  return <svg viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg>;
}

function postDescription(evidence: EvidenceDocument) {
  const text = evidence.plainText.replace(/\s+/g, " ").trim();
  if (!text) return "记录一段工程、算法或系统学习过程。";
  return shortTitle(text, 34);
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
      <span className="card-corner" aria-hidden="true" />
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
          <em>{results.length} result</em>
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
