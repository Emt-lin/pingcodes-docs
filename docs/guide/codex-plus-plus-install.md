# 安装 Codex++

[Codex++](https://github.com/BigPizzaV3/CodexPlusPlus) 是 **Codex 桌面 App** 的外部增强启动器，通过 Chromium DevTools Protocol（CDP）注入运行——**不修改 Codex 安装文件**，回退到官方状态只需一键。

::: tip 这个工具是给谁用的
Codex 桌面 App 用户。如果你用的是 Codex **CLI**（在终端里运行 `codex ...`），请走 [CC-Switch 路线](./cc-switch-install)。
:::

## 前置条件

1. 先装好官方 **Codex 桌面 App**，并完成 ChatGPT 登录（Codex++ 通过这个登录态启动 Codex，然后再注入中转配置）
2. 系统要求：
   - Windows 10 及以上 (x64)
   - macOS 12 及以上 (Intel 或 Apple Silicon)

## Windows

到 [Codex++ Releases](https://github.com/BigPizzaV3/CodexPlusPlus/releases/latest) 下载：

- `CodexPlusPlus-*-windows-x64-setup.exe`

双击运行安装。安装完成后开始菜单会出现两个入口：

| 入口 | 用途 |
| --- | --- |
| **Codex++** | 启动器，按当前配置直接拉起 Codex App |
| **Codex++ 管理工具** | 控制面板，做配置、注入、诊断 |

## macOS

到 [Codex++ Releases](https://github.com/BigPizzaV3/CodexPlusPlus/releases/latest) 下载对应芯片版本：

- Apple Silicon (M1/M2/M3/M4)：`CodexPlusPlus-*-macos-arm64.dmg`
- Intel：`CodexPlusPlus-*-macos-x64.dmg`

::: warning 注意区分芯片
在「关于本机」查看你的处理器型号。装错版本会出现启动失败、闪退或性能拉胯。
:::

打开 `.dmg`，把 **Codex++** 和 **Codex++ 管理工具** 都拖入「应用程序」文件夹。

::: tip 首次启动安全提示
macOS 第一次打开未签名应用会被拦截。在「系统设置 → 隐私与安全性」最下方点 **「仍然打开」** 放行即可。Codex++ Release 是否已公证以发布页说明为准。
:::

## 验证安装

启动 **Codex++ 管理工具**，应能看到主界面，左侧带有「中转注入」、「诊断」、「日志」等菜单。如果窗口正常打开、底栏能看到版本号，安装就完成了。

下一步：[在 Codex++ 中接入 PingCodes →](./codex-plus-plus-connect)
