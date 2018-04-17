// Vue
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store';
import VueScrollTo from 'vue-scrollto'

Vue.use(VueScrollTo)
// External Lib
import 'animate.css/animate.min.css'


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
