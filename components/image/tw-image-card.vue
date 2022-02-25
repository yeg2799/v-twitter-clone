<template lang="pug">
nuxt-img(:src="src" :preset="preset" :class="{ avatar: preset === 'avatar' }")
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

<style lang="scss">
.avatar {
  width: 45px;
  height: 45px;
  border-radius: 50%;
}
</style>
