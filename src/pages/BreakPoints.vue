<template>
  <div class="content">
    <h1 class="textCentered">Vue Breakpoints</h1>
    <p class="textCentered">Available options are: small, mediumAndBelow, medium, mediumAndAbove, largeAndBelow, large</p>
    <div class="container">
      <div class="component">
        <div class="component__header">
          <h3>Hide at large</h3>
        </div>
        <div class="component__block">
          <hide-at breakpoint="large">
            <div>
              &lt;hide-at breakpoint="large"&gt; Content &lt;/hide-at&gt;
            </div>
          </hide-at>
        </div>
      </div>
      <div class="component">
        <div class="component__header">
          <h3>Show at large</h3>
        </div>
        <div class="component__block">
          <show-at breakpoint="large">
            <div>
              &lt;show-at breakpoint="large"&gt; Content &lt;/show-at&gt;
            </div>
          </show-at>
        </div>
      </div>
      <div class="component">
        <div class="component__header">
          <h3>Hide at large and below (aka: never)</h3>
        </div>
        <div class="component__block">
          <hide-at breakpoint="largeAndBelow">
            <div>
              &lt;hide-at breakpoint="largeAndBelow"&gt; Content &lt;/hide-at&gt;
            </div>
          </hide-at>
        </div>
      </div>
      <div class="component">
        <div class="component__header">
          <h3>Show at large and below (aka: always)</h3>
        </div>
        <div class="component__block">
          <show-at breakpoint="largeAndBelow">
            <div>
              &lt;show-at breakpoint="largeAndBelow"&gt; Content &lt;/show-at&gt;
            </div>
          </show-at>
        </div>
      </div>

      <div class="component">
        <div class="component__header">
          <h3>Show at medium and above</h3>
        </div>
        <div class="component__block">
          <show-at breakpoint="mediumAndAbove">
            <div>
              &lt;show-at breakpoint="mediumAndAbove"&gt; Content &lt;/show-at&gt;
            </div>
          </show-at>
        </div>
      </div>
      <div class="component">
        <div class="component__header">
          <h3>Hide at medium and above</h3>
        </div>
        <div class="component__block">
          <hide-at breakpoint="mediumAndAbove">
            <div>
              &lt;hide-at breakpoint="mediumAndAbove"&gt; Content &lt;/hide-at&gt;
            </div>
          </hide-at>
        </div>
      </div>

      <div class="component">
        <div class="component__header">
          <h3>Hide at medium</h3>
        </div>
        <div class="component__block">
          <hide-at breakpoint="medium">
            <div>
              &lt;hide-at breakpoint="medium"&gt; Content &lt;/hide-at&gt;
            </div>
          </hide-at>
        </div>
      </div>
      <div class="component">
        <div class="component__header">
          <h3>Show at medium</h3>
        </div>
        <div class="component__block">
          <show-at breakpoint="medium">
            <div>
              &lt;show-at breakpoint="medium"&gt; Content &lt;/show-at&gt;
            </div>
          </show-at>
        </div>
      </div>

      <div class="component">
        <div class="component__header">
          <h3>Show at medium and below</h3>
        </div>
        <div class="component__block">
          <show-at breakpoint="mediumAndBelow">
            <div>
              &lt;show-at breakpoint="mediumAndBelow"&gt; Content &lt;/show-at&gt;
            </div>
          </show-at>
        </div>
      </div>
      <div class="component">
        <div class="component__header">
          <h3>Hide at medium and below</h3>
        </div>
        <div class="component__block">
          <hide-at breakpoint="mediumAndBelow">
            <div>
              &lt;hide-at breakpoint="mediumAndBelow"&gt; Content &lt;/hide-at&gt;
            </div>
          </hide-at>
        </div>
      </div>

      <div class="component">
        <div class="component__header">
          <h3>Show at small</h3>
        </div>
        <div class="component__block">
          <show-at breakpoint="small">
            <div>
              &lt;show-at breakpoint="small"&gt; Content &lt;/show-at&gt;
            </div>
          </show-at>
        </div>
      </div>
      <div class="component">
        <div class="component__header">
          <h3>Hide at small</h3>
        </div>
        <div class="component__block">
          <hide-at breakpoint="small">
            <div>
              &lt;hide-at breakpoint="small"&gt; Content &lt;/hide-at&gt;
            </div>
          </hide-at>
        </div>
      </div>

      <div class="component">
        <div class="component__header">
          <h3>Custom breakpoints</h3>
        </div>
        <div class="component__block">
          Defaults are
          <ul>
            <li>small:744</li>
            <li>medium: 1128</li>
            <li>large: Infinity</li>
          </ul>
        </div>
      </div>
      <div class="component">
        <div class="component__header">
          <h3>Custom breakpoints</h3>
        </div>
        <div class="component__block">
          Using
          <ul>
            <li>small:620</li>
            <li>medium: 1280</li>
            <li>large: 1600</li>
          </ul>
        </div>
      </div>
      <div class="component">
        <div class="component__header">
          <h3>Show at Medium - Custom breakpoints</h3>
        </div>
        <div class="component__block">
          <show-at :breakpoints="{small: 620, medium: 1280, large: 1600}" breakpoint="medium">
            <div>
              &lt;show-at breakpoints="{small: 620, medium: 1280, large: 1600}" breakpoint="medium"&gt; Content &lt;/show-at&gt;
            </div>
          </show-at>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {showAt, hideAt} from 'vue-breakpoints';

export default {
  components: { hideAt, showAt }
};
</script>

<style lang="scss" scoped>
  .container {
    max-width:75rem;
    margin:0 auto;
    display:flex;
    flex-flow:row wrap;
    justify-content:center;
  }
  .container > * {
    flex:0 0 100%;
  }
  @media (min-width:744px) {
    .container > * {
      flex:0 0 33.33%;
    }
  }
  .component {
    box-shadow:0 0 5px rgba(green, 0.5);
    margin:2rem;
    border-radius:.4rem;
  }
  .component__header {
    padding: 1rem;
    border-bottom:1px solid rgba(green, 0.3);
    text-align: center;

    h3 {
      margin: 0;
    }
  }
  .component__block {
    padding:2rem;
  }
  textarea {
    border: none;
    background-color: white;
    width: 100%;
    resize: none;
    text-align: center;
  }
</style>
