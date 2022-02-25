<template lang="pug">
.tw-content-cards
  .tw-content-cards-wrapper(v-for="a in 3" :key="a")
    .tw-content-cards-wrapper-left
      .tw-content-cards-wrapper-left-avatar
        tw-image-card(
          src="https://st2.depositphotos.com/3557671/11164/v/950/depositphotos_111644750-stock-illustration-man-avatar-icon-of-vector.jpg"
          preset="avatar"
        )
    .tw-content-cards-wrapper-right
      .tw-content-cards-wrapper-right-header
        .tw-content-cards-wrapper-right-header-userName
          span.name De Marke Sports
          span.userName @demarkesports
          span.time .34d
        tw-icon(icon="more-than" size="20")
      .tw-content-cards-wrapper-right-body
        .tw-content-cards-wrapper-right-body-text
          span Nwakaeme'nin penaltı golü öncesinde tribünde fenalaşan iki Trabzonspor taraftarı, hastaneye kaldırıldı. (Spor Arena)
        .tw-content-cards-wrapper-right-body-image
          tw-image-card(src="https://pbs.twimg.com/media/FMd5kQXX0AESMhs?format=jpg&name=medium")
      .tw-content-cards-wrapper-right-bottom
        .tw-content-cards-wrapper-right-bottom-reaction
          tw-icon(color="#343639" icon="content" text="6" size="20")
          tw-icon(color="#343639" icon="retweet" text="37" size="20")
          tw-icon(color="#343639" icon="like" text="382" size="20")
          tw-icon(color="#343639" icon="share" size="20")
</template>

<script>
export default {};
</script>

<style lang="scss">
.tw-content-cards {
  width: 100%;
  cursor: pointer;

  &:hover {
    background: #080808;
  }

  &-wrapper {
    display: flex;
    padding: 10px;
    border-bottom: 1px solid #393c3e;

    &-right {
      width: 100%;
      margin-left: 10px;

      &-header {
        display: flex;
        justify-content: space-between;
      }

      &-body {
        &-image {
          width: 520px;
          margin: 20px 0;

          img {
            width: 100%;
            border-radius: 10px;
          }
        }
      }

      &-bottom {
        width: 80%;
        margin-top: 10px;

        &-reaction {
          display: flex;
          justify-content: space-between;
        }
      }
    }
  }
}
</style>
