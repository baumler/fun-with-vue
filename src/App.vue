<template>
  <div id="app">
    <div class="main-container" v-blur="blurConfig">
      <navigation>
        <div class="drawer-buttons">
          <button class="d1d btn" @click.prevent="openFocusDrawer">show drawer</button>
          <button class="d2d btn" @click.prevent="openFocus2Drawer">show drawer 2</button>
        </div>
      </navigation>
      <div class="header-shim"></div>

      <transition :name="transitionName">
        <app-view></app-view>
      </transition>
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
import _random from 'lodash/random';
import _each from 'lodash/each';
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
      resizeTimeout: null,
      transitionName: 'flip-down'
    };
  },
  computed: {
    ...mapState({
      blurConfig: state => state.Modals.blurConfig,
      overlayActive: state => state.Modals.overlayActive,
      delayedActions: state => state.Common.delayedActions,
      numberOfDelayedActions: state => state.Common.numberOfDelayedActions
    })
  },
  methods: {
    ...mapActions([
      'openDrawer',
      'setContentHeight',
      'performDelayedAction',
      'removeDelayedAction',
      'addDelayedAction'
    ]),
    openFocusDrawer() {
      this.openDrawer(['draw1er', '.d2d']);
    },
    openFocus2Drawer() {
      this.openDrawer(['draw2er', '.d1d']);
    },
    setBrowser() {
      const target = document.querySelector('.content');
      if (target.classList.contains('hasFixedBottom')) {
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
    },
    handleDelayedActions() {
      if (this.numberOfDelayedActions > 0) {
        _each(this.delayedActions, (action, key) => {
          this.performDelayedAction(key).then((data) => {
            this.removeDelayedAction(data);
          });
        });
      }
    }
  },
  mounted() {
    // this.handleDelayedActions();
    this.setBrowser();
    window.addEventListener('resize', this.resizeThrottler, false);
  },
  watch: {
    '$route' (to, from) {
      const trans = ['flip-right', 'flip-down', 'flip-left', 'flip-up'];
      const rand = _random(3);
      this.transitionName = trans[rand];
      this.handleDelayedActions();
    }
  }
};
</script>

<style lang="scss">
  @import "scss/main";

  .drawer-buttons {
    display: flex;
    align-items: center;

    button:first-child {
      margin-right: 1rem;
    }
  }
</style>
