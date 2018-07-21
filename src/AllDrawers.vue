<template>
  <div class="all-drawers">
    <focus-lock :disabled="focusTrap.modal === 'draw1er' ? false : true">
      <vue-drawer open-name="draw1er" position="bottom" :dims="{width: '100vw', height: '200px'}" drawer-color="#e7e7e7">
        <button @click.prevent="closeFocusDrawer">Close Drawer</button>
        <p>some weird text</p>
        <button>I don't do anything</button>
      </vue-drawer>
    </focus-lock>

    <focus-lock :disabled="focusTrap.modal === 'draw2er' ? false : true">
      <vue-drawer open-name="draw2er" class="customStyle" drawer-color="lightgrey">
        <button @click.prevent="closeFocusDrawer">Close This Drawer</button>
        <p>Just something here</p>
        <button>I don't do anything</button><br/>
        <button>I don't do anything</button>
      </vue-drawer>
    </focus-lock>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import FocusLock from 'vue-focus-lock';
import VueDrawer from '@/components/TheDrawer';

export default {
  components: {
    VueDrawer,
    FocusLock
  },
  computed: {
    ...mapState({
      drawer: state => state.Common.drawer,
      focusTrap: state => state.Common.focusTrap
    })
  },
  methods: {
    ...mapActions(['closeDrawer']),
    closeFocusDrawer() {
      const rt = this.focusTrap.returnTo;
      this.closeDrawer();
      this.$nextTick(() => {
        document.querySelector(rt).focus();
      });
    }
  }
};
</script>

<style lang="scss">
  .drawer-buttons {
    padding: 2rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .vue-drawer__main {
    padding: 1rem;
  }

  .customStyle {
    .vue-drawer__main {
      color: blue;
    }
  }
</style>
