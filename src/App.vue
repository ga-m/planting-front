<template>
  <section id="root">
    <common-header></common-header>
    <main role="main">
      <section class="content">
          <router-view></router-view>
      </section>
    </main>
    <common-footer></common-footer>
  </section>
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
#root, body, html {
  margin: 0;
  padding: 0;
  /* font-size: 10px; */
}
a {
  text-decoration: none;
}
section {
  width: 100%;
  height: 100%;
}
main {
  padding-top: 75px; /* TODO: scss로 푼다면 header-height로 */
  /* background-color: #eee; */
}
.content { /* TODO: Header, footer와 중복되는 style */
  max-width: 1060px;
  width: 100%;
  height: 100%;
  align-items: center;
  display: flex;
  margin: 0 auto;
}

</style>
