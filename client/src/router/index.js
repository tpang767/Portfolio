// Vue
import Vue from 'vue'
import Router from 'vue-router'

// Pages
import HomePage from '@/pages/HomePage'
// import Home from '@/pages/Home'
// import Projects from '@/pages/Projects'
// import Contact from '@/pages/Contact'
// import About from '@/pages/About'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  scrollBehavior: function () {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    }
  ]
})
