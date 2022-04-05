/*
 * @Description: 
 * @Author: cooky
 * @Date: 2022-03-25 15:14:34
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import Components from 'unplugin-vue-components/vite'
// import {
//   AntDesignVueResolver
// } from 'unplugin-vue-components/resolvers'
import { resolve } from 'path'
// import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    // Components({
    //   dts: 'src/components.d.ts',
    //   resolvers: [AntDesignVueResolver()],
    //   include: [/\.vue$/, /\.vue\?vue/],
    // })
    // AutoImport({
    //   // 可以自定义文件生成的位置，默认根目录下
    //   dts: './src/auto-imports.d.ts',
    //   imports: ['vue'],
    //   eslintrc: {
    //     enabled: false
    //   }
    // })
  ],
  resolve: {
    alias: { // 配置别名
      "@": resolve(__dirname, "src")
    }
  },
  // clearScreen: true, // 设为false 可以避免 vite 清屏而错过在终端中打印某些关键信息
  // server: {
  //   host: 'localhost',
  //   port: 8080,
  //   https: false, // 是否弃用http2
  //   cors: true,
  //   open: true, // 服务启动时自动在浏览器打开
  //   proxy: {
  //     '/foo': '',
  //     '/api': {
  //       target: 'http://vite.com',
  //       changeOrigin: true,
  //       rewrite: path => path.replace(/^\/api/, '')
  //     }
  //   }
  // },
  // 打包配置
  // build: {
  //   // 浏览器兼容性 “esnext”｜“modules”
  //   target: "modules",
  //   outDir: "dist",
  //   assetsDir: "assets",
  //   // //小于此阈值的导入或引用资源将内联为 base64 编码，以避免额外的 http 请求。设置为 0 可以完全禁用此项
  //   assetsInlineLimit: 4096,
  //   // 启用/禁用css代码拆分
  //   cssCodeSplit: true,
  //   sourcemap: false,
  //   // 自定义底层rollup打包配置
  //   rollupOptions: {},
  //   // @rollup/plugin-commonjs 插件的选项
  //   commonjsOptions: {},
  //   // lib: {}, // 构建的库
  //   chunkSizeWarningLimit: 500
  // },
  // 继承自 esbuild 转换选项，最常见的用例是自定义 JSX
  // esbuild: {
  //   jsxFactory: "h",
  //   jsxFragment: "Fragment",
  //   jsxInject: `import Vue fron 'vue`
  // }
})
