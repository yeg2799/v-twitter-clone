<template lang="pug">
.tw-text-field
  .tw-right-sidebar-prefix-icon(v-if="prefixIcon")
    tw-icon(:icon="icon")
  .tw-right-sidebar-text-field
    input(:type="type" :placeholder="placeholder")
  .tw-right-sidebar-suffix-icon(v-if="suffixIcon")
    tw-icon(:icon="icon")
</template>

<script>
export default {
  props: {
    prefixIcon: {
      type: Boolean,
      default: false,
    },
    suffixIcon: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
.tw-text-field {
  display: flex;
  align-items: center;
  // justify-content: space-around;
}
</style>
