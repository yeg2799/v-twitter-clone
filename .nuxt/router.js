import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _29e8d126 = () => interopDefault(import('../node_modules/@nuxtjs/svg-sprite/lib/pages/icons-list.vue' /* webpackChunkName: "" */))
const _17b07fb1 = () => interopDefault(import('../pages/index' /* webpackChunkName: "" */))
const _2bb315b2 = () => interopDefault(import('../pages/explore' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/_icons",
    component: _29e8d126,
    name: "icons-list"
  }, {
    path: "/_icons",
    component: _29e8d126,
    name: "icons-list"
  }, {
    path: "/_icons",
    component: _29e8d126,
    name: "icons-list"
  }, {
    path: "/home",
    component: _17b07fb1,
    name: "main-page"
  }, {
    path: "/explore",
    component: _2bb315b2,
    name: "explore-page"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
