<template>
  <section id="root">
    <common-header></common-header>
    <main role="main">
      <section class="content">
        <router-view />
      </section>
    </main>
    <common-footer></common-footer>
  </section>
</template>

<script>
import CommonHeader from '../components/CommonHeader';
import CommonFooter from '../components/CommonFooter';

export default {
  name: 'Layout',
  components: {
    CommonHeader,
    CommonFooter
  }
};
</script>

<style scoped>
.content {
  /* TODO: Header, footer와 중복되는 style */
  max-width: 1160px;
  width: 100%;
  height: 100%;
  display: flex;
  margin: 0 auto;
}
</style>
