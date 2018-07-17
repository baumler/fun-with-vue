const state = {
  libsUsed: [
    {
      url: 'https://github.com/vuejs/eslint-plugin-vue',
      title: 'eslint-plugin-vue'
    },
    {
      url: 'https://github.com/eddiemf/vue-affix',
      title: 'vue-affix',
      desc: 'Used on Panda'
    },
    {
      url: 'https://github.com/eddiemf/vue-scrollactive',
      title: 'vue-scrollactive',
      desc: 'Used on Panda'
    },
    {
      url: 'https://github.com/baianat/vee-validate',
      title: 'vee-validate',
      desc: 'Used on Panda'
    },
    {
      url: 'https://github.com/Botre/vue-sauce',
      title: 'vue-sauce'
    },
    {
      url: 'https://github.com/creotip/vue-prism',
      title: 'vue-prism'
    },
    {
      url: 'https://github.com/SortableJS/Vue.Draggable',
      title: 'vuedraggable'
    },
    {
      url: 'https://github.com/FortAwesome/vue-fontawesome',
      title: 'vue-fontawesome'
    },
    {
      url: 'https://github.com/vue-bulma/click-outside',
      title: 'vue-click-outside',
      desc: 'Used on Panda'
    },
    {
      url: 'https://github.com/KABBOUCHI/vue-tippy',
      title: 'vue-tippy',
      desc: 'Used on Panda'
    },
    {
      url: 'https://github.com/apertureless/vue-breakpoints',
      title: 'vue-breakpoints'
    },
    /* {
      url: 'https://github.com/intera/vue-zoom-on-hover',
      title: 'vue-zoom-on-hover'
    },
    {
      url: 'https://github.com/robinvdvleuten/vuex-persistedstate',
      title: 'vuex-persistedstate'
    }, */
    /* {
      url: 'https://github.com/raniesantos/vue-error-page',
      title: 'vue-error-page'
    }, */
    /* {
      url: 'https://github.com/hilongjw/vue-lazyload',
      title: 'vue-lazyload'
    }, */
    {
      url: 'https://github.com/theKashey/vue-focus-lock',
      title: 'vue-focus-lock',
      desc: 'a a11y component'
    },
    {
      url: 'https://github.com/IBM/vue-a11y-calendar',
      title: 'vue-a11y-calendar',
      desc: 'a a11y component'
    },
    {
      url: 'https://github.com/bkzl/vue-float-label',
      title: 'vue-float-label'
    },
    {
      url: 'https://github.com/vue-a11y/vue-announcer',
      title: 'vue-announcer',
      desc: 'a a11y component'
    },
    {
      url: 'https://github.com/ndelvalle/v-blur',
      title: 'v-blur'
    }
  ]
};

const getters = {};

const actions = {
  addUseVueLib(context, data) {
    context.commit('addUseVueLib', data);
  }
};

const mutations = {
  addUseVueLib(mState, data) {
    mState.libsUsed.push(data);
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
