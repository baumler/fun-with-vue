// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Affix from 'vue-affix'
import ScrollActive from 'vue-scrollactive'
import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.use(Affix)
Vue.use(ScrollActive)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
