/**
 * goal-graph.js
 * goal graph를 그리는데 필요한 Javascript 함수들을 정의함
 **/ 

// 상수들
const plantsColors = ['#e8e8e8', '#a2d281', '#66af5b', '#27842c', '#265f18', '#f46e6e'];
const rectWidthHeight = 17;  

//최종 Function  
const createGoalGraph = () => {
    
    // 1. svg 태그 생성

    // 2. <g transform="translate(67, 36)"> 생성  

    // 3. <g></g> 열 생성 
    // 오늘 날짜로부터 딱 1년 (윤년 등을 고려해 365로 계산하지 않음)이 되는 만큼의 (일 수 / 7) 만큼의 열을 생성한다. 

    //3-1. <rect></rect> 각 잔디 생성  
    //date, 단계 정보, x, y를 입력받아 width, heigth 만큼의 rect를 7개씩 생성한다.  
    
}
// SVG Element 
const createSVGElement = (element) => {
    const el = document.createElementNS('http://www.w3.org/2000/svg', element);

    // 필요한 Attr, Element들 정의

    return el;
};

// <g></g>
const createGElement = (x, y) => {
    
    //x, y만큼 translate 한 <g></g> 태그를 생성한다.  
}

// <rect></rect>


export {
    plantsColors, createGoalGraph, createSVGElement, createGElement
};