<template lang="pug">
.tw-right-sidebar
  .tw-right-sidebar-search-card
    tw-text-field(placeholder="Twitter'da Ara" icon="search" prefixIcon inputColor="#202327")
    tw-icon.multiple-icon(icon="multiple" size="10")
  .tw-right-sidebar-explore-card
    tw-explore-card
</template>

<script>
import TwExploreCard from '@/components/cards/tw-explore-card';

export default {
  components: {
    TwExploreCard,
  },
};
</script>

<style lang="scss" scoped>
.tw-right-sidebar {
  margin-left: 30px;
  margin-top: 10px;
  &-search-card {
    display: flex;
    background: #202327;
    padding: 10px;
    border-radius: 40px;
  }
  &-explore-card {
    margin-top: 15px;
  }
}
</style>
