import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { presetAttributify, presetIcons, presetUno } from 'unocss'
import Unocss from 'unocss/vite'
import { theme } from '@unocss/preset-uno'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    Vue(),

    // https://github.com/hannoeru/vite-plugin-pages
    Pages(),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        '@vueuse/core',
      ],
      dts: true,
    }),

    // https://github.com/antfu/vite-plugin-components
    Components({
      dts: true,
    }),

    // https://github.com/antfu/unocss
    Unocss({
      theme: {
        colors: {
          primary: theme.colors.emerald,
          secondary: theme.colors.lime,
          tertiary: theme.colors.yellow,
          danger: theme.colors.red,
          gray: theme.colors.stone,
        },
      },
      shortcuts: [
        ['btn', 'bg-primary-200 px-6 py-3 rounded-full text-xl font-semibold text-primary-800 transition hover:scale-125'],
        ['input', 'border rounded-md border-gray-200 h-10 shadow-sm px-3 focus:outline-none focus:border-primary-500 focus:ring-3 focus:ring-primary-300;'],
      ],
      presets: [
        presetUno(),
        presetAttributify(),
        presetIcons({
          scale: 1.0,
        }),
      ],
    }),
  ],
})
