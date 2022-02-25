<template lang="pug">
.tw-main-page
  .tw-main-page-header
    span.title Anasayfa
    tw-icon.star-icon.icon(icon="star" size="20")
  .tw-main-page-body
    tw-share-tweets-card
    tw-notification-count-card
    tw-content-card
</template>

<script>
import TwEllipseProgress from '@/components/progress-bar/tw-ellipse-progress';
import TwShareTweetsCard from '@/components/cards/tw-share-tweets-card'
import TwNotificationCountCard from '@/components/cards/tw-notification-count-card';
import TwContentCard from '@/components/cards/tw-content-card';
export default {
  name: 'MainPage',
  components: {
    TwEllipseProgress,
    TwShareTweetsCard,
    TwNotificationCountCard,
    TwContentCard,
  }
};
</script>
<style lang="scss">
.tw-main-page {
  display: flex;
  flex-direction: column;
  position: relative;
  &-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 15px;
    .title {
      font-size: 17px;
    }
  }
}
</style>
