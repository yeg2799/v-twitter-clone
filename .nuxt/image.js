import Vue from 'vue'
import { createImage} from '~image'
import NuxtImg from '~image/components/nuxt-img.vue'
import NuxtPicture from '~image/components/nuxt-picture.vue'

import * as staticRuntime$017c from '/Users/yunusemre.guzel/Desktop/Kişisel Projeler/v-twitter-clone/node_modules/@nuxt/image/dist/runtime/providers/static.js'
import * as ipxRuntime$74c0 from '/Users/yunusemre.guzel/Desktop/Kişisel Projeler/v-twitter-clone/node_modules/@nuxt/image/dist/runtime/providers/ipx.js'

const imageOptions = {
  "screens": {
    "xs": 320,
    "sm": 640,
    "md": 768,
    "lg": 1024,
    "xl": 1280,
    "xxl": 1536,
    "2xl": 1536
  },
  "presets": {
    "avatar": {
      "modifiers": {
        "format": "jpg",
        "width": 40,
        "height": 40
      }
    }
  },
  "provider": "ipx",
  "domains": [
    "nuxtjs.org"
  ],
  "alias": {}
}

imageOptions.providers = {
  ['static']: { provider: staticRuntime$017c, defaults: {} },
  ['ipx']: { provider: ipxRuntime$74c0, defaults: {} }
}

Vue.component(NuxtImg.name, NuxtImg)
Vue.component(NuxtPicture.name, NuxtPicture)
Vue.component('NImg', NuxtImg)
Vue.component('NPicture', NuxtPicture)

export default function (nuxtContext, inject) {
  const $img = createImage(imageOptions, nuxtContext)

  if (process.static && process.server) {
    nuxtContext.beforeNuxtRender(({ nuxtState }) => {
      const ssrData = nuxtState.data[0] || {}
      ssrData._img = nuxtState._img || {}
    })
  }

  inject('img', $img)
}
