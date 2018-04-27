// Vue
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueScrollactive from 'vue-scrollactive'
import CustomPropertiesParallax from 'vue-custom-properties-parallax'

Vue.use(CustomPropertiesParallax)
Vue.use(VueScrollactive)
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
