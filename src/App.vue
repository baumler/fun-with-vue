<template>
  <div id="app">
    <page-header v-blur="blurConfig"></page-header>
    <router-view v-blur="blurConfig" />
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

Validator.localize(dictionary);

export default {
  components: {
    Loading,
    PageHeader,
    AllModals
  },
  computed: {
    ...mapState({
      blurConfig: state => state.Common.blurConfig
    })
  }
};
</script>

<style lang="scss">
  @import "scss/main";
</style>
