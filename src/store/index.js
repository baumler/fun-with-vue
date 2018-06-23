import Vue from 'vue';
import Vuex from 'vuex';

// import each module
import Common from '../vuex/modals';
import VueLibs from '../vuex/vueLibs';

Vue.use(Vuex);

const state = {};

const store = new Vuex.Store({
  modules: {
    Common,
    VueLibs
  },
  getters: {},
  actions: {},
  state
});

store.subscribe((mutationSub, stateSub) => {
  console.log('-> Store updated...', mutationSub, stateSub);
});

export default store;
