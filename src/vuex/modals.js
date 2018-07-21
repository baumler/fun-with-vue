const state = {
  loader: false,
  modal: false,
  modalClass: '',
  bodyScroll: 0,
  focusTrap: {
    active: false,
    modal: '',
    returnTo: ''
  },
  blurConfig: {
    isBlurred: false, // activate and deactivate blur directive example 2
    opacity: 0.3,
    filter: 'blur(4px)',
    transition: 'all 0.3s linear'
  }
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
  openModal(mState, mutation) {
    this.commit('setBodyLock');
    mState.modalClass = mutation[0];
    mState.modal = true;
    mState.blurConfig.isBlurred = true;
    mState.focusTrap.modal = mutation[0];
    mState.focusTrap.returnTo = mutation[1];
  },
  closeModal(mState) {
    mState.blurConfig.isBlurred = false;
    this.commit('clearBodyLock');
    mState.modalClass = '';
    mState.modal = false;
    window.setTimeout(() => {
      mState.focusTrap.modal = '';
      mState.focusTrap.returnTo = '';
    }, 300);
  },
  showLoader(mState) {
    mState.blurConfig.isBlurred = true;
    this.commit('setBodyLock');
    mState.loader = true;
  },
  hideLoader(mState) {
    mState.blurConfig.isBlurred = false;
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
