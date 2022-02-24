<template lang="pug">
.tw-right-sidebar
  .tw-right-sidebar-search
    tw-text-field(placeholder="Twitter'da Ara" icon="search" prefixIcon inputColor="#202327")
    ys-icon.multiple-icon(icon="multiple")
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.tw-right-sidebar {
  margin-left: 30px;
  margin-right: 100px;
  margin-top: 10px;
  &-search {
    background: #202327;
    padding: 10px;
    border-radius: 40px;
  }
}
</style>
