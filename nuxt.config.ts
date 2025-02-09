// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/scss/main.scss'],

  pages: true,

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    }
  },

  modules: [
    '@nuxt/fonts',
    '@nuxt/icon',
    '@pinia/nuxt',
    '@vee-validate/nuxt',
    '@nuxtjs/strapi'
  ]
})