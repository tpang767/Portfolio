<template>
  <div class="app">
    <div class="wrapper">
      <div class="nav">
        <a
          href="#"
          class="brand-wrapper">
          <img
            src="./assets/images/brand/blue.png"
            class="brand-logo">
        </a>
        <a
          v-scroll-to="`#${navLink.target}`"
          v-for="(navLink,i) in navLinks"
          :key="i"
          href="#">
          {{ navLink.name }}
        </a>
      </div>

      <div class="main">
        <router-view/>
      </div>
      <div class="footer">
        Footer
      </div>
    </div>

  </div>

  </div>
</template>

<script>
import api from './api'
import Navbar from '@/components/Layout/Navbar'

export default {
  name: 'App',
  components: {
    Navbar
  },
  data () {
    return {
      scrollPosition: null,
      navLinks: [
        { name: 'Projects', target: 'projects' },
        { name: 'Skills', target: 'skills' },
        { name: 'Contact', target: 'contact' },
        { name: 'About', target: 'about' }
      ]

    }
  },
  created () {
    // window.addEventListener("resize", this.handleResize);
    // this.navLinks = api.navLinks;
    // this.contacts = api.contacts;
    this.skills = api.skills
  },
  methods: {
    toggleMenu () {
      this.menuActive = !this.menuActive
    },
    handleResize () {
      let width =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth
      console.log(width)
    },
    handleScroll (e) {
      console.log(window.scrollY)
      this.scrollPosition = window.scrollY
    }
  },
  destroy () {
    // window.removeEventListener("scroll", this.handleResize);
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>
<style lang='scss'>

</style>
<style lang='scss'>
@import "./assets/styles/app.scss";

.centered {
  margin: 0 auto;
}
</style>
