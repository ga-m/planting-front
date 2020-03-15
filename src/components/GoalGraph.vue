<template>
  <div class="goal-graph__container" :class="goalId">
  </div>
</template>

<script>
import { createSVGElement, setAttrs, removeAttrs, setTransform } from '../js/goal-graph/svg.js';

export default {
  props: ['calendarData', 'goalId'],
  data() {
    return {
      containerSelector: '', // svg를 감싸줄 Container Selector
      startX: 0, // 가장 첫번째 타일이 위치할 시작점 X 좌표
      startY: 0, // 가장 첫번째 타일이 위치할 시작점 Y 좌표
      tileSize: 0, // 타일 정사각형 크기 (px)
      tileInterval: 0, // 타일 사이의 간격 (px)
      plantsColors: [
        '#e8e8e8',
        '#a2d281',
        '#66af5b',
        '#27842c',
        '#265f18',
        '#f46e6e'
      ], // 차례대로 level 0, 1, 2, 3, 4, 5
      data: {}, // Goal 1개의 좌표 정보

      // 함수 내에서 정의된 변수
      container: '', // containerSelector를 통해 얻어진 Element
      svg: '', // svg Element
      graphWrapper: '' // svg 내에서 365개의 타일을 감싸주는 <g></g> Element
    };
  },
  mounted() {
    const dataExample = this.calendarData;
    this.containerSelector = `.${this.goalId}`;
    // startX: 67,
    // startY: 36,
    this.startX = 30;
    this.startY = 30;
    this.tileSize = 17;
    this.tileInterval = 3;
    this.data = dataExample;

    this.draw();
  },
  methods: {
    //메인 Container get
    getContainer() {
      if (this.containerSelector == undefined) {
        throw new Error('Container is missing');
      }

      if (typeof this.containerSelector === 'string') {
        this.container = document.querySelector(this.containerSelector);
        if (!this.container) {
          throw new Error(
            `Container cannot be found (selector: ${this.containerSelector}).`
          );
        }
      } else if (this.container instanceof HTMLElement) {
        this.container = this.containerSelector;
      } else {
        throw new Error(
          'Container must either be a selector string or an HTMLElement.'
        );
      }

      this.container.classList.add('svg-graph-js');
    },

    //svg 태그 만들기
    makeSVG() {
      const svg = createSVGElement('svg', this.container, {
        width: 1300,
        height: 200
      });

      this.svg = svg;
    },

    // 365개의 타일을 감싸주는 <g></g>
    makeGraphWrapper(x, y) {
      const g = createSVGElement('g', this.svg, {
        transform: `translate(${x},${y})`
      });

      this.graphWrapper = g;
    },

    // 타일 1열 <g></g>
    makeTileRow() {
      //data.length(= day) / 7 만큼 Tile Row를 생성한다.
      //Tile Row 내에는 7만큼의 Tile을 생성한다.
      //이 때, 마지막 주는 7일이 안될 수 있으므로 undefined 체크를 추가한다.

      const rowCount =
        this.data.length % 7 === 0
          ? this.data.length / 7
          : this.data.length / 7 + 1;

      var x = 0; // GRow 좌표
      var y = 0;
      for (let i = 0; i < rowCount; i++) {
        var g = createSVGElement('g', this.graphWrapper, {
          transform: `translate(${x},${y})`
        });

        for (let j = 0; j < 7; j++) {
          if (this.data[i * 7 + j + 1] !== undefined) {
            //id: i*7 + (j+1)
            //todo: x 조정
            var tileX = 10;
            var tileY = (this.tileSize + this.tileInterval) * j;
            this.makeTile(g, tileX, tileY, this.data[i * 7 + j + 1]);
          }
        }

        x = x + (this.tileInterval + this.tileSize);
      }
    },

    // 타일 하나
    makeTile(container, x, y, tileInfo) {

      // const labelHolder = this.getLabel(container, x, y, tileInfo); // get el-tooltip

      let color = this.plantsColors[tileInfo.level];
      const rect = createSVGElement('rect', container, {
        class: 'graph-tile',
        x: x,
        y: y,
        width: this.tileSize,
        height: this.tileSize,
        fill: color,
        'data-level': tileInfo.level,
        'data-date': tileInfo.date,
        'data-goalid': this.goalId,
      });

      this.addClickListener(rect); // Add Click Event Listener 
    },

    // Mouse-up할 때 날짜 및 Level 정보 보여줌 
    // 동작 X
    getLabel(container, x, y, tileInfo) {

      let content = `Level ${tileInfo.level} on ${tileInfo.date}`;

      const labelHolder = createSVGElement('el-tooltip', container, {
        class: 'label__tile-info',
        effect: 'dark', 
        content: content 
      });

      return labelHolder;
    },

    // Level 변경 Dropdown 추가
    addDropdown() {
      var menuHolder = document.createElement('div');
      menuHolder.setAttribute('class', 'dropdown__change-level');
    },

    // Click시 Class 처리
    addClickListener(element) {
      
      //선택한 Goal 내에서만 적용되도록
      var goalId = element.dataset.goalid;
      var goalElement = document.getElementById(goalId);
      
      this.selectedElement = element; //현재 선택된 elementd저장

      element.addEventListener('click', (event) => {  

        var tileElements = goalElement.getElementsByClassName('graph-tile');
        
        var isSelected = false; //true이면 현재 타일 선택되어 있는 상태
        if(tileElements[0].classList.contains('tile-selected') == true) {
          isSelected = true;
        }
        else {
          isSelected = false;
        }
        
        if(isSelected) {
          for(var i = 0; i < tileElements.length; i++) {
            tileElements[i].setAttribute('class', 'graph-tile');
            tileElements[i].setAttribute('opacity', '1');
            console.log("click off");
          }
        }
        else {
          for(var j = 0; j < tileElements.length; j++) {
            tileElements[j].setAttribute('class', 'graph-tile tile-selected');
            tileElements[j].setAttribute('opacity', '.5');
            console.log("click on");
          }
          element.setAttribute('class', 'graph-tile tile-selected active'); //선택된 타일만 Class추가 처리
          element.setAttribute('opacity', 1);
        }

      //select한 rect에 대해 .active class 추가
      //select toggle on : 모든 rect에 .selected -> opacity: .5
      //select toggle off : remove classes
      // Dropdown 표시
      });

    },

    draw() {
      this.getContainer();
      this.makeSVG();
      this.makeGraphWrapper(this.startX, this.startY);
      this.makeTileRow();
    }
  }
};
</script>

<style scoped>
.goal-graph__container {
  width: 100%;
  height: 100%;
}
.graph-tile {
  opacity: 1;
}
.graph-tile.tile-selected {
  opacity: .5;
}
.graph-tile.tile-selected.active {
  opacity: 1;
}
</style>
