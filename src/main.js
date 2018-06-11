import Vue from 'vue';
import Affix from 'vue-affix';
import ScrollActive from 'vue-scrollactive';
import App from './App';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(Affix);
Vue.use(ScrollActive);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
/* eslint-enable no-new */
