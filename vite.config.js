import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require("path");
const mdPlugin = require('vite-plugin-markdown')
// 自动方式导入element-plus
// import AutoImport from 'unplugin-auto-import/vite'
// import Components from 'unplugin-vue-components/vite'
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    mdPlugin.plugin({
      mode: ['vue'],
    })
    // AutoImport({
    //   resolvers: [ElementPlusResolver()],
    // }),
    // Components({
    //   resolvers: [ElementPlusResolver()],
    // }),
  ],
  resolve:{
    alias: {
      // 键必须以斜线开始和结束
      "@": path.resolve(__dirname, "./src"),
    },
  },
  cssPreprocessOptions: {
    scss: {
       additionalData: '@import "@/styles/app.scss";' // 全局公共样式
    }
  },
  /**
   * 在生产中服务时的基本公共路径。
   * @default '/'
   */
  base: "./",
  /**
   * 与“根”相关的目录，构建输出将放在其中。如果目录存在，它将在构建之前被删除。
   * @default 'dist'
   */
  outDir: "dist",
  port: 3000,
  // 是否自动在浏览器打开
  open: false,
  // 是否开启 https
  https: false,
  // 服务端渲染
  ssr: false,
  // 引入第三方的配置
  //   optimizeDeps: {
  //     include: ["moment", "echarts", "axios", "mockjs"],
  //   },
  server:{
    proxy: {
      // 如果是 /api 打头，则访问地址如下
      "/api": {
        target: "https://codeym.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  }
})
