<template lang="pug">
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
      tw-icon.world-icon(color="#1D9BF0" icon="world" text="Herkes yanıtlayabilir" size="20")
    .tw-main-page-body-share-right-bottom
      .tw-main-page-body-share-right-bottom-features
        tw-icon.media-icon(color="#1D9BF0" icon="media" size="20")
        tw-icon.gif-icon(color="#1D9BF0" icon="gif" size="20")
        tw-icon.poll-icon(color="#1D9BF0" icon="poll" size="20")
        tw-icon.emoji-icon(color="#1D9BF0" icon="emoji" size="20")
        tw-icon.plan-icon(color="#1D9BF0" icon="plan" size="20")
        tw-icon.location-icon(color="#1D9BF0" icon="location" size="20")
      .tw-main-page-body-share-right-bottom-tweet-tw-button
        //- tw-ellipse-progress
        tw-button(color="#7F7F7F" text="Tweetle" bgColor="#0F4D77" height="35")
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.tw-main-page {
  &-body-share {
    display: flex;
    width: auto;
    padding: 15px;
    border-bottom: 1px solid #393c3e;

    &-right {
      width: 100%;
      margin-left: 25px;

      &-input {
        margin: 5px 5px 15px;
        border-bottom: 1px solid #393c3e;

        .world-icon {
          display: inline-flex;
          margin-bottom: 10px;
          padding: 5px 10px;
          border-radius: 40px;
          cursor: pointer;

          &:hover {
            background: #041018;
          }
        }

        .tw-text-field .tw-right-sidebar-text-field {
          margin: 5px 0 10px;
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
