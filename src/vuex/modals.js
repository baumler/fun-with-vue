const state = {
  loader: false,
  modal: {
    active: false,
    openName: ''
  },
  modalClass: '',
  drawer: {
    active: false,
    openName: ''
  },
  overlayActive: false,
  bodyScroll: 0,
  focusTrap: {
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
  },
  openDrawer(context, drawer) {
    context.commit('openDrawer', drawer);
  },
  closeDrawer(context) {
    context.commit('closeDrawer');
  }
};

const mutations = {
  setBodyLock(mState) {
    const scroll = window.pageYOffset;
    const body = document.querySelector('body');
    document.querySelector('html').classList.add('-isLocked');
    body.style.top = `-${scroll}px`;
    mState.bodyScroll = scroll;
    this.commit('setOverlay');
  },
  clearBodyLock(mState) {
    const body = document.querySelector('body');
    document.querySelector('html').classList.remove('-isLocked');
    body.style.top = '0';
    window.scrollTo(0, mState.bodyScroll);
    mState.bodyScroll = 0;
    this.commit('clearOverlay');
  },
  setFocus(mState, mutation) {
    mState.focusTrap.modal = mutation[0];
    mState.focusTrap.returnTo = mutation[1];
  },
  clearFocus(mState) {
    window.setTimeout(() => {
      mState.focusTrap.modal = '';
      mState.focusTrap.returnTo = '';
    }, 300);
  },
  setOverlay(mState) {
    mState.overlayActive = true;
  },
  clearOverlay(mState) {
    mState.overlayActive = false;
  },
  openModal(mState, mutation) {
    this.commit('setBodyLock');
    mState.modal.openName = mutation[0];
    mState.modal.active = true;
    mState.blurConfig.isBlurred = true;
    this.commit('setFocus', mutation);
  },
  closeModal(mState) {
    mState.blurConfig.isBlurred = false;
    this.commit('clearBodyLock');
    mState.modal.openName = '';
    mState.modal.active = false;
    this.commit('clearFocus');
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
  },
  openDrawer(mState, mutation) {
    this.commit('setBodyLock');
    mState.drawer.openName = mutation[0];
    mState.drawer.active = true;
    mState.blurConfig.isBlurred = true;
    this.commit('setFocus', mutation);
  },
  closeDrawer(mState) {
    mState.blurConfig.isBlurred = false;
    this.commit('clearBodyLock');
    mState.drawer.openName = '';
    mState.drawer.active = false;
    this.commit('clearFocus');
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
