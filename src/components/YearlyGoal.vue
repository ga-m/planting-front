<template>
    <div class="goals-area">
        <div class="goal" v-bind:id="goalInfo.id">
            <div class="goal__header">
                <template v-if="viewName == 'follow'">
                <user-nickname :nickName="goalInfo.userName"></user-nickname>
                </template>
                <div class="goal-header__title">
                    <img class="goal-title__icon" src="../icons/images/icon_bud.png">
                    <div class="cm-left-padding cm-goal-header__text goal-title__text">
                        <span class="goal-title__text__name">{{ goalInfo.title }}</span>
                    </div>
                    <div class="cm-left-padding cm-goal-header__text">
                        <span class="goal-title__text__completed">!</span>
                    </div>
                </div>
                <div class="goal-header__right-items">
                    <div class="goal-header__right-items__like">
                        <img class="cm-left-padding goal-like__icon" src="../icons/images/icon_heart_fill_pink.png">
                        <span class="cm-left-padding cm-goal-header__text goal-like__number">{{ goalInfo.followerCnt }}</span> <!-- TODO: 길어지면 10K 등으로 표현하기. 4자리 까지만 -->
                    </div>
                    <template v-if="viewName == 'home'">
                    <div class="cm-left-padding goal-header__right-items__drop-down">
                        <el-dropdown trigger="click">
                            <img class="el-dropdown-link goal-like__icon" src="../icons/images/icon_drop_down_btn.png">
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>편집하기</el-dropdown-item>
                                <el-dropdown-item>공유하기</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                    </template>
                    <template v-else-if="viewName == 'follow'">
                    <div class="cm-left-padding goal-header__right-items__button">
                        <img class="goal-like__icon" src="../icons/images/icon_drop_down_btn.png"> <!-- TODO: 공유 모양 아이콘으로 교체 필요 -->
                    </div>
                    </template>
                </div>
            </div>
            <div class="goal__graph">
                <goal-graph :calendarData="goalInfo.testGoalData" :goalId="goalInfo.id"></goal-graph>    
            </div>
        </div>
    </div>
</template>

<script>
import GoalGraph from './GoalGraph';
import UserNickname from './UserNickname';

export default {
    components: {GoalGraph, UserNickname},
    props: ['goalInfo', 'viewName'],
    data() {
        return {
            dialogTableVisible: false
        };
    }
}
</script>

<style scoped>
.goal {
    padding-bottom: 45px;
}
.cm-left-padding {
    /* Common - Goal title의 요소 사이 간격 */
    padding-left: 15px;
}
.goal__header {
    display: flex;
    height: 45px;
    padding-bottom: 10px;
}
.goal__header img {
    height: 45px;
}
.cm-goal-header__text {
    /* Common - Goal Title의 text 요소의 높이 */
    margin-top: 5px;
}
.goal-header__title {
    width: 50%;
    flex: 1;
    display: flex;
    align-items: center;
}
.goal-title__text {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.goal-title__text__name { 
    font-family: AppleSDGothicNeo;
    font-size: 24px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #192418;
}
.goal-title__text__completed {
    color: red;
    font-weight: 900;
    font-size: 24px;
}
.goal-header__right-items {
    flex: 1 0 0%;
    justify-content: flex-end;
    display: flex;
}
.goal-header__right-items__like {
    display: flex;
    align-items: center;
    padding-left: 10px;
}
.goal-like__icon {
    cursor: pointer;
}
.goal-like__number {
    font-family: HiraginoSansCNS-W3;
    font-size: 21px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #192418;
}
.goal__graph {
    height: 205px;
    border: solid 1px #cfcfcf;
    background-color: #ffffff;
}
</style>