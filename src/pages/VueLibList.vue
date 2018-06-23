<template>
  <div class="content">
    <h1>Vue Libraries</h1>
    <div class="lists">
      <h3>Vue Libraries I still want to example here</h3>
      <draggable v-model="remaining" :options="{group:'movies'}" class="dragArea" @update="update">
        <div v-for="remain in remaining" :key="remain.title" class="list-item drag-handle"><span class="dragMe"><font-awesome-icon icon="ellipsis-v"/></span>{{remain.title}} (<a :href="remain.url">url</a>)</div>
      </draggable>
      <h4>All Vue Libraries used on this site</h4>
      <draggable v-model="completed" :options="{group:'movies'}" class="dragArea">
        <div v-for="lib in completed" :key="lib.title" class="list-item">{{lib.title}} (<a :href="lib.url">url</a>)</div>
      </draggable>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Draggable from 'vuedraggable';

export default {
  data() {
    return {
      remaining: [
        {
          url: 'https://github.com/vue-bulma/click-outside',
          title: 'vue-click-outside'
        },
        {
          url: 'https://github.com/KABBOUCHI/vue-tippy',
          title: 'vue-tippy'
        },
        {
          url: 'https://github.com/robinvdvleuten/vuex-persistedstate',
          title: 'vuex-persistedstate'
        }
      ]
    };
  },
  computed: {
    ...mapState({
      completed: (state) => state.VueLibs.libsUsed
    })
  },
  methods: {
    ...mapActions([]),
    update(t) {
      console.log(t, t.target);
    }
  },
  components: {
    Draggable
  }
};
</script>

<style lang="scss">
  .list-item {
    display: flex;
    align-items: center;
    padding: 1rem;
    background-color: lightgray;
    border-bottom: 1px solid black;
    transition: all 1s;
    cursor: grab;

    &:first-of-type {
      border-top: 1px solid black;
    }

    &.drag-handle {
      cursor: auto;

      .dragMe {
        padding: 0 4px;
        margin-right: 8px;
        cursor: grab;
      }
    }
  }

  .dragArea {
    min-height: 10px;
  }

  .list-complete-enter, .list-complete-leave-active {
    opacity: 0.25;
  }
</style>
