<template lang="pug">
.tw-left-sidebar
  .tw-left-sidebar-wrapper
    .tw-tweet-icon
      tw-icon(icon="tweet-bird")
    .tw-left-sidebar-menu(v-for="menu in menuDataList" :key="menu.id")
      tw-link.tw-left-sidebar-menu-item(v-if="menu.slug" :link="menu.slug")
        tw-icon(:icon="menu.icon" :text="menu.title")
      .tw-left-sidebar-menu-item(v-if="!menu.slug" @click="openMoreList")
        tw-icon(:icon="menu.icon" :text="menu.title")
    tw-button.tw-button(text="Tweetle" bgColor="#1d9bf0")
  .tw-left-sidebar-user
    span Emre
</template>

<script>
import { onMounted } from '@nuxtjs/composition-api';
import { menuDataList } from '@/helpers/mocks';

export default {
  setup() {
    const openMoreList = () => {
      console.log('opened');
    };

    return {
      openMoreList,
      menuDataList,
    };
  },
};
</script>

<style lang="scss" scoped>
.tw-left-sidebar {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 100px;
  padding-top: 15px;
  .tw-tweet-icon {
    display: inline-block;
    cursor: pointer;
    padding: 8px;
    margin-left: 10px;
    border-radius: 50%;
    &:hover {
      background: #161616;
    }
  }
  &-menu {
    &-item {
      display: inline-block;
      margin-top: 10px;
      cursor: pointer;
      padding: 10px 20px;
      border-radius: 40px;
      &:hover {
        background: #161616;
      }
    }
  }
  .tw-button {
    margin: 20px 0px;
  }
}
</style>
