<template>
  <div class="pg-app">
    <!-- <Navbar :navLinks='navLinks'></Navbar> -->
    <div class='pg-app-body'>

      <!-- <section id="home" class="pg-section full-height">
        <div class="hero">
              <div class="header fadeInRight bg-red">
                <h1 class="title">Thomas</h1>
              </div>
              <div class="header fadeInLeft bg-red">
                <h1 class="title">Pang</h1>
              </div>
              <div class="subheader fadeInLeft">
                <h1 class="title bg-blue">Portfolio Website</h1>
              </div>
        </div>
      </section> -->
        <section id="home" class="pg-section full-height">
      <div class="jumbotron">
        <div class="headlines animated fadeInLeft">
          <h1>Thomas</h1>
          <h1>Pang</h1>
          <h2>Portfolio Website</h2>
        </div>

      </div>
</section>

      <div class="pg-section"
           id="about">
        <h1 class="title">About</h1>
        <div class="content">
          <p>As a web developer with a deep passion for learning, mission-driven work
            ethic, and detail-oriented approach towards problem-solving, my mission
            is to deliver high-quality products with long term scalability in mind.
          </p>

        </div>
      </div>

      <div class="pg-section"
           id="projects">
        <!-- <h1 class="title">Projects</h1> -->
        <div class="projects">
          <div class="project">
<image-card title="Digital Tracker" caption="Digital Cryptocurrency tracking portfolio" text="View Project" image="./static/images/DigiTracker/AddHolding.png">
            </image-card>
          </div>
          <div class="project">
<image-card title="Digital Tracker" caption="hello" text="View Project" image="./static/images/DigiTracker/AddHolding.png">
            </image-card>
          </div>

        </div>
        </div>
      </div>

      <div class="pg-section"
           id="skills">
        <h1 class="title">Technical Skills</h1>
        <!-- <div class="skills" v-for="skill in skills">
          <h1>{{skill.title}}</h1>

          <template v-for="item in skill.items">

            <div class="skill">
              <p class="title">{{item.name}}</p>
              <div class="image-container">
                <img :src="`${item.img}`">
              </div>
            </div>
          </template>
          </div> -->
        </div>
      </div>

      <!-- <div class="hero bg-1">

    </div> -->

    </div>

  </div>
</template>

<script>
import api from "./api";
import Navbar from "@/components/Navbar";
import ImageCard from "@/components/ImageCard";
export default {
  name: "App",
  components: {
    Navbar,
    ImageCard
  },
  created() {
    // window.addEventListener("resize", this.handleResize);
    // this.navLinks = api.navLinks;
    // this.contacts = api.contacts;
    this.skills = api.skills;
  },
  data() {
    return {
      skills: null,
      menuActive: true,
      scrollPosition: null,
      navLinks: [
        { name: "Projects", target: "projects" },
        { name: "Skills", target: "skills" },
        { name: "Contact", target: "contact" },
        { name: "About", target: "about" }
      ],
      contacts: [
        {
          name: "email",
          icon: "far fa-envelope",
          text: "t.pang767@gmail.com",
          path: "#"
        },
        {
          name: "github",
          icon: "fab fa-github",
          text: "github.com/tpang767",
          path: "https://github.com/tpang767"
        },
        {
          name: "linkedIn",
          icon: "fab fa-linkedin-in",
          text: "linkedin.com/in/thomas-pang/",
          path: "https://linkedin.com/in/thomas-pang/"
        },
        {
          name: "codepen",
          icon: "fab fa-codepen",
          text: "codepen.io/teapea767",
          path: "https://codepen.io/teapea767"
        }
      ]
    };
  },
  methods: {
    toggleMenu() {
      this.menuActive = !this.menuActive;
    },
    handleResize() {
      let width =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
      console.log(width);
    },
    handleScroll(e) {
      console.log(window.scrollY);
      this.scrollPosition = window.scrollY;
    }
  },
  destroy() {
    // window.removeEventListener("scroll", this.handleResize);
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>
<style lang='scss'>

</style>
<style lang='scss'>
@import "./assets/styles/app.scss";
#home{
  background: black;
}



// .bg-1 {
//   background: url("./assets/images/backgrounds/1.jpg");
//   background-size: cover;
//   background-position: 50% 50%;
// }



// .hero {
//   color: white;
//   background-color: black;
//   background-size: cover !important;
//   background-position: 50% 50% !important;

//   display: flex;
//   flex-direction: column;
//   height: 100vh;
//   width: 100%;
//   padding: 3vw;
//   justify-content: center;
//   color: white;

//   .content-box {
//     background-color: red;
//     width: 50%;
//   }

//   h1 {
//     font-family: "Raleway", sans-serif;
//     letter-spacing: normal;
//     line-height: 1.5em;
//     font-weight: 900;
//     font-size: 3em;

//     &.header {
//       font-size: 8vw;
//       text-transform: uppercase;
//     }
//   }

//   h2 {
//     font-family: "Roboto", sans-serif;
//     font-size: 2em;
//     letter-spacing: 1px;
//     line-height: 1em;
//   }
// }

.centered {
  margin: 0 auto;
}
</style>
