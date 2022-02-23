<template lang="pug">
  .default-layout
    .layout-left-sidebar
      tw-left-sidebar
    .layout-main
      Nuxt
    .layout-right-sidebar
      tw-right-sidebar
</template>

<script>
import TwLeftSidebar from '@/components/leftSidebar/tw-left-sidebar.vue'
import TwRightSidebar from '@/components/rightSidebar/tw-right-sidebar.vue'
export default {
  middleware: 'main',
  components: {
    TwLeftSidebar,
    TwRightSidebar,
  }
}
</script>

<style lang="scss">
* {
    margin: 0px;
    padding: 0px;
    &,
    &:before,
    &:after {
      box-sizing: border-box;
    }
  }

  *,
  *:focus {
    outline: none;
  }

  html {
    box-sizing: border-box;
    text-rendering: optimizeLegibility;
    position: relative;
    overflow-x: hidden;
  }

  body {
    overflow-x: hidden !important;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    background: #f7f7f7;
    color: #393c3e;
    font-size: 14px;
  }

.default-layout {
  display: flex;
  width: 100%;
  height: 100%;
  color: #fff;
  background: #000;
  overflow-y: hidden;
  .layout-left-sidebar {
    width: 25%;
  }
  .layout-main{
    width: 41.5%;
    border-left: 1px solid #393c3e;
    border-right: 1px solid #393c3e;
  }
  .layout-right-sidebar {

  }
}

</style>
