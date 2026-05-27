# 在 Codex++ 中接入 PingCodes

完成 [Codex++ 安装](./codex-plus-plus-install) 后，按下面四步把 PingCodes 配进去。

## 一、登录 PingCodes 拿 API Key

1. 浏览器打开 [https://api.pingcodes.cc](https://api.pingcodes.cc)，登录
2. 进入 **「API Keys」** 页面，点 **「创建 Key」**，备注名按习惯填（例如 `codex-plus-plus-mac`）
3. **立刻复制 Key 全文**，`sk-...` 开头，**只显示一次**

::: danger 重要
API Key 等同于密码。**不要提交到 Git，不要发到群里，不要截图分享。**
:::

## 二、确认 Codex App 处于登录态

打开 **Codex++ 管理工具**，进入 **「中转注入」** 页面。Codex++ 会自动检测 Codex App 的 ChatGPT 登录状态：

- ✅ **已检测到登录态**：可以继续
- ❌ **未登录**：先打开官方 Codex App 完成 ChatGPT 登录，再回到 Codex++ 管理工具重新检测

::: tip 为什么需要先登录
Codex++ 是基于已登录的 Codex App 进程做 CDP 注入，登录态是注入的前置条件。注入完成后才会用 PingCodes 的 base URL 和 Key 替换上游调用。
:::

## 三、添加中转配置

在「中转注入」页面点 **「添加中转配置」**，按下表填写：

| 字段 | 填写内容 |
| --- | --- |
| **名称** | `PingCodes`（自取） |
| **Base URL** | `https://api.pingcodes.cc` |
| **API Key** | 第一步复制的 `sk-...` Key |

保存。

::: tip Base URL 后缀
Codex 桌面 App 走的端点路径以 PingCodes 后台「API Keys」页面提示为准。如果直接填 `https://api.pingcodes.cc` 不工作，到后台看看是否需要加 `/v1` 之类的后缀。
:::

## 四、应用注入并启动

1. 在配置列表选中刚才添加的 **PingCodes** 项
2. 点 **「应用注入」**
3. 启动桌面菜单的 **Codex++**（不是「Codex++ 管理工具」，是带闪电图标的启动器）
4. Codex++ 会以注入模式拉起 Codex App，此时 Codex 已经走 PingCodes 调用

成功后 Codex 内部任何请求都会落到：

```
Codex App → Codex++ 注入层 → https://api.pingcodes.cc → PingCodes 网关 → 上游模型
```

Codex++ 同时会在 `~/.codex/config.toml` 写入一条名为 `CodexPlusPlus` 的 `model_provider` 段，包含 `base_url` 与 `experimental_bearer_token`，方便排查。

## 回退到官方登录态

想恢复纯净的 ChatGPT 官方登录调用：

1. 打开 **Codex++ 管理工具** → 「中转注入」
2. 点 **「清除 API 模式」**
3. 重新启动 Codex App（不要走 Codex++ 启动器）

之后 Codex 就是官方原始状态。

## 故障排查

| 现象 | 可能原因 | 处理 |
| --- | --- | --- |
| 注入失败 / 检测不到 Codex | Codex App 没启动或未完成登录 | 先打开 Codex App 完成登录，再回 Codex++ 重新检测 |
| `401 Unauthorized` | API Key 错或已吊销 | 回 PingCodes 后台重建 Key，更新 Codex++ 配置 |
| `connection refused` / 超时 | 本机网络问题 | 浏览器试试 `https://api.pingcodes.cc` 能否打开 |
| 想用回官方调用但仍然走 PingCodes | 没清除 API 模式或仍从 Codex++ 启动 | 「清除 API 模式」并直接启动官方 Codex App |
| macOS 启动报"未公证"或闪退 | 装错芯片版本 | 检查 ARM / x64，下对应 dmg 重装 |

更多问题去 PingCodes 后台提工单，或参见 [Codex++ 官方仓库](https://github.com/BigPizzaV3/CodexPlusPlus)。
