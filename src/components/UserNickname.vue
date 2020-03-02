<template>
  <div class="user-info__nickname">
    <div class="nickname-wrapper">
      <img id="user-image" src="../icons/images/icon_heart_fill_pink.png" />
      <div id="user-nickname">
        <a @click="dialogTableVisible = true">{{ nickname }}</a>
      </div>
      <el-dialog :title="nickname" :visible.sync="dialogTableVisible">
      <user-dialog></user-dialog>
    </el-dialog>
    </div>
  </div>
</template>

<script>
import UserDialog from './UserDialog';
export default {
  components: { UserDialog },
  data() {
    return {
      nickname: '',
      dialogTableVisible: false
    };
  },
  created() {
    this.nickname = 'deepweller';
  }
};
</script>

<style scoped>
.user-info__nickname {
  /* flex: 1; */
  display: flex;
}
.nickname-wrapper {
  display: flex;
  align-items: center;
}
#user-image {
  width: 45px;
}
#user-nickname {
  /* width: 123px;
    height: 21px; */
  font-family: HiraginoSansCNS-W6;
  font-size: 21px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #192418;
  padding-left: 10px;
}
</style>
