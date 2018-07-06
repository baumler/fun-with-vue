const state = {
  loader: false,
  modal: false,
  modalClass: '',
  bodyScroll: 0
};

const getters = {
  loader(gState) {
    return gState.loader;
  },
  modal(gState) {
    return gState.modal;
  }
};

const actions = {
  openModal(context, modal) {
    context.commit('openModal', modal);
  },
  closeModal(context) {
    context.commit('closeModal');
  },
  showLoader(context) {
    context.commit('showLoader');
  },
  hideLoader(context) {
    context.commit('hideLoader');
  }
};

const mutations = {
  setBodyLock(mState) {
    const scroll = window.pageYOffset;
    const body = document.querySelector('body');
    document.querySelector('html').classList.add('-isLocked');
    body.style.top = `-${scroll}px`;
    mState.bodyScroll = scroll;
  },
  clearBodyLock(mState) {
    const body = document.querySelector('body');
    document.querySelector('html').classList.remove('-isLocked');
    body.style.top = '0';
    window.scrollTo(0, mState.bodyScroll);
    mState.bodyScroll = 0;
  },
  openModal(mState, modal) {
    this.commit('setBodyLock');
    mState.modalClass = modal;
    mState.modal = true;
  },
  closeModal(mState) {
    this.commit('clearBodyLock');
    mState.modalClass = '';
    mState.modal = false;
  },
  showLoader(mState) {
    this.commit('setBodyLock');
    mState.loader = true;
  },
  hideLoader(mState) {
    this.commit('clearBodyLock');
    mState.loader = false;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
