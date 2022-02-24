<template lang="pug">
.tw-explore-card
  .tw-explore-card-header
    span.tw-explore-card-header-title İlgini çekebilecek gündemler
    tw-icon.setting-icon(icon="setting" size="20")
  .tw-explore-card-body
    .tw-explore-card-body-row(v-for="a in 5" :key="a")
      .tw-explore-card-body-row-left
        span.tag Politika.Gündemdekiler
        span.title Bayraktar TB2
        span.tweet-count 22.5 B Tweet
      .tw-explore-card-body-row-right
        tw-icon.more-than.icon(icon="more-than" size="20")
  .tw-explore-card-bottom
    span Daha Fazla Göster
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.tw-explore-card {
  background: #15181c;
  border-radius: 15px;
  &-header {
    display: flex;
    align-items: center;
    padding: 15px;
    padding-bottom: 0;
    justify-content: space-between;
    &-title {
      font-size: 20px;
    }
    .setting-icon {
      padding: 5px;
      border-radius: 50%;
      cursor: pointer;
      &:hover {
        background: #2b3032;
      }
    }
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
        flex-direction: column;
        .tag {
          font-size: 13px;
          color: #3a3e43;
        }
        .tweet-count {
          font-size: 13px;
          color: #3a3e43;
        }
      }
      &-right {
        .more-than {
          padding: 5px;
          border-radius: 50%;
          cursor: pointer;
          &:hover {
            background: #2b3032;
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
