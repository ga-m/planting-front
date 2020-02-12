<template>
  <section class="find">
    <section class="find-content">
      <main-logo></main-logo>
    </section>
    <div class="find-footer">
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
.find {
  display: flex;
  justify-content: center;
}
.find-content {
  max-width: 370px;
  max-height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
}
.find-footer {
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>