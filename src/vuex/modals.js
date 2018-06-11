const state = {
  loader: false,
  modal: false,
  bodyScroll: 0
};

const getters = {
  loader(stateG) {
    return stateG.loader;
  },
  modal(stateG) {
    return stateG.modal;
  }
};

const actions = {
  showModal(context) {
    context.commit('showModal');
  },
  hideModal(context) {
    context.commit('hideModal');
  },
  showLoader(context) {
    const scroll = window.pageYOffset;
    document.querySelector('html').classList.add('-isLocked');
    const body = document.querySelector('body');
    body.style.top = `-${scroll}px`;

    context.commit('showLoader', scroll);
  },
  hideLoader(context) {
    document.querySelector('html').classList.remove('-isLocked');
    const body = document.querySelector('body');
    body.style.top = '0';

    context.commit('hideLoader');
  }
};

const mutations = {
  showModal(stateM) {
    stateM.overlay = true;
  },
  hideModal(stateM) {
    stateM.overlay = false;
  },
  showLoader(stateM, mutation) {
    stateM.bodyScroll = mutation;
    stateM.loader = true;
  },
  hideLoader(stateM) {
    window.scrollTo(0, stateM.bodyScroll);
    stateM.bodyScroll = 0;
    stateM.loader = false;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
