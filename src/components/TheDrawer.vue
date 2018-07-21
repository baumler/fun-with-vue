<template>
  <div v-show="drawer.active" :class="['vue-drawer', openName, isOpen]">
    <div :class="['vue-drawer__main', 'drawer-' + position]" :style="{'width': dims.width, 'height': dims.height, 'background-color': drawerColor}">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  props: {
    openName: {
      type: String,
      required: true
    },
    position: {
      type: String,
      default: 'right'
    },
    dims: {
      type: Object,
      default: () => { return { width: '400px', height: '100vh' }; }
    },
    drawerColor: {
      type: String,
      default: '#FFFFFF'
    }
  },
  computed: {
    ...mapState({
      drawer: state => state.Common.drawer
    }),
    isOpen() {
      if (this.drawer.active && this.drawer.openName === this.openName) {
        return 'isOpen';
      }
      return '';
    }
  },
  methods: {
    ...mapActions(['closeDrawer']),
    close() {
      this.closeDrawer();
      if (this.closeOutSide) {
        this.$emit('drawerClosed');
      }
    }
  }
};
</script>

<style lang="scss">
  .vue-drawer {
    display: block;
    position: relative;
    width: 0;
    height: 0;

    &.isOpen {
      width: 100%;
      height: 100%;
    }
  }

  .vue-drawer__main {
    position: fixed;
    width: 0;
    height: 0;
    text-align: center;
    transition: all 0.3s;
    z-index: 1001;
    overflow: hidden;
  }

  .vue-drawer__main.drawer-right {
    top: 0;
    right: 0;
    transform: translateX(102%);
  }

  .vue-drawer__main.drawer-left {
    top: 0;
    left: 0;
    transform: translateX(-102%);
  }

  .vue-drawer__main.drawer-top {
    top: 0;
    left: 0;
    transform: translateY(-102%);
  }

  .vue-drawer__main.drawer-bottom {
    bottom: 0;
    left: 0;
    transform: translateY(102%);
  }

  .vue-drawer__mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    opacity: 0;
    transition: opacity 0.3s linear;
    z-index: 1000;
  }

  .vue-drawer.isOpen .vue-drawer__main.drawer-right,
  .vue-drawer.isOpen .vue-drawer__main.drawer-left {
    transform: translateX(0%);
  }

  .vue-drawer.isOpen .vue-drawer__main.drawer-top,
  .vue-drawer.isOpen .vue-drawer__main.drawer-bottom {
    transform: translateY(0%);
  }
</style>
