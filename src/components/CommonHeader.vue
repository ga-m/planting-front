<template>
  <header class="header">
    <div class="content header-items-wrapper">
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

      <div class="header-right-items">
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
    </div>
  </header>
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
header {
  width: 100%;
  height: 75px;
  box-shadow: 0 0 10px 0 rgba(148, 148, 148, 0.5);
  background-color: #ffffff;
  display: flex;
  position: fixed;
}
.header-items-wrapper {
  max-width: 1060px;
  width: 100%;
  height: 100%;
  align-items: center;
  display: flex;
  margin: 0 auto;
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
.header-right-items {
  /* TODO: 클래스 명칭 고민 및 작성 필요 */

}
.el-input {
  width: 300px;
}
</style>
