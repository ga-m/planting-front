<template>
  <section class="login">
    <section class="login-content">
      <form class="login-form">
        <main-logo></main-logo>
        <el-input class="login-input" v-model="email"></el-input>
        <el-input
          type="password"
          v-model="password"
          autocomplete="off"
          class="login-input"
        ></el-input>
        <button class="login-button">Log in</button>
        <div class="login-info">
          <router-link to="/join" style="color: #7f7f7f;">Sign Up</router-link>
          •
          <router-link to="/find" style="color: #7f7f7f;"
            >Forgot Password ?</router-link
          >
        </div>
      </form>
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
  },
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    login() {}
  }
};
</script>

<style scoped>
.login {
  display: flex;
  justify-content: center;
  min-height: 100vh;
  flex-direction: column;
}
.login-content {
  max-width: 370px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  flex: 1;
}
.login-form {
  width: 100%;
  margin-bottom: 75px;
}
.login-input {
  margin-top: 10px;
}
.login-button {
  margin-top: 10px;
  width: 100%;
  height: 60px;
  background-color: #5a9c50;

  font-family: HiraginoSansCNS-W6;
  font-size: 21px;
  text-align: center;
  color: #ffffff;
}
.login-info {
  margin-top: 10px;
  font-family: AppleSDGothicNeo;
  font-size: 21px;
  text-align: center;
  color: #7f7f7f;
}
</style>
