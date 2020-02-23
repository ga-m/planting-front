<template>
  <div class="home-info-area">
    <user-nickname></user-nickname>
    <div class="home-info__goal-related">
      <tile-add-button></tile-add-button>
      <tile-order-button></tile-order-button>
    </div>
  </div>
</template>

<script>
import UserNickname from './UserNickname';
import TileAddButton from '../components/TileAddButton.vue';
import TileOrderButton from '../components/TileOrderButton.vue';

export default {
  components: { UserNickname, TileAddButton, TileOrderButton }
};
</script>

<style scoped>
.home-info-area {
  margin-top: 45px;
  margin-bottom: 45px;
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
}
.home-info__goal-related {
  justify-content: flex-end;
  flex: 1 0 0%;
  display: flex;
}
</style>
