<template>
  <div id="app">
    <common-header></common-header>
    <router-view></router-view>
    <common-footer></common-footer>
  </div>
</template>

<script>
import router from './routes/index';
import CommonHeader from './components/CommonHeader';
import CommonFooter from './components/CommonFooter';

export default {
  name: 'app',
  components: {
    CommonHeader, CommonFooter
  },
  router
}
</script>

<style>
#app {
  width: 1920px;
  height: 1080px;
}
</style>
