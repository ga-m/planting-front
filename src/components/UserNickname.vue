<template>
  <div class="user-info__nickname">
    <div class="nickname-wrapper">
      <img class="user-image" src="../icons/images/icon_heart_fill_pink.png" />
      <div class="user-nickname">
        <a @click="dialogTableVisible = true">{{ nickName }}</a>
      </div>
      <el-dialog :visible.sync="dialogTableVisible">
        <template v-slot:title>
          <div class="nickname-wrapper">
            <img
              class="user-image"
              src="../icons/images/icon_heart_fill_pink.png"
            />
            <div class="user-nickname">
              <a @click="dialogTableVisible = true">{{ nickName }}</a>
            </div>
          </div>
        </template>
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
      // nickname: '',
      dialogTableVisible: false
    };
  },
  props: ['nickName'],
  created() {
    // this.nickname = 'deepweller';
  }
};
</script>

<style scoped>
.user-info__nickname {
  /* flex: 1; */
  display: flex;
  padding-right: 10px;
}
.nickname-wrapper {
  display: flex;
  align-items: center;
}
.user-image {
  width: 45px;
}
.user-nickname {
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
