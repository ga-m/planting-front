<template>
  <section>
    <el-container>
      <el-aside width="200px">
        <el-menu>
          <router-link to="/home/setting/member"
            ><el-menu-item index="1">회원정보</el-menu-item></router-link
          >
          <router-link to="/home/setting/term"
            ><el-menu-item index="2">이용약관</el-menu-item></router-link
          >
          <router-link to="/home/setting/credit"
            ><el-menu-item index="3">만든사람</el-menu-item></router-link
          >
          <router-link to="/home/setting/issue"
            ><el-menu-item index="4">의견보내기</el-menu-item></router-link
          >
          <router-link to="/home/setting/guide"
            ><el-menu-item index="5">가이드</el-menu-item></router-link
          >
          <router-link to="/login"
            ><el-menu-item index="6">로그아웃</el-menu-item></router-link
          >
        </el-menu>
      </el-aside>
      <el-container>
        <section class="setting-content">
          <router-view></router-view>
        </section>
      </el-container>
    </el-container>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.el-container {
  height: calc(100vh - 150px);
  border: 1px solid #eee;
}

.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  background-color: rgb(238, 241, 246);
  color: #333;
}

.el-menu-item {
  text-align: center;
}

.setting-content {
  overflow: auto;
}
</style>
