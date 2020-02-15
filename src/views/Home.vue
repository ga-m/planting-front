<template>
  <div class="home-content">
    <user-info></user-info>
    <yearly-goal></yearly-goal>
  </div>
</template>

<script>
import UserInfo from '../components/UserInfo.vue';
import YearlyGoal from '../components/YearlyGoal.vue';
export default {
    components: {
        YearlyGoal,
        UserInfo,
    },

}
</script>

<style>
.home-content {
  width: 100%;
  position: relative;
}
</style>