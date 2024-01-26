// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'William Dev',
    },
  },
  css: ['~/assets/css/main.css', '~/assets/scss/main.scss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/i18n',
    '@invictus.codes/nuxt-vuetify',
    '@vueuse/motion/nuxt',
    'nuxt-anchorscroll',
  ],
  colorMode: {
    classSuffix: '',
    preference: 'dark',
    fallback: 'dark',
  },
  i18n: {
    strategy: 'no_prefix',
    locales: [
      { code: 'en', file: 'en.json' },
      { code: 'pt', file: 'pt.json' },
    ],
    lazy: true,
    langDir: 'lang',
    defaultLocale: 'pt',
    detectBrowserLanguage: false,
  },
})
