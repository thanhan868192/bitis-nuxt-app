// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/critters',
    '@nuxt/image',
    '@nuxtjs/google-fonts',
    '@nuxt/ui',
  ],
  css: [
    '~/assets/css/main.css'
  ],
  critters: {
    config: {
      preload: 'swap',
      inlineFonts: true,
      preloadFonts: true,
      pruneSource: true,
      reduceInlineStyles: true
    }
  },
  image: {
    formats: ['avif', 'webp', 'png', 'jpg'],
    quality: 65,
    densities: [1, 2],
    screens: { sm: 640, md: 768, lg: 1024, xl: 1280, '2xl': 1536 }
  },
  features: {
    inlineStyles: true,
  },
  googleFonts: {
    families: {
      Montserrat: true
    },
  },
  vite: {
    server: { hmr: false },
    optimizeDeps: { include: ['swiper', 'swiper/vue'] },
    build: { sourcemap: true, cssCodeSplit: true },
  },
  postcss: {
    plugins: {
      'postcss-font-display': { display: 'swap' }
    }
  },
  nitro: {
    routeRules: {
      '/_nuxt/**': {
        headers: {
          'Cache-Control': 'public, max-age=31536000, immutable'
        }
      },
      '/images/**': {
        headers: {
          'Cache-Control': 'public, max-age=31536000, immutable'
        }
      },
      '/**': {
        headers: {
          'Cache-Control': 'no-cache'
        }
      }
    },
    compressPublicAssets: true,
  },
  routeRules: { '/**': { prerender: false } }
})
