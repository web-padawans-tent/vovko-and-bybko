// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/scss/main.scss'],
  vite: {
    plugins: [
        tailwindcss()
    ]
  },

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
    '@nuxtjs/tailwindcss',
  ],

  tailwindcss: {
    config: {
      content: [
        './app.vue',
        './pages/**/*.{vue,js,ts}',
        './components/**/*.{vue,js,ts}',
      ],
      theme: {
        container: {
          padding: {
            DEFAULT: '1rem',
            sm: '2rem',
            lg: '4rem',
            xl: '5rem',
            '2xl': '6rem',
          },
        },
        extend: {},
      },
      plugins: [],
    }
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
