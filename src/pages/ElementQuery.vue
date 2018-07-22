<template>
  <div class="content">
    <page-header>
      <template slot="title">vue-element-query & eqio</template>
      <template slot="descr">vue-element-query is component size breakpoints (defined in each template)</template>
    </page-header>

    <div class="centerme">
      <h3>Defined as:</h3>
      <ul>
        <li>small: { maxWidth: 499 }</li>
        <li>medium: { minWidth: 500, maxWidth: 1199 }</li>
        <li>large: { minWidth: 1200 }</li>
        <li>potato: { minHeight: 123, maxHeight: 1234 }</li>
      </ul>
    </div>

    <div class="container">
      <div class="component ">
        <div class="component__header">
          <h3>Always shown</h3>
        </div>
        <div class="component__block">
          <div>I'm  always rendered</div>
        </div>
      </div>

      <div class="component">
        <div class="component__header">
          <h3>Only visible when my component has a medium size</h3>
        </div>
        <div class="component__block">
          <div v-if="$eq.medium">Only visible when my main component has a medium size.</div>
        </div>
      </div>

      <div class="component">
        <div class="component__header">
          <h3>Visible on both medium and large size.</h3>
        </div>
        <div class="component__block">
          <div v-if="$eq.medium || $eq.large">
            &lt;div v-if="$eq.medium || $eq.large"&gt;&lt;/div&gt;
          </div>
        </div>
      </div>

      <div class="component">
        <div class="component__header">
          <h3>Small</h3>
        </div>
        <div class="component__block">
          <div>width: {{size.width}}</div>
          <div :class="{'very-tiny': $eq.small}">I get a special class when my main component is small.</div>
        </div>
      </div>
    </div>

    <h3 class="textCentered">Eqio Examples</h3>
    <div class="container single">
      <div class="component getmysize">
        <div class="component__header">
          <p>Current container width: {{ eleWidth }}</p>
        </div>
        <div class="component__block"></div>
      </div>

      <div class="component">
        <div class="component__header">
          <h3>Small (max 499)</h3>
        </div>
        <div class="component__block">
          <div
            class="media-object eqio"
            data-eqio-sizes='["<499"]'
            data-eqio-prefix="media-object"
          >Small</div>
        </div>
      </div>

      <div class="component">
        <div class="component__header">
          <h3>Medium (max 400, min 700)</h3>
        </div>
        <div class="component__block">
          <div
            class="media-object eqio"
            data-eqio-sizes='["<400", ">700"]'
            data-eqio-prefix="media-object"
          >Medium</div>
        </div>
      </div>

      <div class="component">
        <div class="component__header">
          <h3>Large (min 1200)</h3>
        </div>
        <div class="component__block">
          <div
            class="media-object eqio"
            data-eqio-sizes='[">1200"]'
            data-eqio-prefix="media-object"
          >Large</div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import Eqio from 'eqio';
import PageHeader from '@/components/PageHeader';

export default {
  components: {
    PageHeader
  },
  eq: {
    breakpoints: {
      small: { maxWidth: 499 },
      medium: { minWidth: 500, maxWidth: 1199 },
      large: { minWidth: 1200 },
      potato: { minHeight: 123, maxHeight: 1234 }
    }
  },
  data() {
    return {
      eleWidth: 0,
      eqioWidths: {
        sm: ['<499'], // < is max width, > is min width
        med: ['>500', '<1199'],
        lg: ['>1200']
      }
    };
  },
  mounted() {
    const mediaObject = new Eqio(document.querySelector('.media-object')); // eslint-disable-line

    const ele = document.querySelector('.getmysize');
    this.eleWidth = ele.offsetWidth;

    window.addEventListener('resize', () => {
      this.eleWidth = ele.offsetWidth;
    });
  }
};
</script>

<style lang="scss" scoped>
  .centerme {
    width: 400px;
    margin: 1rem auto 2rem auto;
  }

  .container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
    width: 80vw;
    max-width: 80rem;
    margin: 0 auto;

    &.single {
      grid-template-columns: 1fr;
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

  .very-tiny {
    color: red;
  }

  .media-object-eqio-\<400 {
    /* customizations when less than or equal to 400px */
    color: blue;
  }

  .media-object-eqio-\<499 {
    /* customizations when less than or equal to 400px */
    background: blue;
    color: white;
  }

  .media-object-eqio-\>700 {
    /* customizations when greater than or equal to 700px */
    color: purple;
  }

  .media-object-eqio-\>1200 {
    background: gray;
  }
</style>
