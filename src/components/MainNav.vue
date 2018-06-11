<template>
  <ul class="nav">
    <li class="nav-item" v-for="(route, i) in routes" :key="i">
      <router-link :to="route" class="nav-link">
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
  }
};
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 2rem;
  margin: 0;
  list-style: none;

  li {
    list-style: none;

    a {
      padding: 0 1rem;
    }
  }
}
</style>
