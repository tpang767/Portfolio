<template>

  <div class="app section--bordered animated fadeIn">
    <div id="navbar"
         ref="navbar"
         :class="{ scrolled: scrolled }"
         class="pf-navbar sticky">
          <div class="row">
            <!-- <div class="four columns"> -->

          <!-- <img
            src="./assets/images/brand/blue.png"
            class="brand-logo"> -->
            <!-- </div> -->
            <div class="eleven columns right-text">
               <scrollactive ref="scrollactive"
                    :offset="150"
                    class="my-nav"
                    active-class="active"
                    @itemchanged="onItemChanged">

        <a href="#home"
           class="scrollactive-item">Home</a>
        <a href="#about"
           class="scrollactive-item">About</a>
        <a href="#skills"
           class="scrollactive-item">Skills</a>
        <!-- <a
          href="#contact"
          class="scrollactive-item">Contact</a> -->
        <a href="#projects"
           class="scrollactive-item">Projects</a>

      </scrollactive>
          </div>

          </div>

    </div>

    <div id="home"
         class="section home bg-img gears">

      <div class="container">
        <div class="row " style="margin-bottom:5rem;">
          <div class="one-half column">
            <brand-icon></brand-icon>

          </div>
          <div class="one-half column">
             <!-- <paralax>
              <img src="../static/images/500/sphere.png"
class="background-image header">
            </paralax> -->
          <!-- <h1 class='headline jumbo'>Web Portfolio </h1> -->
          <div class="right-text">

 <h1 class='headline jumbo strong tight'>Thomas Pang</h1>
          <h1 class='headline jumbo strong tight'>Web Developer</h1>
 <h3>Feel free to explore my work</h3>
 <a class="button-primary button"
             href="#">Recent Work</a>
          </div>
</div>
</div>
      </div>
    </div>
    <div id="banner"
         class="section narrow contact bg-img gears">
      <div class="inner-section">
        <div class="row">
          <div class="one-half column ">
             <Contact :items="contacts"></Contact>
          </div>
          <div class="four columns">
            <h2 class="section-title right-text">Need a developer for your next project?</h2>

          </div>
        </div>
      </div>
    </div>

    <div id="about"
         class="section two about">
         <div class="left-section center-text">
 <div class="container inner-section">
  <div class="row">

            <h2 class="section-title">About Me</h2>

            <p> As a web developer with a deep passion for learning and a mission-driven
              work ethic, my aim is to always deliver high-quality work with long
              term scalability in mind
           I have experience building various types of web applications both on
              the frontend and backend side.</p>
                <img src="./assets/images/portfolio-image.jpg"
                   class="portfolio-image">
            <!-- <h4>I currently live in New York City</h4> -->
          </div>
   </div>
         </div>
          <div class="right-section">
        <div id="skills"
         class="three skills bg-img gears">

        <div class="row">
          <div class="center-text">
            <h2 class="section-title">Skills</h2>
<template v-for="(skill,i) in skills">
            <div class="row">
                  <flex-cards :items="skill.items" :title="skill.title"></flex-cards>
            </div>
            </template>

        </div>

    </div>
            </div>

         </div>

    </div>

    <div id="projects"
         class="section projects bg-img gears">
      <div class="container">
        <div class="left-text">
          <h2 class="section-title">Recent Work</h2>
        </div>
        <div class="row">
           <div class="four columns">
             Cryptocurrency
          </div>
          <div class="eight columns">
          <grid-cards></grid-cards>
          </div>

          <!-- <Projects></Projects> -->
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Parallax from 'vue-parallaxy'
import Projects from '@/components/Projects/Projects'
import Contact from '@/components/Sections/Contact'
import FlexCards from '@/components/Cards/FlexCards'
import GridCards from '@/components/Cards/GridCards'
import BrandIcon from '@/components/Graphics/ThinkerIcon.vue'
import API from './api'
export default {
  name: 'App',
  components: {
    Parallax,
    Projects,
    Contact,
    FlexCards,
    GridCards,
    BrandIcon
  },
  data () {
    return {
      contacts: '',
      skills: '',
      scrolled: null,
      navLinks: [
        { name: 'Projects', target: 'projects' },
        { name: 'Skills', target: 'skills' },
        { name: 'Contact', target: 'contact' },
        { name: 'About', target: 'about' }
      ]
    }
  },
  created () {
    this.skills = API.skills
    this.contacts = API.contacts
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      function offset (el) {
        let rect = el.getBoundingClientRect()
        let scrollLeft =
          window.pageXOffset || document.documentElement.scrollLeft
        let scrollTop =
          window.pageYOffset || document.documentElement.scrollTop
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
      }
      let nav = document.querySelector('#navbar')
      let navOffSet = offset(nav)
      if (navOffSet.top === 0) {
        this.scrolled = false
      } else {
        this.scrolled = true
      }
      console.log(navOffSet)
    },
    onItemChanged (event, currentItem, lastActiveItem) {
      if (event) {
        this.pageScrolled = true
      } else if (document.body.scrollTop) {
        this.pageScrolled = false
      }
    }
  }
}
</script>

<style lang='scss'>
@import './assets/scss/app.scss';
</style>
<style lang='scss'>
.section.home{
  background-color: $white-3;
  color: $text-color-1;
  // padding-top:5rem;
}
.section.two{
  color:$dark-1;
    background-color: $white-2;
}
.section.three{
  color:$dark-2;
  background-color: $white-3;
}

.section.about{
  display:flex;
  flex-direction:row;
  .left-section{
      background:$white-3;

    flex:0.5;
  }
    .right-section{
       color: $dark-1;
      background: $white-3;
      flex:0.5;
  }
}
.section.skills{
  background: $white-3;
  color: $dark-1;
}
.section.projects{
  background:black;
  color: $white-1;
}

.scrollactive-item.active {
  color: $primary-color !important;
  font-weight:600;
  letter-spacing:1px;
}

.portfolio-image {
  height: 350px;
  width: 350px;
  border:2px solid $secondary-color;
  // border-radius: 50%;
  margin-top:5rem;
}

.bg-img.gears {
  // background:url('../static/images/Hero/gear-btm2.png') no-repeat;
}
.bg-img.plug {
  // background: url('../static/images/Hero/world-plug.png') no-repeat;
}

.background-image.header{
  position: absolute;
    top:25%;
    left: 50%;
    width: 500px;
    height: auto;
    // -webkit-transform: translateX(-50%);
    // transform: translateX(100%);
}
</style>
