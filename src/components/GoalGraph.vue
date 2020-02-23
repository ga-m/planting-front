<template>
  <div class="goal-graph__container" :class="goalId">
    <!-- <img src="../js/goal-graph/goal-calendar.svg"> -->
  </div>
</template>

<script>
import { createSVGElement, setAttrs, removeAttrs, plantsColors } from '../js/goal-graph/svg.js';

export default {
  props: ['calendarData', 'goalId'],
  data() {
    return {
      containerSelector: '', // svg를 감싸줄 Container
      startX: 0, // 가장 첫번째 타일이 위치할 시작점 X 좌표
      startY: 0, // 가장 첫번째 타일이 위치할 시작점 Y 좌표
      data: {}, // Goal 1개의 좌표 정보
      /**
       * data 구성
       *
       */
      tileSize: 0, // 타일 정사각형 크기 (px)
      tileInterval: 0, // 타일 사이의 간격 (px)
      plantsColors: [
        '#e8e8e8',
        '#a2d281',
        '#66af5b',
        '#27842c',
        '#265f18',
        '#f46e6e'
      ], // 차례대로 tier 0, 1, 2, 3, 4, 5

      //함수 내에서 정의된 변수
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

    // const graph = new GoalGraph({
    //   container: '.goal-graph__container',
    //   // startX: 67,
    //   // startY: 36,
    //   startX: 30,
    //   startY: 30,
    //   tileSize: 17,
    //   tileInterval: 3,
    //   data: dataExample
    // });

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
    //width: 1300px
    //height: 200px;
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
      let color = this.plantsColors[tileInfo.level];

      const rect = createSVGElement('rect', container, {
        x: x,
        y: y,
        width: this.tileSize,
        height: this.tileSize,
        fill: color
        //date, tier 등 필요한 정보
      });
    },

    draw() {
      this.getContainer();
      this.makeSVG();
      this.makeGraphWrapper(this.startX, this.startY);
      this.makeTileRow();

      // 3. <g></g> 열 생성
      // 오늘 날짜로부터 딱 1년 (윤년 등을 고려해 365로 계산하지 않음)이 되는 만큼의 (일 수 / 7) 만큼의 열을 생성한다.

      //3-1. <rect></rect> 각 잔디 생성
      //date, 단계 정보, x, y를 입력받아 width, heigth 만큼의 rect를 7개씩 생성한다.

      // 고려 사항
      // 복수의 Graph를 그릴 수 있도록 인자를 받아야 한다.
      // ...
    }
  }
};
</script>

<style scoped>
.goal-graph__container {
  width: 100%;
  height: 100%;
}
</style>