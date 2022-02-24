<template lang="pug">
.tw-button-wrapper
  component.button(:type="type" :is="tag" :style="{ 'background-color': bgColor }" @click="clicked")
    span.text {{ text }}
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '',
    },
    tag: {
      type: String,
      required: false,
      default: 'button',
    },
    type: {
      type: String,
      required: false,
      default: 'button',
    },
    bgColor: {
      type: String,
      default: '',
    },
  },
  setup() {
    const clicked = () => {
      console.log('clicked');
    };

    return {
      clicked,
    };
  },
};
</script>

<style lang="scss" scoped>
.tw-button-wrapper {
  .button {
    display: inline-block;
    cursor: pointer;
    padding: 20px 80px;
    border: 1px solid transparent;
    border-radius: 50px;
    .text {
      color: #fff;
      font-size: 15px;
    }
  }
}
</style>
