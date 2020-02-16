/**
 * goal-graph.js
 * goal graph를 그리는데 필요한 Javascript 함수들을 정의함
 **/ 

const createSVGElement = (element) => {
    const el = document.createElementNS('http://www.w3.org/2000/svg', element);

    // 필요한 Attr, Element들 정의

    return el;
};


const plantsColors = ['#e8e8e8', '#a2d281', '#66af5b', '#27842c', '#265f18', '#f46e6e'];

export {
    plantsColors, createSVGElement
};