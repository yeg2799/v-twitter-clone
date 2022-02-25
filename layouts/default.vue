<template lang="pug">
.default-layout
  .container.layout(:style="{ height: `${layoutHeight}px` }")
    .layout-left-sidebar
      tw-left-sidebar
    .layout-main
      Nuxt
    .layout-right-sidebar
      tw-right-sidebar
</template>

<script>
import { onMounted, ref, onUnmounted } from '@nuxtjs/composition-api';
import TwLeftSidebar from '@/components/leftSidebar/tw-left-sidebar.vue';
import TwRightSidebar from '@/components/rightSidebar/tw-right-sidebar.vue';

export default {
  middleware: 'main',
  components: {
    TwLeftSidebar,
    TwRightSidebar,
  },
  setup() {
    const layoutHeight = ref('');
    const handleResize = () => {
      layoutHeight.value = window.innerHeight;
    };
    onMounted(() => {
      window.addEventListener('resize', handleResize);
      handleResize();
    });
    onUnmounted(() => {
      window.removeEventListener('resize', handleResize);
    });

    return {
      layoutHeight,
    };
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;

  &,
  &::before,
  &::after {
    box-sizing: border-box;
  }
}

*,
*:focus {
  outline: none;
}

html {
  position: relative;
  box-sizing: border-box;
  overflow-x: hidden;
  text-rendering: optimizeLegibility;
}

body {
  overflow-x: hidden !important;
  color: #393c3e;
  font-weight: 400;
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  background: #f7f7f7;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.container {
  @media screen and (min-width: 1200px) {
    max-width: 1280px !important;
  }
}

.default-layout {
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  color: #fff;
  background: #000;

  .layout {
    display: flex;
  }

  .layout-left-sidebar {
    width: 21%;
  }

  .layout-main {
    width: 48%;
    overflow-y: scroll;
    border-right: 1px solid #393c3e;
    border-left: 1px solid #393c3e;
  }

  .layout-right-sidebar {
    width: 31%;
    overflow: scroll;
  }
}
</style>
