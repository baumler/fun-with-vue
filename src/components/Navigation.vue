<template>
  <div class="page-header">
    <main-nav/>
  </div>
</template>

<script>
import MainNav from '@/components/MainNav';
export default {
  components: {
    MainNav
  }
};
</script>

<style lang="scss" scoped>
  nav {
    display: flex;
    align-items: center;
    height: 40px;
    padding: 0 2rem;

    a {
      padding: 0 1rem;
    }
  }
</style>
