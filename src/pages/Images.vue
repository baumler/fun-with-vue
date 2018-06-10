<template>
  <div>
    <h1>Images</h1>
    <h5>Responsive Images</h5>
    <responsive-image
      :width-on-screen="50"
      :width-on-screen-tablet="100"
      :width-on-screen-smartphone="100"
      :image-url="'https://via.placeholder.com/%width%x%height%'"
      :image-ratio="16/9"
      :image-class="'myImg'"
      :mode="'all'"
    ></responsive-image>
    <br/>
    <br/>
  </div>
</template>

<script>
import ResponsiveImage from 'vue-responsive-image'

export default {
  components: {
    ResponsiveImage
  }
}
</script>

<style lang="scss" scoped>
</style>
