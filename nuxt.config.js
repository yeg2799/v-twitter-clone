const router = require('./config/router.js');
export default {
  watch: ['~/config/*'],
  router,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'twitter-clone',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: ['bootstrap/dist/css/bootstrap.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/component.js',
    {
      src: '@/plugins/vue-ellipse-progress.js',
      mode: 'client',
    },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/composition-api/module',
    '@nuxtjs/svg',
    '@nuxt/image',
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://composition-api.nuxtjs.org/
    '@nuxtjs/composition-api/module',
    // Doc: https://github.com/nuxt-community/color-mode-module
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/svg-sprite', '@nuxt/image'],
  svgSprite: {
    input: '~/assets/icons/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: process.env.NODE_ENV === 'production',
    transpile: ['@nuxtjs/composition-api'],
    /*
     ** You can extend webpack config here
     */
    // loaders: {
    //   sass: {
    //     prependData: '@import "~@/assets/scss/variables.scss";',
    //   },
    // },
    // analyze: true,
    // vendor: ['axios', 'vee-validate'],
    // babel: {
    //   presets({ isServer }) {
    //     const targets = isServer ? { node: 'current' } : { ie: 11 };

    //     return [[require.resolve('@babel/preset-env'), { targets }]];
    //   },
    //   plugins: ['@babel/syntax-dynamic-import', '@babel/transform-runtime', '@babel/transform-async-to-generator'],
    // },
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            configFile: './.eslintrc.js',
          },
        });
      }
    },
    // babel: {
    //   presets: [
    //     [
    //       '@babel/preset-env',
    //       {
    //         useBuiltIns: 'entry',
    //         corejs: 3,
    //       },
    //     ],
    //   ],
    //   plugins: ['@babel/transform-runtime'],
    // },
    // extractCSS: true
  },

  image: {
    domains: ['nuxtjs.org'],
    dir: 'assets/images',
    presets: {
      avatar: {
        modifiers: {
          format: 'jpg',
          width: 40,
          height: 40,
        },
      },
    },
  },
};
