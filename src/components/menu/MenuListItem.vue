<template>
  <li class="item">
    <div class="item-image" :style="`background-image: url(${item.image_urls.standard})`"></div>
    <h3>{{ item.name }}</h3>
    <div>{{ item.price }}</div>
    <!--<div class="action-buttons">
      <button>View Details</button>
      <button>Quick Add</button>
    </div>-->
  </li>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
  .item {
    list-style: none;
    width: 46%;
    margin-right: 3%;
    margin-bottom: 3%;

    &:nth-child(2n) {
      margin-right: 0;
    }

    &-image {
      width: 100%;
      height: 200px;
      margin-bottom: 1rem;
      background-color: lightgrey;
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
    }

    .action-buttons {
      padding-top: 1rem;
      border-top: 1px solid black;
    }
  }
</style>
