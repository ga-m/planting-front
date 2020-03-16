<template>
  <div class="home-content">
    <home-top></home-top>
    <ul>
      <li v-for="goal in goals">
        <yearly-goal :goalInfo="goal" :viewName="viewname"></yearly-goal>
      </li>
    </ul>
  </div>
</template>

<script>
import HomeTop from '../components/HomeTop.vue';
import YearlyGoal from '../components/YearlyGoal.vue';
import testGoalData from '../data/goal.json'; //날짜, 단계 정보 테스트 데이터
// import testLoginData from '../data/login-info.json'; // 로그인 사용자 정보 

export default {
  components: {
    YearlyGoal,
    HomeTop
  },
  created() {
    this.goals = this.getGoals();
  },
  data() {
    return {
      viewname: 'home',
      goals: [],
    };
  },
  methods: {
    getGoals() {
      // 임시데이터
      return [
        {
          userName: 'deepweller',
          title:
            '목표가 너무너무 길어지면 ... 처리를 합니다 이 경우 Mouse up을 할 때 tooltip으로 Full name을 보여주면 좋겠네요.',
          followerCnt: 43434343,
          id: 'goal1',
          testGoalData
        },
        {
          userName: 'deepweller',
          title: '목표목표',
          followerCnt: 100,
          id: 'goal2',
          testGoalData
        },
        {
          userName: 'deepweller',
          title: '하이하이',
          followerCnt: 1234,
          id: 'goal3',
          testGoalData
        },
        {
          userName: 'deepweller',
          title: '제이제이',
          followerCnt: 5,
          id: 'goal4',
          testGoalData
        }
      ];
    }
  }
};
</script>

<style scoped>
.home-content {
  width: 100%;
  position: relative;
}


</style>
