import Vue from 'vue';
import Vuex from 'vuex';

// import each module
import Common from '../vuex/modals';

Vue.use(Vuex);

const state = {};

const store = new Vuex.Store({
  modules: {
    Common
  },
  getters: {},
  actions: {},
  state
});

store.subscribe((mutationSub, stateSub) => {
  console.log('-> Store updated.', mutationSub, stateSub);
});

export default store;
