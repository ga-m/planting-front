<template>
  <section class="join">
    <section class="join-content">
      <main-logo></main-logo>
    </section>
    <div class="join-footer">
      <common-footer></common-footer>
    </div>
  </section>
</template>

<script>
import CommonFooter from '../components/CommonFooter';
import MainLogo from '../components/MainLogo';
export default {
  components: {
    CommonFooter,
    MainLogo
  },
}
</script>

<style scoped>
.join {
  display: flex;
  justify-content: center;
}
.join-content {
  max-width: 370px;
  max-height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
}
.join-footer {
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>