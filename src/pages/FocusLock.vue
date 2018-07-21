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
    };
  },
  methods: {
    ...mapActions(['openModal']),
    openFocusModal() {
      this.openModal(['modalFocus', '.focustrap']);
    }
  }
};
</script>
