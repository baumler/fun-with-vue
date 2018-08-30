const state = {
  windowHeight: window.innerHeight,
  isMobile: null,
  browser: null,
  contentHeight: null,
  delayedActions: {},
  numberOfDelayedActions: 0
};

const getters = {};

const actions = {
  setContentHeight(context, data) {
    context.commit('setContentHeight', data);
  },
  addDelayedAction(context, data) {
    context.commit('addDelayedAction', data);
  },
  removeDelayedAction(context, data) {
    context.commit('removeDelayedAction', data);
  },
  performDelayedAction(context, data) {
    return new Promise((resolve, reject) => {
      context.commit('performDelayedAction', { key: data, resolve: resolve, reject: reject });
    });
  },
  showConsoleComment(context) {
    console.log('delayed console log message');
  }
};

const mutations = {
  setContentHeight(stateM, data) {
    stateM.browser = data.browser;
    stateM.isMobile = data.isMobile;
    stateM.contentHeight = data.height;
    stateM.windowHeight = data.window;
  },
  performDelayedAction(stateM, data) {
    if (stateM.delayedActions[data.key]) {
      this.dispatch(data.key);
      data.resolve(data.key);
    } else {
      data.reject(data);
    }
  },
  removeDelayedAction(stateM, key) {
    if (stateM.delayedActions[key]) {
      delete stateM.delayedActions[key];
      stateM.numberOfDelayedActions = Object.keys(stateM.delayedActions).length;
    }
  },
  addDelayedAction(stateM, data) {
    if (!stateM.delayedActions[data.key]) {
      stateM.delayedActions[data.key] = data.action;
      stateM.numberOfDelayedActions = Object.keys(stateM.delayedActions).length;
    }
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
