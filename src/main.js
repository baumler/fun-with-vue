import Vue from 'vue';
import Affix from 'vue-affix';
import ScrollActive from 'vue-scrollactive';
import App from './App';
import router from './router';
import store from './store';
import Prism from 'vue-prism';
import 'prismjs/themes/prism.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleRight, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faAngleRight, faAngleDown);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.use(Affix);
Vue.use(ScrollActive);
Vue.use(Prism);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
/* eslint-enable no-new */
