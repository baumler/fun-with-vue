<template>
  <div class="padding">
    <h1 class="textCentered">This page uses <a href="https://github.com/Botre/vue-sauce">vue-sauce</a> and <a href="https://github.com/creotip/vue-prism">vue-prism</a></h1>
    <p class="textCentered">I modified vue-sauce to include the "language" needed for vue-prism</p>
    <div class="item">
      <button v-sauce="'html'" class="btn">Primary Button</button>
    </div>

    <div class="item">
      <label for="inputTest" v-sauce="'html'">
        <span>Test Input</span>
        <input class="input" type="text" id="inputTest" placeholder="Test Input"/>
      </label>
    </div>

    <div class="item">
      <p>This button is pulled into from a component (ButtonPrimary)</p>
      <button-primary b-label="Primary Button" v-sauce="'html'"></button-primary>
    </div>

    <div class="item">
      <p>This button is also pulled into from a component (uses font awesome svg)</p>
      <button-primary b-label="Primary Button" b-icon="angle-right" v-sauce="'html'"></button-primary>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import StyleGuide from '../js/libs/vue-sauce';
import ButtonPrimary from '../components/buttons/ButtonPrimary.vue';

Vue.directive('sauce', StyleGuide);

export default {
  components: {
    ButtonPrimary
  }
};
</script>
