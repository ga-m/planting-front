<template>
    <div class="user-info-area">
        <div class="user-info__nickname">
            <router-link class="nickname-wrapper" to="/home/setting/member">
                <img id="user-image" src="../icons/images/icon_heart_fill_pink.png">
                <div id="user-nickname">deepweller</div>
            </router-link>
        </div>
        <div class="user-info__goal-related">
            <div class="button button-green">
                <span>추가하기</span>
            </div>
            <div class="button button-dark-green">
                <span>순서변경</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
.user-info-area {
    margin-top: 30px;
    margin-bottom: 30px;
    width: 100%;
    height: 45px;
    display: flex;
    align-items: center;
}
.user-info__nickname {
    flex: 1;
    display: flex;
}
.nickname-wrapper {
    display: flex;
    align-items: center;
}
#user-image {
    width: 45px;
}
#user-nickname {
  /* width: 123px;
  height: 21px; */
  font-family: HiraginoSansCNS-W6;
  /* font-size: 21px; */ 
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #192418;
  padding-left: 7px;
}
.user-info__goal-related {
    justify-content: flex-end;
    flex: 1 0 0%;
    display: flex;
}
.button {
    /* TODO: Common Component */
  width: 90px;
  height: 45px;
  margin-left: 20px;
  display: flex;
  align-items: center;
}
.button > span {
  font-family: AppleSDGothicNeo;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  margin: 0 auto;
}
.button-green { 
    /* sass로 관리 가능(lighter-light-green-dark-darker) */
    background-color: #5a9c50;
}
.button-dark-green {
    background-color: #265f18;
}
</style>