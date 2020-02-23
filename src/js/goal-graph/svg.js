/**
 * graph.js
 * 메인 Graph를 구현할 때 사용할 SVG Element를 구현하는 함수들 모음
 **/

// Add Attrbiture in svg tag
const setAttrs = (element, attributes) => {
    if (typeof attributes === 'object') {
        Object.keys(attributes).forEach((key) => {
            element.setAttribute(key, attributes[key]);
        });
    }
};

// Remove Attribute in svg tag
const removeAttrs = (element, ...attributes) => {
    if(attributes === 'object') {
        attributes.forEach((attribute) => {
            element.removeAttribute(attribute);
        });
    }
};

//const graph = createRectElement('rect', svg, {
// x: 10;
// y: 20;
// width: 17;
// height: 17;
// })
const createSVGElement = (element, container, attributes) => {
    const svgns = "http://www.w3.org/2000/svg";

    const el = document.createElementNS(svgns, element);

    if (typeof attributes === 'object') {
        setAttrs(el, attributes);
    }

    if (typeof container !== 'undefined') {
        container.appendChild(el);
    }

    return el;
};

const setTransform = (elementSelector, x, y)  => {

    var element;

    if (typeof elementSelector === 'string') {
        element = document.querySelector(elementSelector);
        if (!element) {
            throw new Error(`Element cannot be found (selector: ${elementSelector}).`);
        }
    } else if (element instanceof HTMLElement) {
        element = elementSelector;
    } else {
        throw new Error('Element must either be a selector string or an HTMLElement.');
    } 

    setAttrs(element, {
        'transform': `traslate(${x},${y})`,
    })
};

export {
    createSVGElement, setAttrs, removeAttrs, setTransform
};