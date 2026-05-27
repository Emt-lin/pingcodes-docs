# 选择接入方式

PingCodes 不绑定任何特定客户端——只要支持自定义 `base URL` + `API Key` 的工具都能接入。下面两种是目前最省事的桌面端方案，按你**主要用哪个客户端**来挑：

## 一图对比

| 维度 | CC-Switch | Codex++ |
| --- | --- | --- |
| **面向客户端** | Claude Code / Codex **CLI** / Gemini CLI / OpenCode / OpenClaw / Hermes 等 | Codex **桌面 App**（ChatGPT 出品的 Codex 应用） |
| **类型** | 跨平台桌面 GUI（Tauri + React） | 跨平台桌面 GUI（Tauri + React）+ 增强启动器 |
| **核心能力** | 多 Provider 列表 + 一键切换（Claude Code 热切换） | 通过 CDP 注入接管 Codex App，并附带增强功能 |
| **附加能力** | MCP / Prompts / Skills 统一管理，云同步 | 解锁插件入口、删除会话、Markdown 导出、Timeline 等 |
| **何时选它** | 主力是终端/CLI；多个客户端来回切；想云同步配置 | 主力是 Codex 桌面 App；想在 App 里用 PingCodes Key |
| **开源地址** | [farion1231/cc-switch](https://github.com/farion1231/cc-switch) | [BigPizzaV3/CodexPlusPlus](https://github.com/BigPizzaV3/CodexPlusPlus) |

::: tip 可以同时装吗？
可以。两者管理的是**不同的客户端**：CC-Switch 改 `~/.claude/settings.json`、`~/.codex/config.toml` 等 **CLI** 配置；Codex++ 注入的是 Codex **桌面 App**。互不冲突。
:::

## 怎么挑

**只看主力客户端**：

- 平时用 **Claude Code**、**Codex CLI** 或 **Gemini CLI** 这类终端工具 → 用 [CC-Switch](./cc-switch-install)
- 平时用 **Codex 桌面 App**（带图形界面的那个 ChatGPT Codex 应用） → 用 [Codex++](./codex-plus-plus-install)
- 两边都用 → 两个都装，互不打架

## 接入流程一览

无论选哪种工具，整体节奏都是三步：

```
1. 登录 https://api.pingcodes.cc 拿 API Key
        ↓
2. 在工具里填 base URL（https://api.pingcodes.cc）和 Key
        ↓
3. 启用 / 应用，开始用
```

接下来按你选的工具往下看：

- **CC-Switch 路线**：[安装 CC-Switch](./cc-switch-install) → [接入 PingCodes](./cc-switch-connect)
- **Codex++ 路线**：[安装 Codex++](./codex-plus-plus-install) → [接入 PingCodes](./codex-plus-plus-connect)
