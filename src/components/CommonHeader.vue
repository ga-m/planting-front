<template>
  <header class="header">
    <div class="content header-items-wrapper">
      <div class="header-item header__logo">
        <router-link to="/">
          <img
            id="logo-icon"
            class="custom-icon"
            src="../icons/images/icon_logo_watering_can.png"
            alt="home"
          />
          <span class="title">Planting</span>
        </router-link>
      </div>
      <div class="header-item header__search-bar">
        <search class="header__search-bar__input"></search>
        <!-- <el-input class="header__search-bar__input" placeholder="Type something" v-model="searchValue">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input> -->
      </div>

      <div class="header-item header__menus">
        <router-link to="/home/main" class="header__menus__item">
          <img class="custom-icon" :src="homeIcon" alt="home" />
        </router-link>
        <router-link to="/home/follow" class="header__menus__item">
          <img class="custom-icon" :src="followIcon" alt="follow" />
        </router-link>
        <router-link to="/home/setting" class="header__menus__item">
          <img class="custom-icon" :src="settingIcon" alt="settings" />
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
import Search from './Search'
export default {
  components: {
    Search
  },
  data() {
    return {
      searchValue: '',
    };
  },
  computed: {
    homeIcon: function() {
      if (this.$route.path.startsWith('/home/main')) {
        return require('../icons/images/icon_new_home_fill_green.png');
      } else {
        return require('../icons/images/icon_new_home_fill_white.png');
      }
    },
    followIcon: function() {
      if (this.$route.path.startsWith('/home/follow')) {
        return require('../icons/images/icon_heart_fill_green.png');
      } else {
        return require('../icons/images/icon_heart_fill_white.png');
      }
    },
    settingIcon: function() {
      if (this.$route.path.startsWith('/home/setting')) {
        return require('../icons/images/icon_settings_fill_green.png');
      } else {
        return require('../icons/images/icon_settings_fill_white.png');
      }
    }
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
  z-index: 999;
}
.header-items-wrapper {
  max-width: 1160px;
  width: 100%;
  height: 100%;
  align-items: center;
  display: flex;
  margin: 0 auto;
  padding: 0px;
}
.header-item {
  display: flex;
}
.header__logo {
  flex: 1;
  min-width: 70px;
}
#logo-icon {
  width: 43px;
}
.header__search-bar {
  flex: 0 1 auto;
}
.header__menus {
  flex: 1 0 0%;
  justify-content: flex-end;
}
.header__menus__item {
  display: flex;
  flex-direction: column;
  padding-left: 15px;
}
.title {
  font-family: HiraginoSansCNS-W6;
  font-size: 18px;
  color: #7f7f7f;
  padding-left: 5px;
}
.custom-icon {
  width: 30px;
  /* opacity: 0.7; */
  /* border-radius: 1px; */
}
.el-input {
  width: 300px;
}
.header__search-bar__input {
  width: 266px;
  /* height: 39px;
    border-radius: 19.5px;
  border: solid 1px #cfcfcf;
  background-color: #ffffff; */
}
</style>
