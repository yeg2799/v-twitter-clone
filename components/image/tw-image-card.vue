<template lang="pug">
  nuxt-img(:preset="preset" :src="src")
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    },
    preset: {
      type: String,
      default: ''
    }
  },
}
</script>

<style lang="scss">

</style>
