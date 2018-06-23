const state = {
  libsUsed: [
    {
      url: 'https://github.com/eddiemf/vue-affix',
      title: 'vue-affix'
    },
    {
      url: 'https://github.com/eddiemf/vue-scrollactive',
      title: 'vue-scrollactive'
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
      url: 'https://github.com/baianat/vee-validate',
      title: 'vee-validate'
    },
    {
      url: 'https://github.com/SortableJS/Vue.Draggable',
      title: 'vuedraggable'
    },
    {
      url: 'https://github.com/FortAwesome/vue-fontawesome',
      title: 'vue-fontawesome'
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
