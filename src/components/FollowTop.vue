<template>
    <div class="follow-info-area">
        <user-nickname></user-nickname> 
        <span id="follow-info__added">'s following</span>
        <div class="follow-info__goal-related">
            <tile-order-button></tile-order-button>
        </div>
    </div>    
</template>

<script>
import UserNickname from './UserNickname';
import TileOrderButton from '../components/TileOrderButton.vue';

export default {
    components: { 
        UserNickname,
        TileOrderButton,
    },
};
</script>


<style scoped>
.follow-info-area {
  margin-top: 45px;
  margin-bottom: 45px;
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
}
#follow-info__added {
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
  padding-left: 5px;
}
.follow-info__goal-related {
  justify-content: flex-end;
  flex: 1 0 0%;
  display: flex;
}
</style>