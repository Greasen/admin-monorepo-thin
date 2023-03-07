import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import viteCompression from 'vite-plugin-compression'
import { visualizer } from 'rollup-plugin-visualizer'
import DefineOptions from 'unplugin-vue-define-options/vite'
import legacy from '@vitejs/plugin-legacy'
import type { PluginOption } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'
import { VITE_STSYTM_TITLE_ } from '/@/meta/config/config'
import out from '../../package/service/build.config'
import { viteMockServe } from 'vite-plugin-mock'

export function createVitePlugins() {
  const localEnabled: boolean = (process.env.USE_MOCK as unknown as boolean) || false;
  const prodEnabled: boolean = (process.env.USE_CHUNK_MOCK as unknown as boolean) || false;

  const vitePlugins: PluginOption[] = [
    vue(),
    vueJsx(),
    viteCompression(),
    viteMockServe({
      // default
      mockPath: 'mock',
      localEnabled: localEnabled,  // 开发打包开关
      prodEnabled: prodEnabled, // 生产打包开关
      supportTs: true, // 打开后，可以读取 ts 文件模块。 请注意，打开后将无法监视.js 文件。
      watchFiles: true, // 监视文件更改
    }),
    visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true,
    }) as PluginOption,

    DefineOptions(),
    legacy({
      targets: ['chrome 87'],
    }),
    createHtmlPlugin({
      minify: true,
      /**
       * 在这里写entry后，你将不需要在`index.html`内添加 script 标签，原有标签需要删除
       */
      entry: '/package/meta/main.ts',
      /**
       * 需要注入 index.html ejs 模版的数据
       * 这里设置 默认的 index.html title，在登录成功后会重新设置 document.title
       */
      inject: {
        data: {
          title: VITE_STSYTM_TITLE_,
          injectScript: out.$InjectScript,
        },
      },
    }),
    ...out.plugins
  ]
  return vitePlugins
}
