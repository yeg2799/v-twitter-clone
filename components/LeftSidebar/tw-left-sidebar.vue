<template lang="pug">
  .tw-left-sidebar
    .tw-left-sidebar-wrapper
      .tw-tweet-icon
        tw-icon(icon="tweet-bird")
      .tw-left-sidebar-menu(v-for="a in 8" :key="a")
        .tw-left-sidebar-menu-item
          tw-icon(icon="home" text="Anasayfa")
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
 .tw-left-sidebar {
    margin-left: 100px;
    padding-top: 15px;
    .tw-tweet-icon{
        display: inline-block;
        cursor: pointer;
        padding: 8px;
        margin-left: 10px;
        border-radius: 50%;
        &:hover{
           background: #161616;
        }
    }
    &-menu{
        &-item{
          display: inline-block;
          margin-top: 10px;
          cursor: pointer;
          padding: 10px 20px;
          border-radius: 40px;
          &:hover{
            background: #161616;
          }
        }
    }
 }
</style>