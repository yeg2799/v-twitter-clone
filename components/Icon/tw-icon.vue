<template lang="pug">
.tw-icon
  component.icon(:is="require(`@/assets/icons/${icon}.svg?inline`)" :width="`${size}px`")
  .text(v-if="text")
    span {{ text }}
</template>

<script>
export default {
  name: 'TwIcon',
  props: {
    icon: {
      type: String,
      default: '',
      required: true,
    },
    size: {
      type: String,
      default: '30',
    },
    text: {
      type: String,
      default: '',
    },
  },
};
</script>
<style lang="scss" scoped>
.tw-icon {
  display: flex;
  align-items: center;
  .icon {
    display: inline-block;
    stroke-width: 0;
    stroke: currentColor;
    fill: currentColor;
    object-fit: contain;
    pointer-events: none;
    user-select: none;
  }
  .text {
    font-size: 15px;
    margin-left: 10px;
  }
}
</style>
