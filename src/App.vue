<template>
  <div id="app">
    <page-header v-blur="blurConfig"></page-header>

    <div v-blur="blurConfig" class="drawer-buttons">
      <button class="d1d btn -dark -wide" @click.prevent="openFocusDrawer">show drawer</button>
      <button class="d2d btn -dark -wide" @click.prevent="openFocus2Drawer">show drawer 2</button>
    </div>

    <router-view v-blur="blurConfig" />

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
