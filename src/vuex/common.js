const state = {
  windowHeight: window.innerHeight,
  isMobile: null,
  browser: null,
  contentHeight: null
};

const getters = {};

const actions = {
  setContentHeight(context, data) {
    context.commit('setContentHeight', data);
  }
};

const mutations = {
  setContentHeight(stateM, data) {
    stateM.browser = data.browser;
    stateM.isMobile = data.isMobile;
    stateM.contentHeight = data.height;
    stateM.windowHeight = data.window;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
