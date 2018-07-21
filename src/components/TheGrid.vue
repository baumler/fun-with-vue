<template>
  <div :class="['grid-custom', alignClass, justifyClass]" :style="'grid-template-columns: repeat(' + columns + ', 1fr);' + remainingStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    columns: {
      type: Number,
      required: true,
      default: 1
    },
    gap: {
      type: String,
      default: '1rem'
    },
    justify: {
      type: String,
      default: 'start' // options: 'start', 'center', 'stretch', 'end'
    },
    alignment: {
      type: String,
      default: 'start' // options: 'start', 'center', 'stretch', 'end'
    }
  },
  computed: {
    alignClass() {
      return `align-${this.alignment}`;
    },
    justifyClass() {
      return `justify-${this.justify}`;
    },
    remainingStyle() {
      return `grid-gap: ${this.gap}`;
    }
  }
};
</script>

<style lang="scss">
  .grid-custom {
    display: grid;

    & > div {
      border: 1px solid black;
      min-height: 50px;
    }

    &.align-center {
      align-items: center;
    }
    &.justify-center {
      justify-items: center;
    }

  }
</style>
