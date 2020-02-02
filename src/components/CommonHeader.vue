<template>
  <div class="header">
    <i class="el-icon-heavy-rain main-icon"></i>
    <span class="title">Planting</span>
    <div class="search-bar">
      <el-input
        placeholder="Please input"
        class="input"
      >
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </div>
    <router-link to="/home">
      <i class="el-icon-s-home custom-icon"></i>
    </router-link>
    <router-link to="/follow">
      <i class="el-icon-star-on custom-icon"></i>
    </router-link>
    <router-link to="/setting">
      <i class="el-icon-s-tools custom-icon"></i>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  width: 1920px;
  height: 75px;
  box-shadow: 0 0 10px 0 rgba(148, 148, 148, 0.5);
  background-color: #ffffff;
  display: flex;
}
.main-icon {
  color: #979797;
  font-size: 30px;
}
.title {
  width: 79px;
  height: 18px;
  font-size: 18px;
  color: #7f7f7f;
}
.custom-icon {
  color: #cfcfcf;
  font-size: 30px;
}
.router-link-exact-active > .custom-icon {
  color: #5a9c50;
}
.el-input {
  width: 300px;
}
</style>
