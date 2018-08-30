<template>
  <div :class="['slide-card', transitionName]" :style="mainStyle">
    <div class="slide-card__front" :style="frontStyle">
      <slot name="front"></slot>
    </div>

    <div class="slide-card__back" :style="backStyle">
      <slot name="back"></slot>
    </div>
  </div>
</template>

<script>
import _forEach from 'lodash/forEach';

export default {
  props: {
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
    }
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
  }
};
</script>
