//Vue
import Vue from 'vue'
import Router from 'vue-router'

//Pages
import Home from '@/components/Pages/Home'
import Landing from '@/components/Pages/Landing'
// import Home from '@/pages/Home'
// import Projects from '@/pages/Projects'
// import Contact from '@/pages/Contact'
// import About from '@/pages/About'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  scrollBehavior: function () {
    return {x: 0, y: 0}
  },
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
    // {
    //   path: '/projects/:name',
    //   name: 'Project',
    //   component: Project
    // },
    // {
    //   path: '/projects',
    //   name: 'Projects',
    //   component: Projects
    // },

  ]
})
