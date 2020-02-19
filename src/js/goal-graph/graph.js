/**
 * graph.js
 * 메인 Graph를 구현할 수 있는 메소드 모음 (rect, g...)
 **/

// SVG Element 
const createSVGElement = (element, container, attributes) => {
    const el = document.createElementNS('http://www.w3.org/2000/svg', element);

    //프로퍼티 처리 필요
    return el;
};

// <g></g>
const createGElement = (x, y) => {

    //x, y만큼 translate 한 <g></g> 태그를 생성한다.  
};

// <rect></rect>
const createRectElement = () => {

};

export {
    createSVGElement, createGElement, createRectElement
};