import { defineConfig } from "vitepress"

export default defineConfig({
  lang: "zh-CN",
  title: "PingCodes",
  description: "AI 订阅拼车 · 官方真号共享 · 使用文档",
  cleanUrls: true,
  lastUpdated: true,

  head: [
    ["link", { rel: "icon", href: "/favicon.svg" }],
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    ["link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" }],
    ["link", {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Noto+Sans+SC:wght@400;500;700&display=swap"
    }]
  ],

  themeConfig: {
    siteTitle: "PingCodes 文档",

    nav: [
      { text: "首页", link: "/" },
      { text: "接入 Codex", link: "/guide/codex" },
      { text: "去后台", link: "https://api.pingcodes.cc" }
    ],

    sidebar: {
      "/guide/": [
        {
          text: "开始之前",
          items: [
            { text: "什么是 PingCodes 拼车", link: "/guide/what-is-pingcodes" }
          ]
        },
        {
          text: "接入教程",
          collapsed: false,
          items: [
            { text: "⭐ 接入 Codex（用 CC Switch）", link: "/guide/codex" }
          ]
        },
        {
          text: "其他客户端",
          collapsed: false,
          items: [
            { text: "安装 CC Switch", link: "/guide/cc-switch-install" },
            { text: "接入 Claude Code / Gemini", link: "/guide/cc-switch-connect" }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/farion1231/cc-switch" }
    ],

    footer: {
      message: "基于 VitePress 构建",
      copyright: "© 2026 PingCodes"
    },

    search: { provider: "local" },

    outline: { label: "本页目录", level: [2, 3] },
    docFooter: { prev: "上一页", next: "下一页" },
    lastUpdatedText: "最后更新",
    darkModeSwitchLabel: "主题",
    sidebarMenuLabel: "菜单",
    returnToTopLabel: "回到顶部"
  }
})
