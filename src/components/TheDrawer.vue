<template>
  <div class="vue-drawer" :class="show ? 'active' : ''">
    <div :class="['vue-drawer__main', 'drawer-' + position]" :style="{'width': dims.width, 'height': dims.height, 'background-color': drawerColor}">
      <slot></slot>
    </div>

    <div class="vue-drawer__mask" :style="{'background-color': overlayColor}" @click.prevent="hideMask"></div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true,
      default: false
    },
    position: {
      type: String,
      default: 'right'
    },
    dims: {
      type: Object,
      default: () => { return { width: '400px', height: '100vh' }; }
    },
    lockBody: {
      type: Boolean,
      default: false
    },
    closeOutSide: {
      type: Boolean,
      default: false
    },
    drawerColor: {
      type: String,
      default: '#FFFFFF'
    },
    overlayColor: {
      type: String,
      default: 'rgba(0, 0, 0, 0.5)'
    }
  },
  data() {
    return {
      bodyScroll: 0
    };
  },
  methods: {
    hideMask() {
      if (this.closeOutSide) {
        this.$emit('change-show', false);
      }
    }
  },
  watch: {
    show() {
      if (!this.show) {
        this.$emit('on-hide');
      } else {
        this.$emit('on-show');
      }

      // lock body
      if (this.lockBody) {
        const html = document.querySelector('html');
        const body = document.querySelector('body');

        if (this.show) {
          const scroll = window.pageYOffset;
          html.classList.add('-isLocked');
          body.style.top = `-${scroll}px`;
          this.bodyScroll = scroll;
        } else {
          html.classList.remove('-isLocked');
          body.style.top = `0`;
          window.scrollTo(0, this.bodyScroll);
          this.bodyScroll = 0;
        }
      }
    }
  }
};
</script>

<style>
  html.-isLocked {
    position: fixed;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }

  html.-isLocked body {
    position: fixed;
    width: 100vw;
  }

  .vue-drawer {
    display: block;
    position: relative;
    width: 100%;
    height: 100%;
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
    transition: opacity 0.3s;
    z-index: 1000;
  }

  .vue-drawer.active .vue-drawer__main.drawer-right,
  .vue-drawer.active .vue-drawer__main.drawer-left {
    transform: translateX(0%);
  }

  .vue-drawer.active .vue-drawer__main.drawer-top,
  .vue-drawer.active .vue-drawer__main.drawer-bottom {
    transform: translateY(0%);
  }

  .vue-drawer.active .vue-drawer__mask {
    width: 100%;
    height: 100%;
    opacity: 1;
  }
</style>
