<template>
  <div class="padding">
    <h1 class="textCentered">
      This page uses <a href="https://github.com/Botre/vue-sauce">vue-sauce</a>, <a href="https://github.com/creotip/vue-prism">vue-prism</a>, and <a href="https://github.com/baianat/vee-validate">vee-validate</a>
    </h1>
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
        <label for="first_name" :class="{'error' : errors.has('first name')}" v-sauce="'html'">
          First Name
          <input type="text" id="first_name" name="first name" aria-label="First name" v-model="first_name" placeholder="First Name"/>
          <div v-show="errors.has('first name')" class="errorMessage">{{ errors.first('first name') }}</div>
        </label>
      </div>

      <div class="item">
        <input-text i-id="fName" i-name="first name comp" i-label="First Name Component" v-sauce="'html'">
          <input
              slot="input"
              type="text"
              id="fName"
              name="first name comp"
              aria-label="First Name Component"
              placeholder="First Name (from component)"
              v-model="comp_first_name"
              v-validate="'required'"/>
        </input-text>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import StyleGuide from '../js/libs/vue-sauce';
import ButtonPrimary from '../components/buttons/ButtonPrimary.vue';
import InputText from '../components/forms/InputText.vue';

Vue.directive('sauce', StyleGuide);

export default {
  components: {
    ButtonPrimary,
    InputText
  },
  data() {
    return {
      first_name: '',
      comp_first_name: 'Bobby'
    };
  }
};
</script>
