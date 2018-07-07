<template>
  <div class="content">
    <h1 class="textCentered">Images</h1>
    <h5>Responsive Images</h5>
    <div class="image">
      <responsive-image
        :width-on-screen="50"
        :width-on-screen-tablet="100"
        :width-on-screen-smartphone="100"
        :image-url="'https://via.placeholder.com/%width%x%height%'"
        :image-ratio="16/9"
        :image-class="'myImg'"
        :mode="'all'"
      ></responsive-image>
    </div>
    <br/>
    <br/>
    <img class="lazuli" data-src="https://via.placeholder.com/200/200" alt="Basic example">
    <br/>
    <br/>
    <div class="background lazuli" data-src="https://via.placeholder.com/200/200">
      This div will lazyload https://via.placeholder.com/200/200 as a background image.
    </div>
  </div>
</template>

<script>
import ResponsiveImage from 'vue-responsive-image';
import Lazuli from '@jbreneman/lazuli-js';

export default {
  components: {
    ResponsiveImage
  },
  mounted() {
    const lazy = new Lazuli(); // eslint-disable-line
  }
};
</script>

<style lang="scss">
</style>
