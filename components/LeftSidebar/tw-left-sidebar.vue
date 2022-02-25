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
    tw-button.tw-button(text="Tweetle" bgColor="#1d9bf0" width="220" height="50")
  .tw-left-sidebar-user
    tw-user-card
</template>

<script>
import { menuDataList } from '@/helpers/mocks';
import TwUserCard from '@/components/cards/tw-user-card';

export default {
  components: {
    TwUserCard,
  },
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
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 10px 0;

  .tw-tweet-icon {
    display: inline-block;
    margin-left: 10px;
    padding: 8px;
    border-radius: 50%;
    cursor: pointer;

    &:hover {
      background: #161616;
    }
  }

  &-menu {
    &-item {
      display: inline-block;
      margin-top: 10px;
      padding: 10px 20px;
      border-radius: 40px;
      cursor: pointer;

      &:hover {
        background: #161616;
      }
    }
  }

  &-user {
    margin-right: 10px;
  }

  .tw-button {
    margin: 20px 0;
  }
}
</style>
