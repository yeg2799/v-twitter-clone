<template lang="pug">
.tw-icon
  component.icon(:is="require(`@/assets/icons/${icon}.svg?inline`)" :width="`${size}px`" :style= "{ color:color }")
  .text(v-if="text" )
    span(:style= "{ color:color }") {{ text }}
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
    color: {
      type: String,
      default: '',
    }
  },
};
</script>
<style lang="scss" scoped>
.tw-icon {
  display: flex;
  align-items: center;

  .icon {
    display: inline-block;
    object-fit: contain;
    user-select: none;
    pointer-events: none;
    fill: currentColor;
    stroke: currentColor;
    stroke-width: 0;
  }

  .text {
    margin-left: 10px;
    font-size: 15px;
  }
}
</style>
