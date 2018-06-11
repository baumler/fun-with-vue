import axios from 'axios';
axios.defaults.baseURL = 'https://apx-staging.novadine.com/mp/ndXTAL/';

const Menu = {
  getMenus() {
    return new Promise((resolve, reject) => {
      axios.get('getMenus', {
        params: {
          restaurantId: 1964
        }
      })
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  getMenuCategories() {
    return new Promise((resolve, reject) => {
      axios.get('getLocationMenuCategories_JSON', {
        params: {
          restaurantId: 1964,
          menuId: 1,
          serviceTypeId: 2
        }
      })
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  getMenuCatItems(obj) {
    return new Promise((resolve, reject) => {
      axios.get('getCategoryItemDetail_JSON', {
        params: {
          restaurantId: 1964,
          menuId: 1,
          categoryId: obj.catId,
          itemId: obj.itemId,
          serviceTypeId: 2,
          include_unavailable: true,
          use_full_variants: true
        }
      })
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
};

export default Menu;
