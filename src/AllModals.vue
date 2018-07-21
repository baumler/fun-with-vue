<template>
  <div class="all-modals">
    <focus-lock :disabled="focusTrap.modal === 'modalFocus' ? false : true">
      <modal class-name="modalFocus" @modalClosed="closeFocusModal">
        <div slot="header">Focus Locked to the modal</div>
        <div slot="main">
          <p>You will only be able to tab inside the modal.</p>
          <button>I do nothing</button>
          <button @click.prevent="closeFocusModal">Close me</button>
        </div>
      </modal>
    </focus-lock>

    <transition name="fade" appear>
      <div v-show="modal" class="modal-overlay"></div>
    </transition>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import FocusLock from 'vue-focus-lock';
import Modal from '@/components/TheModal';

export default {
  components: {
    FocusLock,
    Modal
  },
  computed: {
    ...mapState({
      modal: state => state.Common.modal,
      focusTrap: state => state.Common.focusTrap
    })
  },
  methods: {
    ...mapActions([
      'closeModal'
    ]),
    closeFocusModal() {
      const rt = this.focusTrap.returnTo;
      this.closeModal();
      this.$nextTick(() => {
        document.querySelector(rt).focus();
      });
    }
  }
};
</script>
