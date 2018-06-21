<template>
  <button :class="['btn', bClass]">
    {{ bLabel }}
    <span v-if="bIcon"><font-awesome-icon :icon="bIcon"/></span>
  </button>
</template>

<script>
export default {
  props: {
    bClass: {
      type: String,
      required: false,
      default: ''
    },
    bLabel: {
      type: String,
      required: true
    },
    bIcon: {
      type: String,
      required: false,
      default: ''
    }
  }
};
</script>
