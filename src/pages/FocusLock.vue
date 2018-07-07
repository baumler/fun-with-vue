<template>
  <div class="content">
    <h1 class="textCentered">Vue Focus Lock</h1>
    <div>
      <button>I do nothing!</button><br/>
      some fun stuff here<br/>
      <button>I also do nothing</button><br/>
      <br/>
      <button @click.prevent="openFocusModal">Open modal to see focus trap</button><br/>

      <input class="focustrap" type="text" placeholder="focus returns here!"/>

      <focus-lock :disabled="!trapActive">
        <modal class-name="modalFocus" @modalClosed="closeFocusModal">
          <div slot="header">Focus Locked to the modal</div>
          <div slot="main">
            <p>You will only be able to tab inside the modal.</p>
            <button>I do nothing</button> <button @click.prevent="closeFocusModal">Close me</button>
          </div>
        </modal>
      </focus-lock>
      <button>Nothing here</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import FocusLock from 'vue-focus-lock';
import Modal from '../components/TheModal.vue';

export default {
  components: {
    FocusLock,
    Modal
  },
  data() {
    return {
      trapActive: false,
      returnFocus: '.focustrap'
    };
  },
  methods: {
    ...mapActions(['openModal', 'closeModal']),
    toggleTrapActive() {
      this.trapActive = !this.trapActive;
    },
    openFocusModal() {
      this.openModal('modalFocus');
      this.toggleTrapActive();
    },
    closeFocusModal() {
      this.toggleTrapActive();
      this.closeModal();
      this.$nextTick(() => {
        document.querySelector(this.returnFocus).focus();
      });
    }
  }
};
</script>
