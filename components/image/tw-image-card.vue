<template lang="pug">
nuxt-img(:src="src" :preset="preset")
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    preset: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss"></style>
