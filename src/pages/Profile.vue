<template>
  <div>I have no data</div>
</template>

<script>
export default {
  mounted() {
    this.$_error(404, {error: 'Just a 404 error'});
  }
};
</script>

<style lang="scss" scoped>

</style>
