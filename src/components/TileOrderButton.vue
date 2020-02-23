<template>
  <div class="button button-dark-green">
    <span>순서변경</span>
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
.button-dark-green {
  background-color: #265f18;
}
</style>
