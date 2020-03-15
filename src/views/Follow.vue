<template>
  <div class="follow-content">
    <follow-top></follow-top>
    <ul>
      <li v-for="goal in goals">
        <yearly-goal :goalInfo="goal" :viewName="viewName"></yearly-goal>
      </li>
    </ul>
  </div>
</template>

<script>
import FollowTop from '../components/FollowTop.vue';
import testGoalData from '../data/goal.json'; //날짜, 단계 정보 테스트 데이터
import YearlyGoal from '../components/YearlyGoal.vue';

export default {
  components: {
    FollowTop,
    YearlyGoal,
  },
  created() {
    this.goals = this.getFollowingGoals(); 
  },
  data() {
    return {
      viewName: 'follow',
      goals: [],
    };
  },
  methods: {
    getFollowingGoals() {
      //임시데이터  
      return [
        {
          userName: 'yeoseon',
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
          userName: '뚜',
          title: '하이하이',
          followerCnt: 1234,
          id: 'goal3',
          testGoalData
        },
        {
          userName: 'Jay',
          title: '제이제이',
          followerCnt: 5,
          id: 'goal4',
          testGoalData
        }
      ];
    }
  }
}
</script>

<style>
.follow-content {
  width: 100%;
  position: relative;
}
</style>