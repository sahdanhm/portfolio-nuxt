// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()],
  },

  modules: ['@nuxtjs/google-fonts'],
  googleFonts: {
    families: {
      Alexandria: {
        wght: '100..900',
      },
    },
    display: 'swap',
    useStylesheet: true,
  },
  devServer: {
    host: '0.0.0.0',
    port: 8000,
  },
});
