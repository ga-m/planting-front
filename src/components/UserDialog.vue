<template>
  <div class="user-container">
    <div class="user-top">
      <div class="user-info">
        <div class="user-info__wrapper">
          <img class="user-info__icon" src="../icons/images/icon_bud.png" />
          <span class="title-text">타일수 : </span><span class="content-text"> {{ tileCnt }}</span>
        </div>
        <div class="user-info__wrapper">
          <img class="user-info__icon" src="../icons/images/icon_bud.png" />
          <span class="title-text">연속달성일수 : </span><span class="content-text">{{ nonStop }}</span>
        </div>
      </div>

      <div class="user-info">
        <div class="user-info__wrapper">
          <img class="user-info__icon" src="../icons/images/icon_bud.png" />
          <span class="title-text">랭킹 : </span><span class="content-text">{{ lank }}</span>
        </div>
        <div class="user-info__wrapper">
          <img class="user-info__icon" src="../icons/images/icon_bud.png" />
          <span class="title-text">등급 : </span><span class="content-text">{{ tier }}</span>
        </div>
      </div>
    </div>
    
    <div class="user-badge">
      <div class="user-info__wrapper">
          <img class="user-info__icon" src="../icons/images/icon_bud.png" />
          <span class="title-text">뱃지</span>
        </div>
        <img class="user-info__icon" src="../icons/images/icon_heart_fill_white.png" />
        <img class="user-info__icon" src="../icons/images/icon_heart_fill_white.png" />
        <img class="user-info__icon" src="../icons/images/icon_heart_fill_white.png" />
        <img class="user-info__icon" src="../icons/images/icon_heart_fill_white.png" />
        <img class="user-info__icon" src="../icons/images/icon_heart_fill_white.png" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tileCnt: 5,
      nonStop: 100,
      tier: 'Bronze',
      lank: '#1'
    };
  }
};
</script>

<style scoped>
.user-container {
  display: flex;
  flex-direction: column;
}

.user-top {
  display: flex;
  flex-direction: row;
}

.user-info {
  width: 50%;
  margin-right: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  border-radius: 3px;
  border: solid 1px #cfcfcf;
}
.user-info__wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 5px;
}
.user-info__icon {
  width: 49px;
  height: 45px;
  margin-right: 10px;
}

.user-badge {
  margin-top: 20px;
  margin-right: 10px;
  padding: 20px;
  border-radius: 3px;
  border: solid 1px #cfcfcf;
}

.title-text {
  font-family: AppleSDGothicNeo;
  font-size: 24px;
  font-weight: bold;
  color: #192418;
  margin-right: 10px;
}
.content-text {
  font-family: AppleSDGothicNeo;
  font-size: 24px;
  color: #192418;
}
</style>
