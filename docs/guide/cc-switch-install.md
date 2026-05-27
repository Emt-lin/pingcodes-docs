# 安装 CC-Switch

[CC-Switch](https://github.com/farion1231/cc-switch) 是一个跨平台桌面应用，统一管理 Claude Code / Codex / Gemini CLI 等多种 AI 编程客户端的中转站配置，**可视化添加、一键切换**，免去手动编辑各种 JSON / TOML 配置文件。

PingCodes 推荐通过 CC-Switch 接入，是目前最省事的方式。

## 系统要求

| 平台 | 最低版本 |
| --- | --- |
| Windows | Windows 10 及以上 |
| macOS | macOS 12 (Monterey) 及以上 |
| Linux | Ubuntu 22.04 / Debian 12 / Arch / Fedora 等主流发行版 |

## Windows

到 [CC-Switch Releases](https://github.com/farion1231/cc-switch/releases/latest) 页面下载对应安装包：

- **推荐**：`cc-switch_x.y.z_x64-setup.msi`（标准安装包，会写入开始菜单）
- **绿色版**：`cc-switch_x.y.z_x64_portable.zip`（解压即用，不写注册表）

下载后双击运行，按提示完成安装。安装后从开始菜单启动即可。

::: tip 防火墙提示
首次启动如果 Windows Defender 弹窗询问网络访问权限，**允许专用网络**即可。
:::

## macOS

推荐用 Homebrew 安装，最干净：

```bash
brew install --cask cc-switch
```

如果没装 Homebrew，去 [CC-Switch Releases](https://github.com/farion1231/cc-switch/releases/latest) 下载已签名公证的 `.dmg`，拖入「应用程序」文件夹即可。

::: warning Apple Silicon 与 Intel
注意区分 `aarch64`（M1/M2/M3/M4 芯片）和 `x64`（Intel 芯片）。在「关于本机」可以查看你的处理器型号。
:::

## Linux

### Arch / Manjaro

通过 AUR 安装：

```bash
paru -S cc-switch-bin
# 或
yay -S cc-switch-bin
```

### Debian / Ubuntu

到 [Releases](https://github.com/farion1231/cc-switch/releases/latest) 下载 `.deb` 包：

```bash
sudo dpkg -i cc-switch_x.y.z_amd64.deb
sudo apt-get install -f   # 自动补全依赖
```

### Fedora / RHEL

下载 `.rpm` 包：

```bash
sudo rpm -i cc-switch-x.y.z-1.x86_64.rpm
```

### 通用 AppImage

下载 `.AppImage`，赋予可执行权限后直接运行：

```bash
chmod +x cc-switch_x.y.z_amd64.AppImage
./cc-switch_x.y.z_amd64.AppImage
```

## 验证安装

启动 CC-Switch，首次打开会看到 Provider 列表（初始为空或仅有官方登录预设）。窗口左下角能看到版本号即表示安装成功。

下一步：[接入 PingCodes 中转站 →](./cc-switch-connect)
