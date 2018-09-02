import Vue from 'vue';
import Vuex from 'vuex';

// import each module
import Common from '../vuex/common';
import Modals from '../vuex/modals';
import VueLibs from '../vuex/vueLibs';

Vue.use(Vuex);

const state = {};

const store = new Vuex.Store({
  modules: {
    Common,
    Modals,
    VueLibs
  },
  getters: {},
  actions: {},
  state
});

store.subscribe((mutationSub, stateSub) => {
  if (mutationSub.type !== 'routeModule/ROUTE_CHANGED') {
    console.log('-> Store updated...', mutationSub, stateSub);
  }
});

export default store;
