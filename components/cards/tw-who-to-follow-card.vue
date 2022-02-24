<template lang="pug">
.tw-who-to-follow-card
  .tw-who-to-follow-card-header
    h5.title Kimi Takip Etmeli
  .tw-who-to-follow-card-body
    .tw-who-to-follow-card-body-row(v-for="a in 2" :key="a")
      .tw-who-to-follow-card-body-row-left
        .tw-who-to-follow-card-body-row-left-avatar
          tw-image-card(
            src="https://st2.depositphotos.com/3557671/11164/v/950/depositphotos_111644750-stock-illustration-man-avatar-icon-of-vector.jpg"
            preset="avatar"
          )
        .tw-who-to-follow-card-body-row-left-name
          span.name Emre Güzel
          span.userName @emrex99
      .tw-who-to-follow-card-body-row-right
        tw-button.follow-button(color="#000" bgColor="#fff" text="Takip Et" width="90" height="40")
  .tw-who-to-follow-card-bottom
    span Daha Fazla Göster
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.tw-who-to-follow-card {
  background: #15181c;
  border-radius: 15px;
  &-header {
    padding: 15px;
  }
  &-body {
    &-row {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 15px;
      justify-content: space-between;
      cursor: pointer;
      &:hover {
        background: #1c1f24;
      }
      &-left {
        display: flex;
        align-items: center;
        &-name {
          display: flex;
          flex-direction: column;
          margin-left: 10px;
          .userName {
            font-size: 13px;
            color: #3a3e43;
          }
        }
      }
    }
  }
  &-bottom {
    padding: 15px;
    color: #2799ed;
    cursor: pointer;
    &:hover {
      background: #2b3032;
      border-bottom-left-radius: 15px;
      border-bottom-right-radius: 15px;
    }
  }
}
</style>
