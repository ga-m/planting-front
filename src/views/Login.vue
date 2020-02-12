<template>
  <section class="login">
    <section class="login-content">
      <form class="login-form">
        <router-link to="/"><img class="main-logo" src="../icons/images/main_logo.png" /></router-link>
        <el-input class="login-input" v-model="email"></el-input>
        <el-input
          type="password"
          v-model="password"
          autocomplete="off"
          class="login-input"
        ></el-input>
        <button class="login-button">Log in</button>
        <div class="login-info">
          <a>Sign Up</a>
          •
          <a>Forgot Password ?</a>
        </div>
      </form>
    </section>
    <div class="login-footer">
      <common-footer></common-footer>
    </div>
  </section>
</template>

<script>
import CommonFooter from '../components/CommonFooter';
export default {
  components: {
    CommonFooter
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
.main-logo {
  width: 370px;
  height: 200px;
}
.login {
  display: flex;
  justify-content: center;
}
.login-content {
  max-width: 370px;
  max-height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
}
.login-footer {
  position: absolute;
  bottom: 0;
  width: 100%;
}
.login-form {
  width: 100%;
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
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
}
.login-info {
  margin-top: 10px;
  font-family: AppleSDGothicNeo;
  font-size: 21px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #7f7f7f;
}
</style>
