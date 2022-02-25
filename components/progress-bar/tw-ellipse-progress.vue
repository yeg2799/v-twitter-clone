<template lang="pug">
vue-ellipse-progress(:progress="progress")
</template>

<script>
export default {
  props: {
    progress: {
      type: Array,
      default: () => [-100, 100],
    },
  },
};
</script>

<style></style>
