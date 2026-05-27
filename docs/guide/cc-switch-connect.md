# 接入 PingCodes

完成 [CC-Switch 安装](./cc-switch-install) 后，跟着下面五步把 PingCodes 加为 Provider。

## 一、登录 PingCodes 拿到 API Key

1. 浏览器打开 [https://api.pingcodes.cc](https://api.pingcodes.cc)，登录你的账号
2. 进入 **「API Keys」** 页面，点 **「创建 Key」**
3. 取个备注名（例如 `cc-switch-macbook`），保存
4. **立刻复制 Key 全文**——它以 `sk-` 开头，**只显示一次**，关闭弹窗后只能看到打码版本

::: danger 重要
API Key 等同于密码。**不要提交到 Git 仓库，不要发到群里，不要截图分享。**
:::

## 二、打开 CC-Switch，添加 Provider

启动 CC-Switch，点击主界面右上角 **「Add Provider」** 按钮。

弹出表单中按下表填写：

| 字段 | 填写内容 |
| --- | --- |
| **Name** | `PingCodes`（自取，仅作显示） |
| **Provider Type** | 根据你要用的客户端选择，下文分客户端说明 |
| **Base URL** | `https://api.pingcodes.cc` |
| **API Key** | 第一步复制的 `sk-...` Key |

## 三、按客户端选择 Provider Type

### Claude Code

- **Provider Type**：`Claude Code`
- **Base URL**：`https://api.pingcodes.cc`
- CC-Switch 会自动写入 `~/.claude/settings.json`，并支持**热切换**——不用重启 Claude Code

### Codex CLI

- **Provider Type**：`Codex`
- **Base URL**：`https://api.pingcodes.cc/v1`（OpenAI 兼容端点通常加 `/v1`，以 PingCodes 后台说明为准）
- 切换后**重启 Codex CLI** 终端生效

### Gemini CLI

- **Provider Type**：`Gemini CLI`
- **Base URL**：`https://api.pingcodes.cc`
- 切换后**重启 Gemini CLI** 终端生效

::: tip 不确定 base URL 后缀？
PingCodes 后台「API Keys」页通常会显示每个客户端对应的完整调用端点示例。**以后台显示为准**，避免猜测路径。
:::

## 四、启用 Provider

填完后点保存，回到主界面：

1. 在 Provider 列表中找到刚才添加的 **PingCodes**
2. 点击右侧的 **「Enable」** 按钮，或在系统托盘菜单中点击 `PingCodes` 直接切换
3. 启用成功后该项会显示绿色对勾

## 五、验证连通

打开终端，执行任意一次客户端调用。例如使用 Claude Code：

```bash
claude --version          # 看看 Claude Code 自身是否安装
claude "你好，说一句话"   # 测试一条最简单的请求
```

如果能正常返回 AI 回答，说明全链路打通：

```
你的终端 → Claude Code → CC-Switch 切到的 base URL (api.pingcodes.cc) → PingCodes 网关 → 上游 AI 模型
```

## 故障排查

| 现象 | 可能原因 | 处理 |
| --- | --- | --- |
| `401 Unauthorized` | API Key 错或已吊销 | 回 PingCodes 后台重新生成，更新 CC-Switch |
| `403 Forbidden` 含 `unsupported_country_region_territory` | 上游对你网络位置不支持 | 用支持地区的网络出口，或联系 PingCodes 客服 |
| `connection refused` / 超时 | 本机网络问题或 base URL 填错 | 浏览器先打开 `https://api.pingcodes.cc` 看能否访问 |
| 切换后客户端依然走旧 Provider | 没重启客户端 | Claude Code 外的客户端切换后**重启终端**才生效 |

更多问题去后台提工单，或参见 [CC-Switch 官方文档](https://github.com/farion1231/cc-switch)。
