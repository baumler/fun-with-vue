<template>
  <div class="content">
    <page-header>
      <template slot="title">This page uses vue-sauce, vue-prism, and vee-validate</template>
    </page-header>

    <p class="textCentered">I modified vue-sauce to allow a prop for the "language" needed for vue-prism</p>

    <div class="grid -bordered -max2">
      <div class="item -spanCols2">
        <button v-sauce="'html'" class="btn">Primary Button</button>
      </div>

      <div class="item">
        <p>This button is pulled into from a component (ButtonPrimary)</p>
        <button-primary b-label="Primary Button" v-sauce="'html'"></button-primary>
      </div>

      <div class="item">
        <p>This button is also pulled into from a component (uses font awesome svg)</p>
        <button-primary b-label="Primary Button" b-icon="angle-right" v-sauce="'html'"></button-primary>
      </div>

      <div class="item">
        <p>This input has validation</p>
        <label for="first_name" :class="{'error' : errors.has('first name')}" v-sauce="'html'">
          <span class="label">First Name</span>
          <input type="text" id="first_name" name="first name" aria-label="First name" v-model="first_name" placeholder="First Name" v-validate="'required'"/>
          <div v-show="errors.has('first name')" class="errorMessage">{{ errors.first('first name') }}</div>
        </label>
      </div>

      <div class="item">
        <p>This input is a component and has validation</p>
        <input-text i-id="last_name" i-name="last name comp" i-label="Last Name" v-sauce="'html'">
          <input
              slot="input"
              type="text"
              id="last_name"
              name="last name comp"
              aria-label="Last Name"
              placeholder="Last Name"
              v-model="last_name"
              v-validate="'required'"/>
        </input-text>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import StyleGuide from '../js/libs/vue-sauce';
import PageHeader from '@/components/PageHeader';
import ButtonPrimary from '../components/buttons/ButtonPrimary.vue';
import InputText from '../components/forms/InputText.vue';

Vue.directive('sauce', StyleGuide);

export default {
  components: {
    PageHeader,
    ButtonPrimary,
    InputText
  },
  data() {
    return {
      first_name: '',
      last_name: 'Smith'
    };
  }
};
</script>
