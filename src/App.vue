<template>
  <div id="app">
    <page-header></page-header>
    <router-view/>
    <loading/>
  </div>
</template>

<script>
import { Validator } from 'vee-validate';
import dictionary from './validation';

import Loading from '@/components/Loading';
import PageHeader from '@/components/PageHeader';

Validator.localize(dictionary);

export default {
  components: {
    Loading,
    PageHeader
  }
};
</script>

<style lang="scss">
  @import "scss/main";
</style>
