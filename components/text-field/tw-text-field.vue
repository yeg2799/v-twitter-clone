<template lang="pug">
.tw-text-field
  .tw-right-sidebar-prefix-icon(v-if="prefixIcon")
    tw-icon(:icon="icon" size="20")
  .tw-right-sidebar-text-field
    input(:type="type" :placeholder="placeholder" :style="{ backgroundColor: inputColor }")
  .tw-right-sidebar-suffix-icon(v-if="suffixIcon")
    tw-icon(:icon="icon" size="20")
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
    inputColor: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
.tw-text-field {
  display: inline-flex;
  align-items: center;
  width: 100%;
  // justify-content: space-around;
  .tw-right-sidebar-text-field {
    width: 100%;
    margin: 0 15px;

    input {
      width: 100%;
      color: #fff;
      border: none;
    }
  }
}
</style>
