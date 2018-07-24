<template>
  <div class="content">
    <page-header>
      <template slot="title">This page uses vue-tippy, vue-click-outside, vue-float-label</template>
    </page-header>

    <h3>Click on the button to toggle the menu (then click outside the menu to see it close)</h3>
    <div class="menu" v-click-outside="hideMenuContainer">
      <button class="btn" @click="toggleMenuContainer">Menu</button>
      <div v-show="showMenuContainer" class="menuContainer">
        <ul>
          <li v-for="p in 5" :key="p">{{p}}. Item</li>
        </ul>
      </div>
    </div>
    <br/>
    <br/>
    <h3>Hover over (or tab to) these buttons for a cool tips! (todo, trap tabs inside/outside tips)</h3>
    <div class="inlines">
      <button class="btn" v-tippy="{ placement : 'right',  arrow: true }" title="A simple title here">Hover over me</button>
      <button class="btn" v-tippy="{ html : '#contentpopup1',  placement : 'bottom',  arrow: true }">Hover over me</button>
      <div id="contentpopup1" class="hidden">I am a separate div on the page!</div>
      <a href="#" v-tippy="{ html : '#contentpopup2', interactive : true, reactive : true }">Hover over me (a link)</a>
      <focus-lock :disabled="!focusLock">
        <div id="contentpopup2">
          <div>
            <h3>Header</h3>
            <p style="color: pink"> {{ message }} - data binding</p>
            <button @click="clicked">Click</button>
            <button @click="reset">Reset</button>
          </div>
        </div>
      </focus-lock>
    </div>
    <br/>
    <br/>
    <h3>Floating labels</h3>
    <float-label for="email">
      <input type="email" id="email" name="email" class="retFocus" placeholder="E-mail">
    </float-label>
    <br/><br/>
    <float-label>
      <textarea placeholder="Comment"></textarea>
    </float-label>
    <div class="styled">
      <p>Add some different styling</p>
      <float-label>
        <input type="email" placeholder="E-mail">
      </float-label>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import VueFloatLabel from 'vue-float-label';
import ClickOutside from 'vue-click-outside';
import FocusLock from 'vue-focus-lock';
import PageHeader from '@/components/PageHeader';

Vue.use(VueFloatLabel);

export default {
  directives: { ClickOutside, VueFloatLabel },
  components: {
    PageHeader,
    FocusLock
  },
  data() {
    return {
      showMenuContainer: false,
      message: 'I have reactive content and html elements',
      focusLock: false,
      focusReturn: '.retFocus'
    };
  },
  computed: {
  },
  methods: {
    toggleMenuContainer() {
      this.showMenuContainer = !this.showMenuContainer;
    },
    hideMenuContainer() {
      this.showMenuContainer = false;
    },
    clicked() {
      this.message = 'You have clicked the button in the tooltip';
    },
    reset() {
      this.message = 'I have reactive content and html elements';
    }
  }
};
</script>

<style lang="scss">
  h1 {
    padding: 0 2rem;
  }

  .menu {
    position: relative;
  }

  .inlines {
    .btn {
      display: inline-flex;
      margin-right: 2rem;
    }
  }

  .menuContainer {
    position: absolute;
    top: 36px;
    left: 10px;
    padding: 1rem;
    border: 1px solid black;
    background: tan;
    z-index: 100;

    ul {
      margin: 0;
      padding: 0;
      list-style: none;
    }
  }

  .hidden {
    display: none;
  }

  .styled {
    .vfl-label {
      text-transform: uppercase;
    }

    .vfl-label-on-input {
      top: -1em;
    }

    .vfl-label-on-focus {
      color: #ff851b;
    }

    .vfl-label + input {
      padding-left: 0;
      font-size: 100%;
      border: 0;
      border-bottom: 2px solid #aaa;
      transition: border 0.2s;
    }

    .vfl-label-on-focus + input {
      border-bottom: 2px solid #ff851b;
    }
  }
</style>
