# Portfolio

一个可直接打开预览的个人作品集站点，用来展示项目、经历、技能和联系方式。

## 使用方式

1. 直接在浏览器打开 `index.html`，或在当前目录启动本地静态服务。
2. 修改 `/Users/eson/workspace/project/resume/app.js` 里的 `portfolioData`，替换成你的真实信息。
3. 如果你想继续扩展，可以新增项目字段、接入真实图片，或者迁移到 React / Next.js。

## 主要内容

- 首页 Hero 区
- 可筛选的项目卡片
- 时间线经历
- 技能与工具栈
- 联系方式 CTA

## 预览命令

```bash
python3 -m http.server 4173
```

## 自动部署

仓库已经预置 GitHub Actions 工作流：

- 推送到 `main` 分支后自动部署
- 服务器：`43.142.73.177:22`
- 发布目录：`/opt/CMS/photo/dist/site/html/`
- 线上地址：`http://43.142.73.177/site/html/`

还需要在 GitHub 仓库里补一个 Secret：

- `DEPLOY_SSH_KEY`

这个 Secret 需要填写可登录服务器 `root@43.142.73.177:22` 的私钥内容。
