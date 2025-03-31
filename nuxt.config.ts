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
    '@pinia/nuxt',
    '@nuxtjs/strapi',
    '@nuxtjs/i18n',
  ],

  fonts: {
    families: [
      { name: "Cormorant" },
      { name: "Orbitron" }
    ]
  },

  strapi: {
    url: process.env.STRAPI_URL || 'http://localhost:1337',
    prefix: '/api',
    admin: '/admin',
    version: 'v5',
    cookie: {},
    cookieName: 'strapi_jwt',
    devtools: true
  },
})
