// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@storyblok/nuxt',
  ],

  css: ['~/assets/css/main.css'],

  storyblok: {
    accessToken: process.env.STORYBLOK_DELIVERY_API_TOKEN,
    apiOptions: {
      region: process.env.STORYBLOK_REGION || 'eu',
    },
    // Blocks are registered from `app/components/global/` instead (see README)
    componentsDir: '',
  },

  runtimeConfig: {
    public: {
      // 'draft' | 'published', passed on every request
      storyblokVersion: process.env.STORYBLOK_VERSION || 'published',
    },
  },

  image: {
    provider: 'storyblok',
    storyblok: {
      baseURL: 'https://a.storyblok.com',
    },
  },

  // Extended by eslint.config.mjs
  eslint: {
    config: {
      standalone: false,
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  // HTTPS for the Visual Editor: run `pnpm mkcert` once
  devServer: {
    https: {
      key: './certs/localhost-key.pem',
      cert: './certs/localhost.pem',
    },
  },

  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
})
