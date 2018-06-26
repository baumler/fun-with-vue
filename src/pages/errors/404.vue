<template>
  <div>
    <h1>404 Error</h1>
    <p>The resource could not be found.</p>
    <p>{{ payload.error }}</p>
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
