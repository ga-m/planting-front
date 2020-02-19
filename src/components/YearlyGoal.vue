<template>
    <div class="goals-area">
        <div class="goal">
            <div class="goal__header">
                <div class="goal-header__title">
                    <img class="goal-title__icon" src="../icons/images/icon_bud.png">
                    <div class="cm-left-padding cm-goal-header__text goal-title__text">
                        <span class="goal-title__text__name">목표가 너무너무 길어지면 ... 처리를 합니다 이 경우 Mouse up을 할 때 tooltip으로 Full name을 보여주면 좋겠네요.</span>
                    </div>
                    <div class="cm-left-padding cm-goal-header__text">
                        <span class="goal-title__text__completed">!</span>
                    </div>
                </div>
                <div class="goal-header__right-items">
                    <div class="goal-header__right-items__like">
                        <img class="cm-left-padding goal-like__icon" src="../icons/images/icon_heart_fill_pink.png">
                        <span class="cm-left-padding cm-goal-header__text goal-like__number">43434343</span> <!-- TODO: 길어지면 10K 등으로 표현하기. 4자리 까지만 -->
                    </div>
                    <div class="cm-left-padding goal-header__right-items__drop-down">
                        <el-dropdown trigger="click">
                            <img class="el-dropdown-link goal-like__icon" src="../icons/images/icon_drop_down_btn.png">
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>편집하기</el-dropdown-item>
                                <el-dropdown-item>공유하기</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                </div>
            </div>
            <div class="goal__graph">
                <div class="js-goal-graph">
                    <!-- <img src="../js/goal-graph/goal-calendar.svg"> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>

// TODO: Test 실행 코드 
import GoalGraph from '../js/goal-graph/main.js';

var graph = new GoalGraph();
graph.draw();

export default {

}
</script>

<style>
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
    width: 100%;
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
.js-goal-graph {
    width: 100%;
    height: 100%;
}

/**
* Element-ui Customizing
* TODO: 디자인 일관성을 위해 공통으로 관리할 필요성
*/
.el-popper {
    margin: 0px!important;
    z-index: 998!important;
}
.popper__arrow {
    display: none!important;
}
</style>