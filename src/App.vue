<template>
  <div id="app">
    <page-header v-blur="blurConfig"></page-header>

    <div class="drawer-buttons">
      <button class="btn -dark -wide" @click.prevent="toggleDrawer">show drawer</button>
      <button class="btn -dark -wide" @click.prevent="toggle2Drawer">show drawer 2</button>
    </div>

    <router-view v-blur="blurConfig" />
    <vue-drawer :show="dShow" position="bottom" :dims="{width: '100vw', height: '200px'}" drawer-color="#e7e7e7" :close-out-side="true" @change-show="toggleDrawer">
      <button @click.prevent="toggleDrawer(false)">Close Drawer</button>
      <p>some weird text</p>
    </vue-drawer>

    <vue-drawer class="customStyle" :show="d2Show" drawer-color="lightgrey" overlay-color="rgba(0, 180, 0, 0.5)" @change-show="toggle2Drawer">
      <button @click.prevent="toggle2Drawer(false)">Close This Drawer</button>
      <p>Just something here</p>
    </vue-drawer>
    <loading/>
    <all-modals></all-modals>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { Validator } from 'vee-validate';
import dictionary from './validation';

import Loading from '@/components/Loading';
import PageHeader from '@/components/PageHeader';
import AllModals from '@/AllModals';
import VueDrawer from '@/components/TheDrawer';

Validator.localize(dictionary);

export default {
  components: {
    Loading,
    PageHeader,
    AllModals,
    VueDrawer
  },
  data() {
    return {
      dShow: false,
      d2Show: false
    };
  },
  computed: {
    ...mapState({
      blurConfig: state => state.Common.blurConfig
    })
  },
  methods: {
    toggleDrawer(val) {
      this.dShow = val;
    },
    toggle2Drawer(val) {
      this.d2Show = val;
    }
  }
};
</script>

<style lang="scss">
  @import "scss/main";

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
