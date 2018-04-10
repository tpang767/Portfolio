<template>
  <div id="app">
    <AppBody>
      <AppNav :items="sections"/>
      <AppMain>
        <LandingSection/>
        <ProjectSection :items="projects">
          <div slot-scope="row">

            <nx-card href="#">
              <template slot="title">{{row.item.title}}</template>
              <template slot="description">
                <ul class="details" v-for="detail in row.item.details">
                  <li>{{detail}}</li>
                </ul>
              </template>
              <template slot="image">
                <img :src="`${row.item.image}`">
              </template>
            </nx-card>
            <!-- <Project :item="row.item"></Project> -->
          </div>
        </ProjectSection>
        <ContactSection :items="contacts" />
      </AppMain>
      <AppFooter/>
    </AppBody>
  </div>
</template>

<script>
  import Project from './components/Projects/Project.vue'
  import Projects from './pages/Projects.vue'
  import Landing from './pages/Landing.vue'
  import Contact from './pages/Contact.vue'
  //Layouts
  import Navbar from './components/Layout/Navbar.vue'
  import Footer from './components/Layout/Footer.vue'
  import AppBody from './components/Layout/AppBody.vue'
  import Main from './components/Layout/Main.vue'
  
  //data
  import api from './api'
  
  export default {
    name: 'App',
    components: {
      Project,
      'AppNav': Navbar,
      'AppFooter': Footer,
      'AppBody': AppBody,
      'AppMain': Main,
      'ProjectSection': Projects,
      'LandingSection': Landing,
      'ContactSection': Contact
    },
    created() {
        window.addEventListener('scroll', this.handleScroll);
    },
    created() {
      this.contacts = api.contacts
      this.projects = api.projects
      this.sections = api.sections
    },
    data() {
      return {
        contacts: '',
        projects: '',
        sections: '',
        isOpen: false
      }
    },
    methods: {
      toggleMenu() {
        this.isOpen = !this.isOpen;
      },
      handleScroll(e) {
        console.log(e)
        this.scrollY = e;
      }
    }
  }
</script>

<style lang="scss">
  @import './assets/styles/app.scss';
</style>

<style lang="scss">
  $off-white: rgb(250, 250, 250);
  $bg-app: $off-white;
  $bg-color: $off-white;
  $bg-navbrand: $bg-app;
  $bg-header: white;
  $bg-nav: black;
  $bg-landing: transparent;
  $text-primary: black;
  $text-inverted: white;
  $shadow: 0 2px 4px -1px rgba(0, 0, 0, .2),
  0 4px 5px 0 rgba(0, 0, 0, .14),
  0 1px 10px 0 rgba(0, 0, 0, .12);
  
  #main {
    display: flex;
    flex-direction: column;
    margin-left:auto;
    margin-right:auto;
    #landing {
      order: 1;
    }
    
    #projects {
      background-color:rgb(242,242,242);
      padding:5em;
      order: 2;

      .project {
        margin-bottom: 3em;
      }
      >.project:not(:last-child) {
        margin-bottom: 3em;
      }
    }

    #contact {
      order: 3;
    }
  }
  
    //sections
  .section {
    background-color: white;
    // border: 1px solid black;
    padding: 3em;
    min-height: 100vh;
    .title {
      text-align:center;
      // border:1px solid black;
      font-size: 2em;
      font-weight:900;
      text-transform: uppercase;
    }
  }

  .app-body {
    header {}
    nav {}
    main {}
    footer {}
  }
  
  .profile-pic {
    margin: 0;
    .avatar {
      border-radius: 100%;
      height: 200px;
      width: 200px;
    }
  }
  
  .header {
    letter-spacing: 0.1em;
    &.txt-1 {
      font-size: 2em;
      line-height: 2em;
      font-weight: 900;
    }
    &.txt-2 {
      font-size: 1.8em;
      line-height: 1.8em;
    }
    &.txt-3 {
      font-size: 1.5em;
      line-height: 1.5em;
    }
  }
  
  
  /*
     * * Shared Classes
    */
  
  .container {
    margin-left: auto;
    margin-right: auto;
    padding: 15px;
  }
  

  
  .shadow {
    -webkit-box-shadow: 0 2px 4px -1px rgba(0, 0, 0, .2), 0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12);
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, .2), 0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12);
  }
  
  .bg-cover {
    background: $background-img repeat 0 0;
  }
</style>