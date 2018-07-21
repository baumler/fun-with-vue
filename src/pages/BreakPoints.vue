<template xmlns:v-responsive="http://www.w3.org/1999/xhtml">
  <div class="content">
    <h1 class="textCentered">Vue Breakpoints</h1>

    <p class="textCentered">Breakpoints can be anything you want them to be. Set up in the main.js file</p>

    <h3 class="textCentered">Current: {{ whatSizeAmI }}</h3>

    <div class="container">
      <div class="component">
        <div class="component__header">
          <h3>Show at phone</h3>
        </div>
        <div class="component__block">
          <mq-layout mq="phone">
            &lt;mq-layout mq="phone" &gt;
          </mq-layout>
        </div>
      </div>

      <div class="component">
        <div class="component__header">
          <h3>Show at phone & tablet</h3>
        </div>
        <div class="component__block">
          <mq-layout :mq="['phone', 'tablet']">
            &lt;mq-layout :mq="['phone', 'tablet']" &gt;
          </mq-layout>
        </div>
      </div>

      <div class="component">
        <div class="component__header">
          <h3>Show at tablet</h3>
        </div>
        <div class="component__block">
          <mq-layout mq="tablet">
            &lt;mq-layout mq="tablet" &gt;
          </mq-layout>
        </div>
      </div>

      <div class="component">
        <div class="component__header">
          <h3>Show at tablet+</h3>
        </div>
        <div class="component__block">
          <mq-layout mq="tablet+">
            &lt;mq-layout mq="tablet+" &gt;
          </mq-layout>
        </div>
      </div>

      <div class="component">
        <div class="component__header">
          <h3>Show at desktop</h3>
        </div>
        <div class="component__block">
          <mq-layout mq="desktop">
            &lt;mq-layout mq="desktop" &gt;
          </mq-layout>
        </div>
      </div>

      <div class="component">
        <div class="component__header">
          <h3>Show at desktop & hd</h3>
        </div>
        <div class="component__block">
          <mq-layout :mq="['desktop', 'hd']">
            &lt;mq-layout :mq="['desktop', 'hd']" &gt;
          </mq-layout>
        </div>
      </div>

      <div class="component">
        <div class="component__header">
          <h3>Show at desktop+</h3>
        </div>
        <div class="component__block">
          <mq-layout mq="desktop+">
            &lt;mq-layout mq="desktop+" &gt;
          </mq-layout>
        </div>
      </div>

      <div class="component">
        <div class="component__header">
          <h3>Show at hd</h3>
        </div>
        <div class="component__block">
          <mq-layout mq="hd">
            &lt;mq-layout mq="hd" &gt;
          </mq-layout>
        </div>
      </div>

      <div class="component">
        <div class="component__header">
          <h3>Show at phone & hd</h3>
        </div>
        <div class="component__block">
          <mq-layout :mq="['phone', 'hd']">
            &lt;mq-layout :mq="['phone', 'hd']" &gt;
          </mq-layout>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

export default {
  computed: {
    whatSizeAmI() {
      return this.$mq;
    }
  }
};
</script>

<style lang="scss" scoped>
  .container {
    width: 80vw;
    max-width: 75rem;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }

  @media (min-width: 768px) {
    .container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  .component {
    box-shadow: 0 0 5px rgba(green, 0.5);
    border-radius: .4rem;
  }
  .component__header {
    padding: 1rem;
    border-bottom: 1px solid rgba(green, 0.3);
    text-align: center;

    h3 {
      margin: 0;
    }
  }
  .component__block {
    min-height: 50px;
    padding: 1rem;
    text-align: center;
  }
</style>
