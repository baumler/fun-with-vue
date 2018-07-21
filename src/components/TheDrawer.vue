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
