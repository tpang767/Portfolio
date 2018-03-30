<template>
  <div class="app">
    <nav class="animated fadeInDown">
      <div class="navbar">
        <div class="navbrand" style="background-image: url('../assets/images/logo.png');">

        </div>
        <router-link to="#" class="nav-link active">
          Home
        </router-link>
        <router-link to="#" class="nav-link">
          My Work
        </router-link>
        <router-link to="#" class="nav-link">
          Info
        </router-link>
      </div>
    </nav>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import tSidebar from '../components/Sidebar/Sidebar'
import tHeader from '../components/Header/Header'

export default {
  name: 'Default',
  components: {
    tSidebar,
    tHeader
  },
  data() {
    return {
      showNav: true,
      navLinks: ['Home', 'Projects', 'Contact', 'About']
    }
  },
  methods: {
    toggleMenu() {
      this.menuActive = !this.menuActive
    }
  }
}
</script>

<style lang="scss">
.app {
  background-color: black;
  height: 100vh;
}
</style>

