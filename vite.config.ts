import { resolve } from "path"
import vue from "@vitejs/plugin-vue"
import vueJsx from "@vitejs/plugin-vue-jsx"
import { defineConfig } from "vite"
import type { UserConfig } from "vite"
import dynamicImportVars from "@rollup/plugin-dynamic-import-vars"
/**
 * @type {import('vite').UserConfig}
 */
export default defineConfig({
  plugins: [
    // 用于正确编译.vue文件
    vue(),
    // 热更新 jsx
    vueJsx()
  ],
  build: {
    target: "esnext",
    // base: "/",
  },
  // Client Types
  // 资产导入（例如，导入.svg文件） 对于Vite的注入类型ENV变量上import.meta.env 对于类型HMR API上import.meta.hot
  compilerOptions: {
    types: ["vite/client"],
  },
  // assetsInclude:pathResolve("src/assets"),
  // 默认为react的jsx 需要显示弄成vue的
  esbuild: {
    // 解决头部引入h的问题
    jsxInject: "import { h } from \"vue\"",
    jsxFactory: "h",
    jsxFragment: "Fragment",
  },
  optimizeDeps: {
    //只能深入导入的资源
    include: [
      "lodash-es",
      "axios",
      // 兼容ant-design useForm
      "lodash-es/cloneDeep",
      "lodash-es/intersection",
      "lodash-es/isEqual",
      "lodash-es/debounce",
      "lodash-es/omit",
      "ant-design-vue/es/form/utils/validateUtil",
      "ant-design-vue/es/form/utils/messages",
      "ant-design-vue/es/form/utils/asyncUtil"
    ],
  },
  resolve: {
    alias: [{ find: "@", replacement: resolve(__dirname, "/src"), }],
  },
  server: {
    port: 3000,
    proxy: {
      "/springboot-admin": {
        target: "http://localhost:8090",
        changeOrigin: true,
      },
    },
  },
} as UserConfig)
