<template>
  <div id="app">
    <div class="main-container" v-blur="blurConfig">
      <page-header></page-header>

      <div class="drawer-buttons">
        <button class="d1d btn" @click.prevent="openFocusDrawer">show drawer</button>
        <button class="d2d btn" @click.prevent="openFocus2Drawer">show drawer 2</button>
      </div>

      <router-view />
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
import PageHeader from '@/components/PageHeader';
import AllModals from '@/AllModals';
import AllDrawers from '@/AllDrawers';

Validator.localize(dictionary);

export default {
  components: {
    Loading,
    PageHeader,
    AllModals,
    AllDrawers
  },
  data() {
    return {};
  },
  computed: {
    ...mapState({
      blurConfig: state => state.Common.blurConfig,
      overlayActive: state => state.Common.overlayActive
    })
  },
  methods: {
    ...mapActions(['openDrawer']),
    openFocusDrawer() {
      this.openDrawer(['draw1er', '.d2d']);
    },
    openFocus2Drawer() {
      this.openDrawer(['draw2er', '.d1d']);
    }
  }
};
</script>

<style lang="scss">
  @import "scss/main";
</style>
