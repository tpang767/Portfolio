<template>
  <div id="app">
    <div class="w-app-body">
      
      <div class="w-sidebar-container">
        <div class="w-sidebar">
          <img src="./assets/images/brand/logo2.png" class="brand-logo">
          <!-- <img src="./assets/images/portfolio-image.jpg" class="profile-img"> -->
          <w-navbar :navLinks="navLinks"></w-navbar>
          <div class="profile">
            <!-- <h2 style="margin:0;">Thomas Pang</h2>
              <h3 style="margin-top:0;">Fullstack Web Developer</h3> -->
            <!-- <div class="brand-wrapper"> -->

            <!-- </div> -->
            <!-- <h4>Welcome to my portfolio, a portal into my world of development and a glimpse into my creations. Feel free to explore around! </h4> -->
            <!-- <div class="contact-item">
                <i class="far fa-envelope fa-2x contact-icon"></i>
                <h4 class="contact-detail">t.pang767@gmail.com</h4>
              </div>
              <div class="contact-item">
                <i class="far fa-compass fa-2x contact-icon"></i>
                <h4 class="contact-detail">New York, NY</h4>
              </div> -->
          </div>
        </div>
      </div>

      <div class="w-main-container">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
//data
import api from './api'
import Button from '@/components/Buttons/Button.vue'
import Navbar from '@/components/Navbar.vue'
export default {
  name: 'App',
  components: {
    Button,
    'w-navbar': Navbar
  },
  created() {
    // window.addEventListener('scroll', this.handleScroll);
  },
  data() {
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
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    handleScroll(e) {
      console.log(window.scrollY)
      this.scrollPosition = window.scrollY
    }
  },
  destroy() {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="scss">
@import './assets/styles/app.scss';

.nav-btn-top {
  border: 2px solid black;
  color: black;
  width: 55px;
  border-radius: 50%;
}
</style>
