<template>
  <router-view></router-view>
</template>

<script>
import router from './routes/index';
export default {
  name: 'app',
  router
};
</script>

<style>
body,
html {
  margin: 0;
  padding: 0;
  height: 100%;
  /* font-size: 10px; */
}
#root {
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
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
  flex: 1;
  padding-top: 75px; /* TODO: scss로 푼다면 header-height로 */
  /* background-color: #eee; */
}

/**
* Element-ui Customizing
*/
.el-popper {
    margin: 0px!important;
    z-index: 998!important;
}
.popper__arrow {
    display: none!important;
}

/**
 * Common Style
 */
ul {
  list-style: none;
  padding-inline-start: 0px;
}
</style>
