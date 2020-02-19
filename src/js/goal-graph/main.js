/**
 * main.js
 * 구현한 각 요소 메소드를 이용해서 최종 클래스 도출
 * 
 * var graph = new GoalGraph{(
 * 
 * )}
 **/ 

// import { createGElement } from './graph.js';

// 상수들
// const plantsColors = ['#e8e8e8', '#a2d281', '#66af5b', '#27842c', '#265f18', '#f46e6e'];
// const rectWidthHeight = 17; // 타일 크기

class GoalGraph {

    draw() {
        console.log("짠");

        // 1. svg 태그 생성

        // 2. <g transform="translate(67, 36)"> 생성  

        // 3. <g></g> 열 생성 
        // 오늘 날짜로부터 딱 1년 (윤년 등을 고려해 365로 계산하지 않음)이 되는 만큼의 (일 수 / 7) 만큼의 열을 생성한다. 

        //3-1. <rect></rect> 각 잔디 생성  
        //date, 단계 정보, x, y를 입력받아 width, heigth 만큼의 rect를 7개씩 생성한다. 
        
        
        // 고려 사항  
        // 복수의 Graph를 그릴 수 있도록 인자를 받아야 한다.  
        // ...
    }
 }

export default GoalGraph;