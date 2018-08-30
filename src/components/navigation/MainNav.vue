<template>
  <ul class="nav">
    <li class="nav-item" v-for="(route, i) in routes" :key="i">
      <router-link :to="route" class="nav-link" @click.native="submitEvent">
        {{ route.name }}
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    routes() {
      const routes = [];
      for (let i in this.$router.options.routes) {
        if (!this.$router.options.routes.hasOwnProperty(i)) {
          continue;
        }
        const route = this.$router.options.routes[i];
        if (route.hasOwnProperty('name')) {
          routes.push(route);
        }
      }
      return routes;
    }
  },
  methods: {
    submitEvent() {
      this.$emit('clickedLink');
    }
  }
};
</script>

<style lang="scss" scoped>
.nav {
  padding: 0;
  margin: 0;
  list-style: none;

  li {
    display: block;
    list-style: none;

    &:not(:last-child) {
      margin-bottom: 0.5rem;
    }
  }
}
</style>
