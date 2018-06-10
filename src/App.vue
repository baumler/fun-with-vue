<template>
  <div id="app">
    <page-header></page-header>
    <router-view/>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader'

export default {
  components: {
    PageHeader
  }
}
</script>

<style lang="scss">
  @import "scss/main";
</style>
