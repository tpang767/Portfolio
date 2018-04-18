<template>
  <div id="app">
    <div class="pg-flex app">
      <!-- <button class="sidebar-toggle" @click="toggleMenu">
        <i class="fas fa-bars icon"></i>
      </button> -->
      <div class="pg-sidebar-container">
        <div class="pg-sidebar" :class="{open: menuActive}">
          <a class="brand flex" href="#">
            <img src="./assets/images/brand/brand-logo.png" class="img">
          </a>
          <div class="nav-menu flex">
            <a href="#"  v-for="navLink in navLinks" v-scroll-to="`#${navLink.target}`">
              {{navLink.name}}
            </a>
          </div>
          <div class="filler">
          </div>
          <div class="contact-info flex">
              <a :href="`${contact.path}`" class="contact" v-for="contact in contacts">
                  <i :class="`fa-lg ${contact.icon}`" class="icon"></i>
              </a>
          </div>
        </div>
      </div>

      <div class="pg-content">
        <router-view/>
      </div>
    </div>

  </div>
          <!-- <img src="./assets/images/portfolio-image.jpg" class="profile-img">
            <h4>Welcome to my portfolio, a portal into my world of development and a glimpse into my creations. Feel free to explore around! </h4>
      -->
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
    window.addEventListener('resize', this.handleResize);

  },
  data() {
    return {
      menuActive: true,
      scrollPosition: null,
      navLinks: [
        { name: 'Projects', target: 'projects' },
        { name: 'Skills', target: 'skills' },
        { name: 'Contact', target: 'contact' },
        { name: 'About', target: 'about' }
      ],
    contacts: [
        { name: 'email', icon: 'far fa-envelope', text: 't.pang767@gmail.com', path: '#'},
        { name: 'github', icon: 'fab fa-github', text: 'github.com/tpang767', path: 'https://github.com/tpang767' },
        { name: 'linkedIn', icon: 'fab fa-linkedin-in', text: 'linkedin.com/in/thomas-pang/', path: 'https://linkedin.com/in/thomas-pang/'},
        { name: 'codepen', icon: 'fab fa-codepen', text: 'codepen.io/teapea767', path: 'https://codepen.io/teapea767'}
      ]
    }
  },
  methods: {
    toggleMenu() {
      this.menuActive = !this.menuActive;
    },
    handleResize() {
      let width = window.innerWidth || 
      document.documentElement.clientWidth || 
      document.body.clientWidth;
      // if(this.menuActive)
      // if (width <= 900 &&) {
      //   this.sidebarActive = false;
      // }
      console.log(width)
    },
    handleScroll(e) {
      console.log(window.scrollY)
      this.scrollPosition = window.scrollY
    }
  },
  destroy() {
    window.removeEventListener('scroll', this.handleResize)
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="scss">
@import './assets/styles/app.scss';

.sidebar-toggle{
  z-index:500;
  position: absolute;
  padding:20px;
  top:-10px;
  right:0;
  // left:-10px;
  outline:none;
  border-radius:100%;
  cursor: pointer;
  transition: all 0.25s ease;
  :hover{
    color: red;
  }
  .icon {
    font-size:3em;
  }
}


.nav-btn-top {
  border: 2px solid black;
  color: black;
  width: 55px;
  border:none;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
  // border-radius: 50%;
}
</style>
