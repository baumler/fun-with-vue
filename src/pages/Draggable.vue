<template>
  <div class="content">
    <h1 class="textCentered">This page uses <a href="https://github.com/SortableJS/Vue.Draggable">Vuedraggable</a> which relies on <a href="https://github.com/RubaXa/Sortable">Sortable.js</a></h1>
    <div class="lists">
      <h3>Updates order (with transition)</h3>
      <draggable v-model="books" @update="update">
        <transition-group name="list-complete">
          <div v-for="book in books" :key="book.id" class="list-item">{{book.order}}. {{book.title}} (id: {{book.id}})</div>
        </transition-group>
      </draggable>
    </div>

    <div class="lists">
      <h3>Move from one list to another</h3>
      <draggable v-model="movies" :options="{group:'movies'}" class="dragArea">
        <div v-for="movie in movies" :key="movie.id" class="list-item">{{movie.order}}. {{movie.title}} (id: {{movie.id}})</div>
      </draggable>
      <h4>Move movies from above to here and back</h4>
      <draggable v-model="likedMovies" :options="{group:'movies'}" class="dragArea">
        <div v-for="movie in likedMovies" :key="movie.id" class="list-item">{{movie.order}}. {{movie.title}} (id: {{movie.id}})</div>
      </draggable>
    </div>

    <div class="lists">
      <h3>Can only drag from icon (drag handle)</h3>
      <draggable v-model="games" :options="{handle: '.dragMe'}">
        <transition-group name="list-complete">
          <div v-for="game in games" :key="game.id" class="list-item drag-handle"><img class="dragMe" src="https://png.icons8.com/metro/50/000000/drag-reorder.png"> &nbsp; {{game.order}}. {{game.title}} (id: {{game.id}})</div>
        </transition-group>
      </draggable>
    </div>

  </div>
</template>

<script>
import Draggable from 'vuedraggable'

export default {
  data() {
    return {
      books: [
        {
          id: 1,
          title: 'Gone with the Wind',
          order: 0
        },
        {
          id: 2,
          title: 'Sherlock Holmes',
          order: 1
        },
        {
          id: 3,
          title: 'Mists of Avalon',
          order: 2
        }
      ],
      movies: [
        {
          id: 1,
          title: 'Gone in 60 seconds',
          order: 0
        },
        {
          id: 2,
          title: 'The Lord of the Rings',
          order: 1
        },
        {
          id: 3,
          title: 'Top Gun',
          order: 2
        }
      ],
      likedMovies: [
        {
          id: 4,
          title: 'Harry Potter',
          order: 3
        }
      ],
      games: [
        {
          id: 1,
          title: 'WoW',
          order: 0
        },
        {
          id: 2,
          title: 'AoC',
          order: 1
        },
        {
          id: 3,
          title: 'DnD',
          order: 2
        }
      ]
    }
  },
  methods: {
    update() {
      for (let i in this.books) {
        this.books[i].order = i
      }
    }
  },
  components: {
    Draggable
  }
}
</script>

<style lang="scss" scoped>
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
        height: 20px;
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
