<template>
  <div class="button button-green">
    <span>추가하기</span>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.button {
  /* TODO: Common Component */
  width: 90px;
  height: 45px;
  margin-left: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
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
</style>
