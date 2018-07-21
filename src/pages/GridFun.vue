<template>
  <div class="content">
    <h1 class="textCentered">Personal Grid Template (uses vue-mq)</h1>

    <h3>Columns: 4 to 3 to 2 to 1</h3>
    <the-grid :columns="$mq | mq({ phone: 1, tablet: 2, desktop: 3, hd: 4 })" justify="start" alignment="start">
      <div class="flex flex-justify-center flex-align-center">Spot 1</div>
      <div class="flex flex-justify-center flex-align-center">Spot 2</div>
      <div class="flex flex-justify-center flex-align-center">Spot 3</div>
      <div class="flex flex-justify-center flex-align-center">Spot 4</div>
      <div class="flex flex-justify-center flex-align-center">Spot 5</div>
      <div class="flex flex-justify-center flex-align-center">Spot 6</div>
      <div class="flex flex-justify-center flex-align-center">Spot 7</div>
      <div class="flex flex-justify-center flex-align-center">Spot 8</div>
    </the-grid>
    <br/>
    <h3>Columns: 4 to 2 to 1</h3>
    <the-grid :columns="$mq | mq({ phone: 1, tablet: 2, desktop: 4 })" justify="start" alignment="start">
      <div class="flex flex-justify-center flex-align-center">Spot 1</div>
      <div class="flex flex-justify-center flex-align-center">Spot 2</div>
      <div class="flex flex-justify-center flex-align-center">Spot 3</div>
      <div class="flex flex-justify-center flex-align-center">Spot 4</div>
      <div class="flex flex-justify-center flex-align-center">Spot 5</div>
      <div class="flex flex-justify-center flex-align-center">Spot 6</div>
      <div class="flex flex-justify-center flex-align-center">Spot 7</div>
      <div class="flex flex-justify-center flex-align-center">Spot 8</div>
    </the-grid>
    <br/>
    <h3>Columns: 3 to 1</h3>
    <the-grid :columns="$mq | mq({ phone: 1, desktop: 3 })" justify="start" alignment="start">
      <div class="flex flex-justify-center flex-align-center">Spot 1</div>
      <div class="flex flex-justify-center flex-align-center">Spot 2</div>
      <div class="flex flex-justify-center flex-align-center">Spot 3</div>
      <div class="flex flex-justify-center flex-align-center">Spot 4</div>
      <div class="flex flex-justify-center flex-align-center">Spot 5</div>
      <div class="flex flex-justify-center flex-align-center">Spot 6</div>
      <div class="flex flex-justify-center flex-align-center">Spot 7</div>
      <div class="flex flex-justify-center flex-align-center">Spot 8</div>
    </the-grid>
    <br/>
    <h3>Columns: 2 to 1 with inner flex items</h3>
    <the-grid :columns="$mq | mq({ phone: 1, desktop: 2 })" justify="start" alignment="start">
      <div class="flex flex-justify-between flex-align-center flex-wrap">
        <h4 class="textCentered" style="width: 100%">Spot 1</h4>
        <div class="borderAll">F1</div>
        <div class="borderAll">F2</div>
        <div class="borderAll">F3</div>
        <div class="borderAll">F4</div>
      </div>
      <div class="flex flex-justify-between flex-align-center flex-wrap">
        <h4 class="textCentered" style="width: 100%">Spot 2</h4>
        <div class="borderAll">F1</div>
        <div class="borderAll">F2</div>
        <div class="borderAll">F3</div>
        <div class="borderAll">F4</div>
      </div>
      <div class="flex flex-justify-between flex-align-center flex-wrap">
        <h4 class="textCentered" style="width: 100%">Spot 3</h4>
        <div class="borderAll">F1</div>
        <div class="borderAll">F2</div>
        <div class="borderAll">F3</div>
        <div class="borderAll">F4</div>
      </div>
      <div class="flex flex-justify-between flex-align-center flex-wrap">
        <h4 class="textCentered" style="width: 100%">Spot 4</h4>
        <div class="borderAll">F1</div>
        <div class="borderAll">F2</div>
        <div class="borderAll">F3</div>
        <div class="borderAll">F4</div>
      </div>
    </the-grid>

  </div>
</template>

<script>
import TheGrid from '@/components/TheGrid';

export default {
  components: { TheGrid },
  data() {
    return {
    };
  }
};
</script>

<style lang="scss">
  .borderAll {
    padding: 1rem;
    border: 1px solid green;
  }
</style>
