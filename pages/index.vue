<template lang="pug">
.tw-main-page
  .tw-main-page-header
    span.title Anasayfa
    tw-icon.star-icon.icon(icon="star" size="20")
  .tw-main-page-body
    .tw-main-page-body-share
      .tw-main-page-body-share-left
        .tw-main-page-body-share-left-avatar
          tw-image-card(
            src="https://st2.depositphotos.com/3557671/11164/v/950/depositphotos_111644750-stock-illustration-man-avatar-icon-of-vector.jpg"
            preset="avatar"
          )
      .tw-main-page-body-share-right
        .tw-main-page-body-share-right-input
          tw-text-field(placeholder="Neler oluyor?" inputColor="#000")
          //- tw-icon.world-icon(icon="world" text="Herkes yanıtlayabilir")
        .tw-main-page-body-share-right-bottom
          .tw-main-page-body-share-right-bottom-features
            tw-icon.media-icon(icon="media" size="20" color="#1D9BF0")
            tw-icon.gif-icon(icon="gif" size="20" color="#1D9BF0")
            tw-icon.poll-icon(icon="poll" size="20" color="#1D9BF0")
            tw-icon.emoji-icon(icon="emoji" size="20" color="#1D9BF0")
            tw-icon.plan-icon(icon="plan" size="20" color="#1D9BF0")
            tw-icon.location-icon(icon="location" size="20" color="#1D9BF0")
          .tw-main-page-body-share-right-bottom-tweet-tw-button
            //- tw-ellipse-progress
            tw-button(text="Tweetle" bgColor="#1D9BF0" height="35")
</template>

<script>
import TwEllipseProgress from '@/components/progress-bar/tw-ellipse-progress';
export default {
  name: 'MainPage',
  components: {
    TwEllipseProgress
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
  &-body-share {
    display: flex;
    padding: 15px;
    width: auto;
    &-right {
      width: 100%;
      margin-left: 25px;
      &-input {
        .tw-text-field .tw-right-sidebar-text-field {
          margin: 5px 5px 25px;
        }
      }
      &-bottom {
        display: flex;
        align-items: center;
        justify-content: space-between;
        &-features {
          display: flex;
          align-items: center;
          .tw-icon {
            margin-right: 2px;
            padding: 5px;
            border-radius: 50%;
            cursor: pointer;
            &:hover {
              background: #041018;
            }
          }
        }
      }
    }
  }
}
</style>
