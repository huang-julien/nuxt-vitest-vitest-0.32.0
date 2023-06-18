// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['./modules/routing', '@nuxtjs/i18n', 'nuxt-vitest'],
  i18n: {
    strategy: 'prefix',
    locales: [
      {
        code: 'en',
        iso: 'en',
      },
      {
        code: 'fr',
        iso: 'fr',
      },
    ],
    defaultLocale: 'fr',
  },
  devtools: {
    enabled: true,
  },
});
