# 接入 Codex（用 CC Switch）

这是接入 PingCodes 最推荐的方式：用 [CC Switch](https://ccswitch.io/zh/) 管理 Codex 的供应商配置，**既保留 Codex 官方登录（手机远程、官方插件照常用），又把模型请求切到 PingCodes**。

跟着下面三步走，全程对照截图即可。

## 准备：下载两样东西

### 1. Codex

从 ChatGPT 左侧边栏点 **Codex** 进入并安装官方 Codex 应用。

![在 ChatGPT 侧边栏进入 Codex](/codex/codex-in-chatgpt.jpg)

### 2. CC Switch

到官网下载安装：**[https://ccswitch.io/zh/](https://ccswitch.io/zh/)**（支持 Windows / macOS / Linux）。

## 第一步：先用官方账号登录 Codex

**这一步不能跳过。** 打开 Codex，用你的 ChatGPT 账号完成一次**官方登录**（Free 订阅也行）。

为什么必须先登录官方：后面我们会开启「切换第三方时保留官方登录」——它保留的就是**这次登录留下的官方身份**。只有先登录过，官方插件、手机远程操作等依赖官方登录态的功能才能在用 PingCodes 的同时继续可用。如果从没登录过官方，就没有"官方登录"可保留。

::: tip
这个官方账号只负责保留 Codex 的官方身份，**不负责计费**——实际的模型请求会走 PingCodes。
:::

## 第二步：打开 CC Switch 设置，开启 3 个开关

打开 CC Switch，进入左上角 **设置 → 通用**，把下面三个开关打开（截图红框处）：

- **Codex 应用增强 → 切换第三方时保留官方登录**：开启后，用第三方 API 时仍能使用 Codex 官方插件、手机远程操作等功能
- **窗口行为 → 开机自启**：随系统启动自动运行 CC Switch
- **窗口行为 → 静默启动**：启动时不弹主窗口，只在系统托盘运行

![CC Switch 设置-通用，开启三个开关](/codex/ccswitch-settings.jpg)

## 第三步：添加 PingCodes 供应商

按截图里的编号顺序操作：

1. 切到顶部的 **Codex** 标签页
2. 点右上角橙色 **「+」** 添加供应商
3. 在「添加新供应商」里选 **「Codex 供应商」**，预设列表点 **「自定义配置」**，然后往下滚动
4. **供应商名称** 填：`codex`
5. **API Key** 填：你的 PingCodes Key（在 [控制台](https://api.pingcodes.cc) 的「API Keys」页创建，`sk-` 开头）
6. **API 请求地址** 填：`https://api.pingcodes.cc/`（兼容 OpenAI Responses 格式的端点）
7. 点 **「添加」**
8. 回到列表，找到刚建的 **codex**，点 **「启用」**，然后**重启 Codex**

![添加并启用 PingCodes 供应商的完整步骤](/codex/ccswitch-add-provider.jpg)

::: warning 第 8 步别漏：必须「启用 + 重启 Codex」
如果不点启用、或没重启 Codex，Codex 会继续用官方登录态发请求，导致下面的 401。
:::

## 完成

重启 Codex 后：

- Codex 里账号信息仍显示**官方账号**——这是正常的（官方远程/插件靠它）
- 实际的模型请求已经走 PingCodes，可以正常对话了

## 用不了？排错

| 报错 | 原因 | 解决 |
| --- | --- | --- |
| `401 INVALID_API_KEY` / `Invalid API key` | 没启用供应商、没重启 Codex，或 API Key 填错 | 确认第 8 步已「启用 + 重启」；核对 API Key 是 PingCodes 控制台里 **OpenAI 分组** 的 `sk-` Key |
| 一直 `Reconnecting... 1/5`… 最后 401 | 同上，Codex 发的不是 PingCodes 的 Key | 同上 |
| 模型列表 `/model` 里没有新模型 | Codex 启动时才加载 | 重启 Codex 后再看 |

::: tip API Key 要用对分组
Codex 必须用 **OpenAI 分组** 的 Key（`sk-` 开头）。如果误填了 Claude 分组的 Key，也会 401。
:::
