<template lang="pug">
.tw-notification-count-card
  span Göster 10 Tweet
</template>

<script>
export default {};
</script>

<style lang="scss">
.tw-notification-count-card {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  color: #1d9bf0;
  border-bottom: 1px solid #393c3e;
  cursor: pointer;

  &:hover {
    background: #080808;
  }
}
</style>
