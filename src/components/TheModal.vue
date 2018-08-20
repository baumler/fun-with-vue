<template>
  <transition name="fade" appear>
    <div v-show="modal.active" :class="['modal', openName, styleClass, isOpen]">
      <div v-if="!hideClose" class="modal__close">
        <button class="-plain close" @click="closeMe"><close></close></button>
      </div>

      <div class="modal__content">
        <div class="modal__header">
          <slot name="header"></slot>
        </div>

        <div class="modal__subheader">
          <slot name="subheader"></slot>
        </div>

        <div class="modal__main">
          <slot name="main"></slot>
        </div>
      </div>

      <div v-if="hssFooter" class="modal__footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Close from './icons/Close.vue';

export default {
  components: { Close },
  props: {
    openName: {
      type: String,
      required: true
    },
    styleClass: {
      type: String
    },
    hssFooter: {
      type: Boolean,
      default: false
    },
    hideClose: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapState({
      modalClass: state => state.Modals.modalClass,
      modal: state => state.Modals.modal
    }),
    isOpen() {
      if (this.modal.active && this.modal.openName === this.openName) {
        return 'isOpen';
      }
      return '';
    }
  },
  methods: {
    ...mapActions(['closeModal']),
    closeMe() {
      this.closeModal();
      this.$emit('modalClosed');
    }
  }
};
</script>
