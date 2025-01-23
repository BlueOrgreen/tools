import { defineConfig } from 'vitepress'
import { demoblockPlugin, demoblockVitePlugin } from 'vitepress-theme-demoblock'
import nav from './config/nav'
import sidebar from './config/sidebar'

export default defineConfig({
  title: "draw-ui 文档",
  description: "一个名为 draw-ui 的 web component 组件库",
  lastUpdated: true,
  base: '/draw-ui-components/',
  outDir: "../dist",
  markdown: {
    config: (md) => {
        md.use(demoblockPlugin, {
            customClass: 'demoblock-custom'
        })
    }
},
  themeConfig: {
    lastUpdatedText: "更新时间",
    outlineTitle: "章节目录",
    nav,
    sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
  },
  vite: {
    server: {
        port: 8081
    },
    build: {
        target: "es2015",
    },
    plugins: [demoblockVitePlugin()]
},
})
