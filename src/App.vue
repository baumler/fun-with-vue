<template>
  <div id="app">
    <page-header></page-header>
    <router-view/>
    <loading/>
  </div>
</template>

<script>
import Loading from '@/components/Loading';
import PageHeader from '@/components/PageHeader';

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
