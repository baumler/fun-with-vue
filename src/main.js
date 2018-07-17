import Vue from 'vue';
import Affix from 'vue-affix';
import ScrollActive from 'vue-scrollactive';
import VeeValidate from 'vee-validate';
import { sync } from 'vuex-router-sync'; // adds module to vuex store
import Prism from 'vue-prism';
import VueTippy from 'vue-tippy';
import VueAnnouncer from 'vue-announcer';
import vBlur from 'v-blur';

// css files
import 'prismjs/themes/prism.css'; // must have the css or create your own

import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleRight, faAngleDown, faEllipsisV, faArrowRight } from '@fortawesome/free-solid-svg-icons'; // add all icons you want to use and copy them to the library below
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import App from './App';
import router from './router';
import store from './store';

library.add(faAngleRight, faAngleDown, faEllipsisV, faArrowRight); // for font-awesome
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.use(VeeValidate);
Vue.use(Affix);
Vue.use(ScrollActive);
Vue.use(Prism);
Vue.use(VueTippy);
Vue.use(VueAnnouncer);
Vue.use(vBlur);

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
/* eslint-enable no-new */

sync(store, router, { moduleName: 'routeModule' });
