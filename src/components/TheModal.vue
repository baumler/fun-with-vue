<template>
  <transition-group v-show="modal" name="fade" appear>
    <div :class="['modal', className, isOpen]" key="modal">
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

    <div class="modal-overlay" key="overlay"></div>
  </transition-group>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
import Close from './icons/Close.vue';

export default {
  components: { Close },
  props: {
    className: {
      type: String,
      required: true
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
      modalClass: state => state.Common.modalClass
    }),
    ...mapGetters(['modal']),
    isOpen() {
      if (this.modal && this.modalClass === this.className) {
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
