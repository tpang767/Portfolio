// Vue
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store';
import VueScrollTo from 'vue-scrollto'
import NxCard from 'nx-card'

Vue.use(NxCard)
Vue.use(VueScrollTo)
// External Lib
import 'animate.css/animate.min.css'

/* App sass */
import './assets/styles/app.scss'
// import './assets/styles/simplegrid/simple-grid.scss'

// Plugins
import VueCollapse from 'vue2-collapse'
// import { VueExtendLayout, layout } from 'vue-extend-layout'

Vue.use(VueCollapse)
// Vue.use(VueExtendLayout)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  // ...layout,
  components: { App },
  template: '<App/>'
})
