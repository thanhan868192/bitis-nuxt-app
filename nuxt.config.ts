// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/image',
    '@nuxtjs/google-fonts',
    '@nuxt/ui',
  ],
  css: [
    '@fortawesome/fontawesome-free/css/all.min.css',
    '~/assets/css/main.css'
  ],
  image: {
    formats: ['webp', 'avif'],
    densities: [1, 2],
    screens: { sm: 640, md: 768, lg: 1024, xl: 1280, '2xl': 1536 }
  },
  googleFonts: {
    families: {
      Montserrat: true
    },
  },
  vite: {
    server: { hmr: false },
    optimizeDeps: { include: ['swiper', 'swiper/vue'] }
  },
})
