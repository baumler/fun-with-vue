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

      <div class="main-page">
        <transition
            :name="transitionName"
            :mode="transitionMode"
            :enter-active-class="transitionEnterActiveClass"
            @beforeLeave="beforeLeave"
            @enter="enter"
            @afterEnter="afterEnter"
        >
          <app-view></app-view>
        </transition>
      </div>

      <footer>JUST SOME FOOTER STUFF</footer>
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
import _each from 'lodash/each';
import _random from 'lodash/random';
import { mapState, mapActions } from 'vuex';
import { Validator } from 'vee-validate';
import dictionary from './validation';

import Loading from '@/components/Loading';
import Navigation from '@/components/Navigation';
import AllModals from '@/AllModals';
import AllDrawers from '@/AllDrawers';

Validator.localize(dictionary);

const DEFAULT_TRANSITION = 'slide-right';
const DEFAULT_TRANSITION_MODE = 'out-in';

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
      transitionTypes: ['fade-height', 'slide-left', 'slide-right'],
      transitionName: DEFAULT_TRANSITION,
      transitionMode: DEFAULT_TRANSITION_MODE,
      transitionEnterActiveClass: '',
      prevHeight: 0
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
    },
    beforeLeave(element) {
      this.prevHeight = getComputedStyle(element).height;
    },
    enter(element) {
      const { height } = getComputedStyle(element);

      element.style.height = this.prevHeight;

      setTimeout(() => {
        element.style.height = height;
      });
    },
    afterEnter(element) {
      element.style.height = 'auto';
    }
  },
  mounted() {
    // this.handleDelayedActions();
    this.setBrowser();
    window.addEventListener('resize', this.resizeThrottler, false);
  },
  created() {
    this.$router.beforeEach((to, from, next) => {
      let rand = _random(this.transitionTypes.length - 1);
      if (this.transitionTypes[rand] === this.transitionName) {
        if (rand === this.transitionTypes.length - 1) {
          rand = rand - 1;
        } else {
          rand = rand + 1;
        }
      }
      /* let transitionName = to.meta.transitionName || from.meta.transitionName || DEFAULT_TRANSITION; */
      let transitionName = this.transitionTypes[rand];

      if (transitionName === 'slide') {
        const toDepth = to.path.split('/').length;
        const fromDepth = from.path.split('/').length;
        transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
      }

      this.transitionMode = DEFAULT_TRANSITION_MODE;
      this.transitionEnterActiveClass = `${transitionName}-enter-active`;

      if (from.meta.transitionName === 'zoom') {
        this.transitionMode = null;
        this.transitionEnterActiveClass = null;
        document.body.style.overflow = null;
      }

      this.transitionName = transitionName;
      this.handleDelayedActions();
      next();
    });
  },
  watch: {
    '$route' (to, from) {
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
