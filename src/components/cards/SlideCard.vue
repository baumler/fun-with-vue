<template>
  <div :class="['slide-card', slideType, transitionName, {'slide': slideToBack}]" :style="mainStyle">
    <div class="slide-card__front" :style="frontStyle" v-hammer:tap="slideCard">
      <slot name="front"></slot>
    </div>

    <div class="slide-card__back" :style="backStyle" v-hammer:press="slideCard">
      <slot name="back"></slot>
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
    slideType: {
      type: String,
      default: 'mobile-click',
      validator: function (value) {
        // The value must match one of these strings
        return ['mobile-click', 'click-always'].indexOf(value) !== -1;
      }
    },
    transitionName: {
      type: String,
      default: 'slide-up'
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
      slideToBack: false
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
    slideCard() {
      if (this.slideType === 'mobile-click' && window.innerWidth <= 768) {
        this.slideToBack = !this.slideToBack;
      } else {
        this.slideToBack = !this.slideToBack;
      }
    }
  }
};
</script>
