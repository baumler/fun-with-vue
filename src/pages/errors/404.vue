<template>
  <div class="content">
    <h1>404 Error</h1>
    <span v-if="payload">
      <p>The resource could not be found.</p>
      <p>{{ payload.error }}</p>
    </span>
    <router-link to="/" exact>
      Go to home page
    </router-link>
  </div>
</template>

<script>
export default {
  props: ['payload']
};
</script>

<style lang="scss" scoped>

</style>
