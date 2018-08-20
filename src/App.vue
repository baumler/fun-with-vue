<template>
  <div id="app">
    <div class="main-container" v-blur="blurConfig">
      <navigation>
        <div class="drawer-buttons">
          <button class="d1d btn" @click.prevent="openFocusDrawer">show drawer</button>
          <button class="d2d btn" @click.prevent="openFocus2Drawer">show drawer 2</button>
        </div>
      </navigation>

      <app-view></app-view>
    </div>

    <loading/>

    <all-drawers></all-drawers>

    <all-modals></all-modals>

    <transition name="fade" appear>
      <div v-show="overlayActive" class="modal-overlay"></div>
    </transition>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { Validator } from 'vee-validate';
import dictionary from './validation';

import Loading from '@/components/Loading';
import Navigation from '@/components/Navigation';
import AllModals from '@/AllModals';
import AllDrawers from '@/AllDrawers';

Validator.localize(dictionary);

export default {
  components: {
    Loading,
    Navigation,
    AllModals,
    AllDrawers
  },
  data() {
    return {
      resizeTimeout: null
    };
  },
  computed: {
    ...mapState({
      blurConfig: state => state.Modals.blurConfig,
      overlayActive: state => state.Modals.overlayActive
    })
  },
  methods: {
    ...mapActions(['openDrawer', 'setContentHeight']),
    openFocusDrawer() {
      this.openDrawer(['draw1er', '.d2d']);
    },
    openFocus2Drawer() {
      this.openDrawer(['draw2er', '.d1d']);
    },
    setBrowser() {
      // get browser info
      const userAgent = window.navigator.userAgent;
      let contentHeight = window.innerHeight - 50;
      let mobile = false;

      // are we on mobile?
      if (userAgent.indexOf('Mobile') !== -1) {
        mobile = true;

        // are we on safari? are we NOT on chrome?
        if (userAgent.indexOf('Safari') !== -1 && userAgent.indexOf('Chrome') === -1) {
          contentHeight -= 40;
        }
      }

      this.setContentHeight({
        window: window.innerHeight,
        height: contentHeight,
        browser: userAgent,
        isMobile: mobile
      });

      const target = document.querySelector('.content');
      if (target.classList.contains('hasFixedBottom')) {
        target.style.height = `${contentHeight}px`;
      }
    },
    resizeThrottler() {
      const self = this;
      // ignore resize events as long as an actualResizeHandler execution is in the queue
      if (!self.resizeTimeout) {
        self.resizeTimeout = setTimeout(function() {
          self.resizeTimeout = null;
          self.setBrowser();
        }, 300);
      }
    }
  },
  mounted() {
    this.setBrowser();
    window.addEventListener('resize', this.resizeThrottler, false);
  }
};
</script>

<style lang="scss">
  @import "scss/main";

  .drawer-buttons {
    // padding: 2rem;
    display: flex;
    // justify-content: space-around;
    align-items: center;
  }
</style>
