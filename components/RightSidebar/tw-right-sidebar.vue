<template lang="pug">
.tw-right-sidebar
  .tw-right-sidebar-search-card
    tw-text-field(placeholder="Twitter'da Ara" icon="search" prefixIcon inputColor="#202327")
    tw-icon.multiple-icon(icon="multiple" size="10")
  .tw-right-sidebar-explore-card
    tw-explore-card
  .tw-right-sidebar-whotofollow-card
    tw-who-to-follow-card
</template>

<script>
import TwExploreCard from '@/components/cards/tw-explore-card';
import TwWhoToFollowCard from '@/components/cards/tw-who-to-follow-card';

export default {
  components: {
    TwExploreCard,
    TwWhoToFollowCard,
  },
};
</script>

<style lang="scss" scoped>
.tw-right-sidebar {
  margin-top: 10px;
  margin-left: 30px;

  &-search-card {
    display: flex;
    padding: 10px;
    background: #202327;
    border-radius: 40px;
  }

  &-explore-card {
    margin-top: 15px;
  }

  &-whotofollow-card {
    margin-top: 15px;
  }
}
</style>
