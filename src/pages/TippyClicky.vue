<template>
  <div class="content">
    <h1 class="textCentered">
      This page uses <a :href="usedhere[0].url">{{usedhere[0].title}}</a> (relies on <a href="https://atomiks.github.io/tippyjs/">tippy.js</a>) and
      <a :href="usedhere[1].url">{{usedhere[1].title}}</a> and
      <a :href="usedhere[2].url">{{usedhere[2].title}}</a>
    </h1>
    <h3>Click on the button to toggle the menu (then click outside the menu to see it close)</h3>
    <div class="menu">
      <button class="btn" v-click-outside="hideMenuContainer" @click="toggleMenuContainer">Menu</button>
      <div v-show="showMenuContainer" class="menuContainer">
        <ul>
          <li v-for="p in 5" :key="p">{{p}}. Item</li>
        </ul>
      </div>
    </div>
    <br/>
    <br/>
    <h3>Hover over (or tab to) these buttons for a cool tips!</h3>
    <div class="inlines">
      <button class="btn" v-tippy="{ placement : 'right',  arrow: true }" title="A simple title here">Hover over me</button>
      <button class="btn" v-tippy="{ html : '#contentpopup1',  placement : 'bottom',  arrow: true }">Hover over me</button>
      <div id="contentpopup1" class="hidden">I am a separate div on the page!</div>
      <a href="#" v-tippy="{ html : '#contentpopup2', interactive : true, reactive : true }">Hover over me (a link)</a>
      <div id="contentpopup2">
        <div>
          <h3>Header</h3>
          <p style="color: pink"> {{ message }} - data binding</p>
          <button @click="clicked">Click</button>
          <button @click="reset">Reset</button>
        </div>
      </div>
    </div>
    <br/>
    <br/>
    <h3>Floating labels</h3>
    <float-label>
      <input type="email" placeholder="E-mail">
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
import { mapState } from 'vuex';
import ClickOutside from 'vue-click-outside';

Vue.use(VueFloatLabel);

export default {
  directives: { ClickOutside, VueFloatLabel },
  data() {
    return {
      showMenuContainer: false,
      message: 'I have reactive content and html elements'
    };
  },
  computed: {
    ...mapState({
      libs: (state) => state.VueLibs.libsUsed
    }),
    usedhere() {
      const tip = this.libs.filter(t => t.title === 'vue-tippy')[0];
      const coo = this.libs.filter(c => c.title === 'vue-click-outside')[0];
      const fl = this.libs.filter(f => f.title === 'vue-float-label')[0];
      return [tip, coo, fl];
    }
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
  },
  mounted () {
    // todo:: fix it so it doesn't close when clicking in the menu itself!!!!
  }
};
</script>

<style lang="scss">
  .content {
    padding: 0 1rem;
  }

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
