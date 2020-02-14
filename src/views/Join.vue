<template>
  <section class="join">
    <section class="join-content">
      <main-logo></main-logo>
    </section>
    <common-footer></common-footer>
  </section>
</template>

<script>
import CommonFooter from '../components/CommonFooter';
import MainLogo from '../components/MainLogo';
export default {
  components: {
    CommonFooter,
    MainLogo
  }
};
</script>

<style scoped>
.join {
  display: flex;
  min-height: 100vh;
  justify-content: center;
  flex-direction: column;
}
.join-content {
  max-width: 370px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  flex: 1;
  margin-bottom: 75px;
}
</style>
