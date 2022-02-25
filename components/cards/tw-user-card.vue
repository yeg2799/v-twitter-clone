<template lang="pug">
.tw-user-card(@click="openList")
  .tw-user-card-left
    .tw-user-card-avatar
      tw-image-card(
        src="https://www.nj.com/resizer/zovGSasCaR41h_yUGYHXbVTQW2A=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg"
        preset="avatar"
      )
    .tw-user-card-left-name
      span.name Emre
      span.userName @emrex99
  .tw-user-more-than-icon
    tw-icon(icon="more-than")
</template>

<script>
export default {
  setup() {
    const openList = () => {
      console.log('opened');
    };

    return { openList };
  },
};
</script>

<style lang="scss" scoped>
.tw-user-card {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  border-radius: 40px;
  cursor: pointer;

  &:hover {
    background: #161616;
  }

  &-left {
    display: flex;
    // align-items: center;
    &-name {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      margin-left: 10px;

      .userName {
        color: #383c3f;
        font-weight: 800;
        font-size: 13px;
      }
    }
  }
}
</style>
