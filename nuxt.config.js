const router = require('./config/router.js');
export default {
  router,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'twitter-clone',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/component.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/composition-api/module',
    '@nuxtjs/svg',
    '@nuxt/image',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/svg-sprite',
    '@nuxt/image',
  ],
  svgSprite: {
    input: '~/assets/icons/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  image: {
    domains: ['nuxtjs.org'],
    dir: 'assets/images',
    presets: {
      avatar: {
        modifiers: {
          format: 'jpg',
          width: 40,
          height: 40
        }
      }
    }
  },
}
