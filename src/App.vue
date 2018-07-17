<template>
  <div id="app">
    <page-header v-blur="isBlurred"></page-header>
    <router-view v-blur="isBlurred" />
    <loading/>
  </div>
</template>

<script>
// todo:: find a way for the blur to happen on modal overlays but not the modals themselves
import { mapState } from 'vuex';
import { Validator } from 'vee-validate';
import dictionary from './validation';

import Loading from '@/components/Loading';
import PageHeader from '@/components/PageHeader';

Validator.localize(dictionary);

export default {
  components: {
    Loading,
    PageHeader
  },
  computed: {
    ...mapState({
      isBlurred: state => state.Common.isBlurred
    })
  }
};
</script>

<style lang="scss">
  @import "scss/main";
</style>
