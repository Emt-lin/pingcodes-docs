import { defineConfig } from "vitepress"

export default defineConfig({
  lang: "zh-CN",
  title: "PingCodes",
  description: "AI API 中转站 · 使用文档",
  cleanUrls: true,
  lastUpdated: true,

  head: [
    ["link", { rel: "icon", href: "/favicon.svg" }]
  ],

  themeConfig: {
    siteTitle: "PingCodes 文档",

    nav: [
      { text: "首页", link: "/" },
      { text: "快速开始", link: "/guide/overview" },
      { text: "去后台", link: "https://api.pingcodes.cc" }
    ],

    sidebar: {
      "/guide/": [
        {
          text: "快速开始",
          items: [
            { text: "选择接入方式", link: "/guide/overview" }
          ]
        },
        {
          text: "CC-Switch 路线",
          collapsed: false,
          items: [
            { text: "安装 CC-Switch", link: "/guide/cc-switch-install" },
            { text: "接入 PingCodes", link: "/guide/cc-switch-connect" }
          ]
        },
        {
          text: "Codex++ 路线",
          collapsed: false,
          items: [
            { text: "安装 Codex++", link: "/guide/codex-plus-plus-install" },
            { text: "接入 PingCodes", link: "/guide/codex-plus-plus-connect" }
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
