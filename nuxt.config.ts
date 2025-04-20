// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';
export default defineNuxtConfig({
  app: {
    head: {
      title: 'syahdan',
      htmlAttrs: {
        lang: 'en',
      },
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/img/favicon.png' }],
    },
  },
  compatibilityDate: '2025-04-20',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()],
  },

  modules: ['@nuxtjs/google-fonts', '@nuxt/image'],
  googleFonts: {
    families: {
      Alexandria: {
        wght: '100..900',
      },
    },
    display: 'swap',
    useStylesheet: true,
  },
  // devServer: {
  //   host: '192.168.19.22',
  //   port: 8000,
  // },
});
