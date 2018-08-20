<template>
  <div class="page-header">
    <span class="hamburger" v-click-outside="hideNavContainer">
      <button class="hamburger-btn" @click.prevent="toggleHamburger">
        <div></div>
        <div></div>
        <div></div>
      </button>
      <div v-show="hamburgerIsOpen" class="hamburger-dd">
        <main-nav @clickedLink="clickedLink"/>
      </div>
    </span>

    <div>Vue with Vue</div>

    <slot></slot>
  </div>
</template>

<script>
import MainNav from '@/components/navigation/MainNav';
import ClickOutside from 'vue-click-outside';

export default {
  directives: {
    ClickOutside
  },
  components: {
    MainNav
  },
  data() {
    return {
      hamburgerIsOpen: false
    };
  },
  methods: {
    toggleHamburger() {
      this.hamburgerIsOpen = !this.hamburgerIsOpen;
    },
    hideNavContainer() {
      this.hamburgerIsOpen = false;
    },
    clickedLink() {
      this.hideNavContainer();
    }
  }
};
</script>

<style lang="scss" scoped>
  .hamburger {
    position: relative;

    &-btn {
      position: relative;
      margin: 10px;
      width: 24px;
      height: 24px;
      background: transparent;

      div {
        content: "";
        position: absolute;
        left: 50%;
        width: 18px;
        height: 2px;
        border-radius: 5px;
        background: black;
        transform: translateX(-50%);

        &:first-child {
          top: 5px;
        }

        &:nth-child(2) {
          top: 50%;
          transform: translate3d(-50%, -50%, 0);
        }

        &:last-child {
          bottom: 5px;
        }
      }
    }

    &-dd {
      position: absolute;
      left: 0;
      top: -4px;
      width: 96vw;
      max-width: 200px;
      padding: 1rem;
      background-color: lightblue;
      border-radius: 10px;
      z-index: 50;
    }
  }
</style>
