import esbuild from 'rollup-plugin-esbuild'
import vue from 'rollup-plugin-vue'
import scss from 'rollup-plugin-scss'
import dartSass from 'sass'
import { terser } from 'rollup-plugin-terser'

export default {
  input: 'src/lib/index.ts',
  output: [
    {
      globals: {
        vue: 'Vue',
      },
      name: 'Vue3LibUi',
      file: 'dist/lib/vue3-lib-ui.js',
      format: 'umd',
      plugins: [terser()],
    },
    {
      name: 'Vue3LibUi',
      file: 'dist/lib/vue3-lib-ui.esm.js',
      format: 'es',
      plugins: [terser()],
    },
  ],
  plugins: [
    // vue插件要放在最前面，不然打包会报错
    vue({
      include: /\.vue$/,
    }),
    scss({ include: /\.scss$/, sass: dartSass }),
    esbuild({
      include: /\.[jt]s$/,
      minify: process.env.NODE_ENV === 'production',
      target: 'es2015',
    }),
  ],
}
