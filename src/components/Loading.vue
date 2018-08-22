<template>
  <transition-group v-show="loader" name="fade" appear>
    <div class="loading" key="spinner">
      <semipolar-spinner
        :animation-duration="spinnerOptions.duration"
        :size="spinnerOptions.size"
        :color="spinnerOptions.color"
      />
    </div>
    <div class="overlay" key="overlay"></div>
  </transition-group>
</template>

<script>
import { mapGetters } from 'vuex';
import { SemipolarSpinner } from 'epic-spinners';

export default {
  components: {
    SemipolarSpinner
  },
  data() {
    return {
      spinnerOptions: {
        duration: 3000,
        size: 120,
        color: 'white'
      }
    };
  },
  computed: {
    ...mapGetters([
      'loader'
    ])
  }
};
</script>

<style lang="scss" scoped>
  .loading {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    z-index: 1001;
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 1000;
  }
</style>
