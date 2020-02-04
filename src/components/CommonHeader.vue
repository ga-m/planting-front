<template>
  <div class="header">
    <div>
      <router-link to="/">
        <img
          class="custom-icon"
          src="../icons/images/icon_watering_can.png"
          alt="home"
        />
        <span class="title">Planting</span>
      </router-link>
    </div>
    <div class="search-bar">
      <el-input placeholder="Type something" v-model="searchValue">
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>
    </div>

    <router-link to="/home">
      <img
        class="custom-icon"
        src="../icons/images/icon_new_home_fill_green.png"
        alt="home"
      />
    </router-link>
    <router-link to="/follow">
      <img
        class="custom-icon"
        src="../icons/images/icon_heart_fill_green.png"
        alt="follow"
      />
    </router-link>
    <router-link to="/setting">
      <img
        class="custom-icon"
        src="../icons/images/icon_settings_fill_green.png"
        alt="settings"
      />
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchValue: ''
    };
  }
};
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
  width: 30px;
}
.router-link-exact-active > .custom-icon {
  
}
.el-input {
  width: 300px;
}
</style>
