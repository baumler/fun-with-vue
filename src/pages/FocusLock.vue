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
      <br/>
      <vue-select placeholder="Choose" :options="options" :clearable="false"/>
      <br/>
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
import VueSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';

export default {
  data() {
    return {
      options: [
        {
          value: '-1',
          label: 'Select an Item'
        },
        {
          value: 'item01',
          label: 'Item 1'
        },
        {
          value: 'item02',
          label: 'Item 2'
        },
        {
          value: 'item03',
          label: 'Item 3'
        },
        {
          value: 'item04',
          label: 'Item 4'
        }
      ]
    };
  },
  components: {
    PageHeader,
    FocusLock,
    Modal,
    VueSelect
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
