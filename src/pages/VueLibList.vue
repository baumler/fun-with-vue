<template>
  <div class="content">
    <page-header>
      <template slot="title">Vue Libraries</template>
    </page-header>

    <div class="lists">
      <h3>Vue Libraries I still want to example here</h3>
      <ul>
        <li v-for="remain in remaining" :key="remain.title" class="list-item">
          <div>
            {{remain.title}} (<a :href="remain.url">url</a>)
            <font-awesome-icon icon="arrow-right" v-if="remain.desc"></font-awesome-icon>
            <span v-if="remain.desc">{{remain.desc}}</span>
          </div>
        </li>
        <li class="list-item">Pretty much want to try out all the <a href="https://github.com/vuejs/awesome-vue#a11y">a11y items on vue-awesome</a></li>
      </ul>
      <h3>All Vue Libraries used on this site</h3>
      <ul>
        <li v-for="lib in completed" :key="lib.title" class="list-item">
          <div>
            {{lib.title}} (<a :href="lib.url">url</a>)
            <font-awesome-icon icon="arrow-right" v-if="lib.desc"></font-awesome-icon>
            <span v-if="lib.desc">{{lib.desc}}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import PageHeader from '@/components/PageHeader';

export default {
  components: {
    PageHeader
  },
  data() {
    return {
      remaining: [
        /* {
          url: 'https://github.com/robinvdvleuten/vuex-persistedstate',
          title: 'vuex-persistedstate'
        }, */
        {
          url: 'https://github.com/intera/vue-zoom-on-hover',
          title: 'vue-zoom-on-hover'
        },
        {
          url: 'https://github.com/hilongjw/vue-lazyload',
          title: 'vue-lazyload'
        },
        {
          url: 'https://github.com/shakee93/vue-toasted',
          title: 'vue-toasted'
        }
      ]
    };
  },
  computed: {
    ...mapState({
      completed: (state) => state.VueLibs.libsUsed
    })
  },
  methods: {
    update(t) {
      console.log(t, t.target);
    }
  }
};
</script>

<style lang="scss" scoped>
  .list-item {
    padding: 0.5rem 0;

    > div {
      display: flex;
      align-items: center;

      span,
      svg {
        font-size: 0.8rem;
      }

      svg {
        margin-left: 0.5rem;
        margin-right: 0.5rem;
      }
    }
  }
</style>
