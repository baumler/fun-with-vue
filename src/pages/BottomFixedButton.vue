<template>
  <div class="content hasFixedBottom">
    <div class="largeHeight bgRed">
      Really long Section 1
    </div>
    <div class="largeHeight bgTan">
      Really long Section 2
    </div>

    <div class="fixedBottom">
      <button>Fixed to bottom</button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState([])
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
  .hasFixedBottom {
    padding-bottom: calc(52px + 1rem);
    overflow: auto;
  }

  .fixedContent {}

  .largeHeight {
    height: 140vh;
  }

  .bgRed {
    background-color: indianred;
  }

  .bgTan {
    background-color: tan;
  }

  .fixedBottom {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 0.5rem;
    background: white;
    border-top: 1px solid black;

    button {
      width: 100%;
    }
  }
</style>
