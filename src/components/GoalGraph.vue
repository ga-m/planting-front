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
      // const dropdownHolder = this.getDropdownHolder(container, x, y, tileInfo); // get el-dropdown

      let color = this.plantsColors[tileInfo.level];
      const rect = createSVGElement('rect', container, {
        class: 'graph-tile el-dropdown-link',
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

      // this.getDropdownMenu(dropdownHolder, tileInfo); //add dropdown menu add
    },

    // get tooltip holder element
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

    // get dropdown holder element
    // 동작 X
    getDropdownHolder(container, x, y, tileInfo) {
      
      const dropdownHolder = createSVGElement('el-dropdown', container, {
        class: 'dropdown__tile-info',
        trigger: 'click'
      });

      return dropdownHolder;
    },

    // get dropdown menu  
    // 동작 X
    getDropdownMenu(container, tileInfo) {

      const dropdownMenu = createSVGElement('el-dropdown-menu', container, {});

      //TODO: 하드코딩 말고 받아온 level 개수만큼 element-item 표시, 선택된 level 표시
      createSVGElement('el-dropdown-item', dropdownMenu, {
        'data-content': '1단계'
      });
      createSVGElement('el-dropdown-item', dropdownMenu, {
        'data-content': '2단계'
      });
      createSVGElement('el-dropdown-item', dropdownMenu, {
        'data-content': '3단계'
      });
      createSVGElement('el-dropdown-item', dropdownMenu, {
        'data-content': '4단계'
      });
      createSVGElement('el-dropdown-item', dropdownMenu, {
        'data-content': '5단계'
      });

      return dropdownMenu;
    },

    // Click시 Class 처리
    addClickListener(element) {
      
      //선택한 Goal 내에서만 적용되도록
      var goalId = element.dataset.goalid;
      var goalElement = document.getElementById(goalId);
    
      element.addEventListener('click', (event) => {  
        // 1. Opacity 조정  
        this.toggleTileStyle(element, goalElement, goalId);

        // // 2. Dropdown 표시
        // this.toggleDropdown(element, goalElement, goalId);
      });

    },
    
    toggleTileStyle(selectedTileElement, goalElement, goalId) {

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
            tileElements[i].setAttribute('opacity', '1'); // TODO: CSS로 할 수 있을 것 같은데.. 안되서 이렇게 함
          }
          console.log(goalId + " click off");
        }
        else {
          for(var j = 0; j < tileElements.length; j++) {
            tileElements[j].setAttribute('class', 'graph-tile tile-selected');
            tileElements[j].setAttribute('opacity', '.5');
          }
          console.log(goalId + " click on");
          selectedTileElement.setAttribute('class', 'graph-tile tile-selected active'); //선택된 타일만 Class 추가 처리
          selectedTileElement.setAttribute('opacity', 1);
        }
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
/**
 * TODO: 동작하지 않음.. 
 */
.graph-tile {
  opacity: 1;
}
.tile-selected {
  opacity: .5!important;
}
.graph-tile.tile-selected.active {
  opacity: 1;
}
</style>
