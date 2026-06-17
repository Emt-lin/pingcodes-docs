<script setup>
import { useData } from "vitepress"
import {
  Car, ShieldCheck, SlidersHorizontal, Terminal, Monitor, Users,
  ArrowRight, ChevronRight, Search, ExternalLink, Sun, Moon
} from "lucide-vue-next"

const { isDark } = useData()

const features = [
  { icon: Car, title: "真号拼车，价格平摊", desc: "官方真实订阅，不是套壳中转，原价大家平摊。", link: "/guide/what-is-pingcodes" },
  { icon: ShieldCheck, title: "统一出口 IP，保号防封", desc: "一车一固定 IP，始终“同一人正常使用”，降低封号。", link: "/guide/what-is-pingcodes" },
  { icon: SlidersHorizontal, title: "额度独立，互不挤占", desc: "每个车位独立并发额度，谁用多少一目了然。", link: "/guide/what-is-pingcodes" },
  { icon: Terminal, title: "接入 Codex", desc: "用 CC Switch 配置，保留官方登录，三步搞定。", link: "/guide/codex" },
  { icon: Monitor, title: "接入 Claude Code / Gemini", desc: "同样用 CC Switch 管理各客户端，一键切换。", link: "/guide/cc-switch-install" },
  { icon: Users, title: "熟人组队", desc: "和朋友 / 同事组专属车队，不和陌生人拼。", link: "/guide/what-is-pingcodes" }
]

function toggleTheme() {
  if (typeof document === "undefined") return
  const btn = document.querySelector(".VPSwitchAppearance")
  if (btn) { btn.click(); return }
  document.documentElement.classList.toggle("dark")
}

function openSearch() {
  if (typeof document === "undefined") return
  document.dispatchEvent(
    new KeyboardEvent("keydown", { key: "k", metaKey: true, ctrlKey: true, bubbles: true })
  )
}
</script>

<template>
  <div class="pc-home">
    <!-- ===== 顶部导航 ===== -->
    <header class="nav">
      <div class="nav-inner">
        <a class="brand" href="/">
          <span class="brand-sq"><Car :size="17" :stroke-width="1.8" /></span>
          <span class="brand-name">PingCodes</span>
          <span class="brand-tag">文档</span>
        </a>

        <button class="search" @click="openSearch" aria-label="搜索文档">
          <Search :size="15" :stroke-width="1.8" />
          <span class="search-text">搜索文档</span>
          <kbd>⌘K</kbd>
        </button>

        <nav class="nav-links">
          <a class="nl active" href="/">首页</a>
          <a class="nl" href="/guide/codex">接入 Codex</a>
          <a class="nl" href="https://api.pingcodes.cc" target="_blank" rel="noreferrer">
            去后台 <ExternalLink :size="13" :stroke-width="1.8" />
          </a>
          <span class="divider" />
          <button class="icon-btn" @click="toggleTheme" aria-label="切换主题">
            <Moon v-if="!isDark" :size="17" :stroke-width="1.8" />
            <Sun v-else :size="17" :stroke-width="1.8" />
          </button>
          <a class="icon-btn" href="https://github.com/Emt-lin/pingcodes-docs" target="_blank" rel="noreferrer" aria-label="GitHub">
            <svg width="17" height="17" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
            </svg>
          </a>
        </nav>
      </div>
    </header>

    <!-- ===== Hero ===== -->
    <section class="hero">
      <div class="hero-inner">
        <div class="hero-left">
          <span class="kicker"><span class="dollar">$</span> cc-switch · PingCodes</span>
          <h1 class="title">
            <span class="t-accent">PingCodes</span><br />
            <span class="t-fg">官方订阅拼车</span>
          </h1>
          <p class="lead">
            3-4 人拼一个官方真号，价格平摊。统一出口 IP 保号防封，额度按人独立分配。
          </p>
          <div class="actions">
            <a class="btn btn-primary" href="/guide/codex">
              立即接入 Codex <ArrowRight :size="17" :stroke-width="2" />
            </a>
            <a class="btn btn-ghost" href="https://api.pingcodes.cc" target="_blank" rel="noreferrer">
              进入控制台
            </a>
          </div>
        </div>

        <div class="hero-right">
          <div class="term">
            <div class="term-bar">
              <span class="tl tl-r" /><span class="tl tl-y" /><span class="tl tl-g" />
              <span class="term-title">cc-switch · config.toml</span>
            </div>
            <pre class="term-body"><span class="c-comment"># 保留官方登录，一键切到 PingCodes</span>
<span class="c-section">[provider.pingcodes]</span>
<span class="c-key">name</span>      = <span class="c-string">"PingCodes"</span>
<span class="c-key">base_url</span>  = <span class="c-string">"https://api.pingcodes.cc"</span>
<span class="c-key">api_key</span>   = <span class="c-string">"pk-••••••••••••"</span>
<span class="c-key">model</span>     = <span class="c-string">"gpt-5-codex"</span>

<span class="c-dollar">$</span> cc-switch use pingcodes
<span class="c-success">✓ 已切换 · 出口 IP 固定 · 额度独立</span><span class="cursor" /></pre>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== 功能区 ===== -->
    <section class="features">
      <div class="features-inner">
        <div class="feat-head">
          <div class="kicker2">为什么选 PingCodes</div>
          <h2 class="feat-title">省钱、稳定、额度独立</h2>
        </div>
        <div class="feat-list">
          <a v-for="(f, i) in features" :key="i" class="feat-row" :href="f.link">
            <component :is="f.icon" class="feat-icon" :size="17" :stroke-width="1.8" />
            <span class="feat-row-title">{{ f.title }}</span>
            <span class="feat-row-desc">{{ f.desc }}</span>
            <ChevronRight class="feat-chev" :size="15" :stroke-width="1.8" />
          </a>
        </div>
      </div>
    </section>

    <!-- ===== 页脚 ===== -->
    <footer class="footer">
      <div class="foot-top">
        <div class="foot-brand">
          <a class="brand" href="/">
            <span class="brand-sq"><Car :size="17" :stroke-width="1.8" /></span>
            <span class="brand-name">PingCodes</span>
          </a>
          <p class="foot-desc">官方订阅拼车 · 3-4 人拼一个官方真号，价格平摊，额度按人独立分配。</p>
        </div>
        <div class="foot-col">
          <div class="foot-col-h">产品</div>
          <a href="/guide/codex">接入 Codex</a>
          <a href="https://api.pingcodes.cc" target="_blank" rel="noreferrer">进入控制台</a>
          <a href="/guide/what-is-pingcodes">什么是拼车</a>
        </div>
        <div class="foot-col">
          <div class="foot-col-h">文档</div>
          <a href="/guide/cc-switch-install">CC Switch 安装</a>
          <a href="/guide/cc-switch-connect">Claude Code</a>
          <a href="/guide/cc-switch-connect">Gemini CLI</a>
        </div>
        <div class="foot-col">
          <div class="foot-col-h">关于</div>
          <a href="https://github.com/Emt-lin/pingcodes-docs" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://api.pingcodes.cc" target="_blank" rel="noreferrer">联系我们</a>
        </div>
      </div>
      <div class="foot-bottom">
        <span>© 2026 PingCodes · 官方订阅拼车</span>
        <span>docs.pingcodes.cc</span>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.pc-home {
  background: var(--bg);
  color: var(--fg);
  font-family: var(--font-body);
  min-height: 100vh;
}
.pc-home a { text-decoration: none; color: inherit; }

/* ---------- 导航 ---------- */
.nav {
  position: sticky;
  top: 0;
  z-index: 50;
  height: 64px;
  background: var(--nav-bg);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--border);
}
.nav-inner {
  max-width: 1180px;
  height: 100%;
  margin: 0 auto;
  padding: 0 28px;
  display: flex;
  align-items: center;
  gap: 18px;
}
.brand { display: flex; align-items: center; gap: 9px; }
.brand-sq {
  width: 30px; height: 30px; border-radius: 9px;
  background: var(--accent); color: var(--accent-fg);
  display: grid; place-items: center;
}
.brand-name { font-family: var(--font-display); font-size: 18px; font-weight: 700; color: var(--fg); }
.brand-tag {
  font-size: 12px; font-weight: 600; color: var(--muted);
  background: var(--surface2); border-radius: 6px; padding: 2px 7px;
}
.search {
  margin-left: 8px;
  display: flex; align-items: center; gap: 8px;
  background: var(--surface2); border: 1px solid var(--border);
  border-radius: 11px; padding: 7px 12px; cursor: pointer;
  color: var(--muted); font-family: var(--font-body);
  transition: border-color .15s ease;
}
.search:hover { border-color: var(--accent); }
.search-text { font-size: 13.5px; }
.search kbd {
  font-family: var(--font-mono); font-size: 11px; color: var(--muted);
  background: var(--bg); border: 1px solid var(--border); border-radius: 5px;
  padding: 1px 5px;
}
.nav-links { margin-left: auto; display: flex; align-items: center; gap: 6px; }
.nl {
  display: inline-flex; align-items: center; gap: 4px;
  font-size: 14px; font-weight: 500; color: var(--muted);
  padding: 7px 11px; border-radius: 8px; transition: all .15s ease;
}
.nl:hover { color: var(--fg); background: var(--surface2); }
.nl.active { color: var(--accent); background: var(--accent-soft); }
.divider { width: 1px; height: 20px; background: var(--border); margin: 0 4px; }
.icon-btn {
  width: 36px; height: 36px; border-radius: 9px;
  display: grid; place-items: center; cursor: pointer;
  background: transparent; border: none; color: var(--muted);
  transition: all .15s ease;
}
.icon-btn:hover { color: var(--fg); background: var(--surface2); }

/* ---------- Hero ---------- */
.hero {
  background-image: radial-gradient(var(--border) 1px, transparent 1px);
  background-size: 24px 24px;
}
.hero-inner {
  max-width: 1180px; margin: 0 auto;
  padding: 78px 28px 38px;
  display: grid; grid-template-columns: 1.02fr 0.98fr; gap: 50px;
  align-items: center;
}
.kicker {
  display: inline-block; font-family: var(--font-mono); font-size: 13px;
  color: var(--fg); background: var(--surface); border: 1px solid var(--border);
  border-radius: 8px; padding: 6px 11px; margin-bottom: 22px;
}
.kicker .dollar { color: var(--muted); }
.title {
  font-family: var(--font-display); font-weight: 700;
  font-size: 58px; line-height: 1.07; letter-spacing: -0.025em;
  margin: 0 0 22px;
}
.t-accent { color: var(--accent); }
.t-fg { color: var(--fg); }
.lead {
  font-size: 17px; line-height: 1.75; color: var(--muted);
  max-width: 500px; margin: 0 0 28px;
}
.actions { display: flex; gap: 12px; flex-wrap: wrap; }
.btn {
  display: inline-flex; align-items: center; gap: 8px;
  border-radius: 10px; padding: 13px 22px; font-size: 15px; font-weight: 600;
  transition: transform .15s ease, background .15s ease, border-color .15s ease;
}
.btn:hover { transform: translateY(-2px); }
.btn-primary { background: var(--accent); color: var(--accent-fg); }
.btn-ghost { background: var(--surface); border: 1px solid var(--border); color: var(--fg); }
.btn-ghost:hover { border-color: var(--accent); }

/* 终端窗口（固定配色） */
.term {
  border-radius: 16px; overflow: hidden; border: 1px solid var(--term-border);
  background: var(--term-bg);
  box-shadow: 0 24px 60px -28px rgba(0,0,0,.5);
}
.term-bar {
  display: flex; align-items: center; gap: 8px;
  background: var(--term-titlebar); border-bottom: 1px solid var(--term-border);
  padding: 11px 14px;
}
.tl { width: 12px; height: 12px; border-radius: 50%; }
.tl-r { background: var(--tl-red); }
.tl-y { background: var(--tl-yellow); }
.tl-g { background: var(--tl-green); }
.term-title {
  margin-left: 8px; font-family: var(--font-mono); font-size: 12.5px; color: var(--term-comment);
}
.term-body {
  margin: 0; padding: 18px 20px;
  font-family: var(--font-mono); font-size: 13.5px; line-height: 1.95;
  color: var(--term-fg); white-space: pre; overflow-x: auto;
}
.c-comment { color: var(--term-comment); }
.c-section { color: var(--term-section); }
.c-key { color: var(--term-key); }
.c-string { color: var(--term-string); }
.c-dollar { color: var(--term-comment); }
.c-success { color: var(--term-success); }
.cursor {
  display: inline-block; width: 8px; height: 16px; margin-left: 4px;
  background: var(--accent); vertical-align: -3px;
  animation: blink 1.1s step-end infinite;
}
@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }

/* ---------- 功能区 ---------- */
.features { }
.features-inner { max-width: 980px; margin: 0 auto; padding: 54px 28px 40px; }
.feat-head { margin-bottom: 20px; }
.kicker2 {
  font-size: 12px; font-weight: 700; text-transform: uppercase;
  letter-spacing: 0.12em; color: var(--accent); margin-bottom: 8px;
}
.feat-title { font-family: var(--font-display); font-weight: 700; font-size: 26px; color: var(--fg); margin: 0; }
.feat-list {
  background: var(--surface); border: 1px solid var(--border);
  border-radius: 14px; padding: 6px 12px;
}
.feat-row {
  display: flex; align-items: center; gap: 13px;
  padding: 15px 12px; border-radius: 8px;
  border-bottom: 1px solid var(--border);
  transition: background .15s ease;
}
.feat-row:last-child { border-bottom: none; }
.feat-row:hover { background: var(--surface2); }
.feat-icon { color: var(--accent); flex: none; }
.feat-row-title { font-size: 14px; font-weight: 700; color: var(--fg); flex: none; min-width: 188px; }
.feat-row-desc { font-size: 12.5px; line-height: 1.5; color: var(--muted); flex: 1; }
.feat-chev { color: var(--muted); opacity: .5; flex: none; }

/* ---------- 页脚 ---------- */
.footer { border-top: 1px solid var(--border); background: var(--surface2); margin-top: 54px; }
.foot-top {
  max-width: 1180px; margin: 0 auto; padding: 54px 28px 30px;
  display: grid; grid-template-columns: 1.6fr 1fr 1fr 1fr; gap: 36px;
}
.foot-brand .brand { margin-bottom: 14px; }
.foot-desc { font-size: 13.5px; line-height: 1.7; color: var(--muted); max-width: 320px; margin: 0; }
.foot-col { display: flex; flex-direction: column; gap: 10px; }
.foot-col-h { font-size: 13px; font-weight: 700; color: var(--fg); margin-bottom: 2px; }
.foot-col a { font-size: 13.5px; color: var(--muted); transition: color .15s ease; }
.foot-col a:hover { color: var(--accent); }
.foot-bottom {
  border-top: 1px solid var(--border);
  max-width: 1180px; margin: 0 auto; padding: 18px 28px;
  display: flex; justify-content: space-between;
  font-size: 12.5px; color: var(--muted);
}

/* ---------- 响应式 ---------- */
@media (max-width: 768px) {
  .search { display: none; }
  .hero-inner { grid-template-columns: 1fr; gap: 32px; padding: 48px 22px 28px; }
  .title { font-size: 42px; }
  .foot-top { grid-template-columns: 1fr 1fr; gap: 28px; }
  .foot-brand { grid-column: 1 / -1; }
  .nav-inner { padding: 0 16px; gap: 10px; }
  .nl { padding: 7px 8px; }
}
@media (max-width: 480px) {
  .foot-top { grid-template-columns: 1fr; }
  .foot-bottom { flex-direction: column; gap: 6px; }
}
</style>
