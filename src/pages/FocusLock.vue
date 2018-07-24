<template>
  <div class="content">
    <page-header>
      <template slot="title">Vue Focus Lock</template>
    </page-header>

    <div>
      <button>I do nothing!</button><br/><br/>
      some fun stuff here<br/><br/>
      <button class="return2focus">I also do nothing, but #2 returns focus here</button><br/>
      <br/><br/>
      <button @click.prevent="openFocusModal">Open modal #1 to see focus trap</button><br/>

      <input class="focustrap" type="text" placeholder="focus from #1 returns here!"/>
      <br/>
      <button>Nothing here</button><br/>
      <br/>
      <button @click.prevent="openFocus2Modal">Open modal #2 to see focus trap</button><br/>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import FocusLock from 'vue-focus-lock';
import PageHeader from '@/components/PageHeader';
import Modal from '../components/TheModal.vue';

export default {
  components: {
    PageHeader,
    FocusLock,
    Modal
  },
  methods: {
    ...mapActions(['openModal']),
    openFocusModal() {
      this.openModal(['modalFocus', '.focustrap']);
    },
    openFocus2Modal() {
      this.openModal(['modalSecondFocus', '.return2focus']);
    }
  }
};
</script>
