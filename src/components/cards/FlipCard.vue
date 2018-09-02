<template>
  <div class="flip-card" :style="mainStyle" :id="cardId">
    <div :class="['flip-card__container', flipType, transitionName, {'flipped': flipToBack}]">
      <div class="flip-card__side" :style="frontStyle" v-hammer:tap="flipCard">
        <slot name="front"></slot>
      </div>

      <div class="flip-card__side -back" :style="backStyle" v-hammer:press="flipCard">
        <slot name="back"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import _forEach from 'lodash/forEach';
import Vue from 'vue';
import { VueHammer } from 'vue2-hammer';
VueHammer.config.press = {
  time: 200
};
Vue.use(VueHammer);

export default {
  props: {
    flipType: {
      type: String,
      default: 'mobile-click',
      validator: function (value) {
        // The value must match one of these strings
        return ['mobile-click', 'click-always', 'hover-always'].indexOf(value) !== -1;
      }
    },
    transitionName: {
      type: String,
      default: 'flip-vert'
    },
    cardMainStyles: {
      type: Object,
      default: () => {
        return {
          height: '100px',
          width: '100px'
        };
      }
    },
    cardFrontStyles: {
      type: Object
    },
    cardBackStyles: {
      type: Object
    },
    cardId: {
      type: String
    }
  },
  data() {
    return {
      flipToBack: false
    };
  },
  computed: {
    mainStyle() {
      let s = '';
      _forEach(this.cardMainStyles, (value, key) => {
        s += `${key}:${value};`;
      });

      return s;
    },
    frontStyle() {
      let s = '';
      _forEach(this.cardFrontStyles, (value, key) => {
        s += `${key}:${value};`;
      });

      return s;
    },
    backStyle() {
      let s = '';
      _forEach(this.cardBackStyles, (value, key) => {
        s += `${key}:${value};`;
      });

      return s;
    }
  },
  methods: {
    flipCard() {
      if (this.flipType === 'mobile-click' && window.innerWidth <= 768) {
        this.flipToBack = !this.flipToBack;
      } else if (this.flipType === 'click-always') {
        this.flipToBack = !this.flipToBack;
      }
    }
  }
};
</script>
