<template>
  <label :for="iId" :class="[iCLass, {'error' : errors.has(iName)}]">
    <span class="label">{{ iLabel }}</span>
    <slot name="input"></slot>
    <div v-show="errors.has(iName)" class="errorMessage">{{ errors.first(iName) }}</div>
  </label>
</template>

<script>
export default {
  inject: ['$validator'],
  props: {
    iName: {
      type: String,
      required: true
    },
    iId: {
      type: String,
      required: true
    },
    iLabel: {
      type: String,
      required: true
    },
    iCLass: {
      type: String,
      required: false
    }
  }
};
</script>
