<template>
  <div class="content">
    <div class="menu" v-if="isLoaded">
      <page-header>
        <template slot="title">This page uses vue-affix, vue-scrollactive and vue-announce (screen reader lib)</template>
      </page-header>

      <div class="flex">
        <aside class="menu-sidebar">
          <affix class="menu-sidebar-content" relative-element-selector="#menu-cats" :offset="{top: 100, bottom: 80}">
            <div class="menu-label">
              <h2>Click on Menu Options</h2>
            </div>
            <scrollactive class="menu-category-list" active-class="active" :offset="42" :modify-url="false" :duration="800">
              <a v-for="cat in cats" :key="cat.catid" :href="'#'+cat.catid" class="scrollactive-item">{{ cat.category }}</a>
            </scrollactive>
          </affix>
        </aside>

        <div class="menu-content">
          <h2>Or just scroll through Menu Items</h2>
          <div id="menu-cats" class="flex flex-column flex-justify-between flex-align-stretched">
            <section v-for="category in cats" :key="category.catid" :id="category.catid">
              <h1>{{ category.category }}</h1>
              <div v-for="(subcat, index) in category.childItems" :key="index">
                <h3 v-if="category.childItems.length > 1">{{ subcat.plural_selection_label.toUpperCase() }}</h3>
                <ul class="menu-list flex">
                  <menu-list-item v-for="item in subcat.pick_list_items" :key="item.itemid" :item="item"></menu-list-item>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
    <div v-else><vue-announcer/></div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import API from '@/api/menu';
import PageHeader from '@/components/PageHeader';
import MenuListItem from '@/components/menu/MenuListItem';

export default {
  data () {
    return {
      isLoaded: false,
      cats: [],
      menuCats: []
    };
  },
  components: {
    PageHeader,
    MenuListItem
  },
  methods: {
    ...mapActions([
      'showLoader',
      'hideLoader'
    ]),
    menuItems(category) {
      this.cats.forEach((cat) => {
        if (cat.catid === category.catid) {
          cat.childItems = category.variants[0].pick_lists;
        }
      });
    }
  },
  mounted() {
    this.showLoader();
    this.$announcer.set('Loading Menus');
    API.getMenuCategories()
      .then((result) => {
        console.log(result);
        result.forEach((cat) => {
          if (cat.bulk_itemid !== null) {
            this.cats.push(cat);

            API.getMenuCatItems({ catId: cat.catid, itemId: cat.bulk_itemid })
              .then((response) => {
                this.menuCats.push('done');
                this.menuItems(response);

                if (this.menuCats.length === this.cats.length) {
                  console.log('hey');
                  this.hideLoader();
                  this.isLoaded = true;
                }
              })
              .catch((err) => {
                console.log(err);
              });
          }
        });
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status === 404) {
          this.$_error('404', {
            menu_cat: 'nothing here, just testing'
          });
        }
      });
  }
};
</script>

<style lang="scss" scoped>
  @import "../scss/components/menu";
</style>
