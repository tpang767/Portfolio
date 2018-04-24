<template>
  <div class="grid-container">

    <div class="header">
      <div class="content-box">
        <h2>Thomas Pang</h2>
        <p>Welcome to my web development portfolio, a website which I designed and programmed myself entirely from scratch.
        If you're interested in seeing my recent work or learning about me, feel free to explore around.
        </p>
        <div class="btn-group">
          <a
            href="#about"
            class="raise button">
            About Me
          </a>
          <a
            href="#about"
            class="raise button">
            Recent Work
          </a>
        <!-- <div class="jumbotron"/> -->
        </div>
      </div>
    </div>

    <!-- <div class="introduction section bg-fullblack">
      <div class="content-box ">
        <p>      My name is Thomas and I am a fullstack web developer experienced in both frontend and backend development for
        all kinds of web applications.</p>

      </div>
    </div> -->
    <!-- <div class="contact section">
      <div class="section-title ">Get in touch</div>
      <div class="content-box">
        <div
          v-for="contact in contacts"
          :key="contact.name"
          class="contact">

          <div class="contact">
            <a
              :href="`${contact.path}`"
              class="link">
              <i
                :class="contact.icon"
                class="fa-2x icon"/>
          </a></div>
        </div>

      </div>
    </div> -->

    <div class="about section">
      <div class="section-title ">About</div>
      <div class="content-box">
        <p>As a web developer with a deep passion for learning, mission-driven work ethic,
        and detail-oriented approach towards problem-solving, my mission is to deliver
        high-quality products with long term scalability in mind.
        </p>
      </div>

    </div>

    <div class="skills section">
      <div class="section-title ">Skills</div>
      <div class="content-box">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos sapiente, sint voluptates quam dolores officia culpa ipsam illum error inventore unde aliquid, corrupti provident cum minus. Aspernatur inventore placeat officia.</p>

        <template v-for="skill in skills">
          <h5>{{ skill.title }}</h5>
          <table class="row">
            <tr class="skill">
              <td
                v-for="item in skill.items"
                class="item">
                <div class="image">
                  <img :src="`${item.img}`">
                </div>
                <p class="title">{{ item.name }}</p>
              </td>
            </tr>
          </table>
        </template>

        <!-- <div class="table">
          <template

          >
            <div class="skill">
              <h3>{{ skill.title }}</h3>
              <div
                v-for="item in skill.items"
                class="item">

              </div>
            </div>
          </template>
        </div> -->
      </div>
    </div>

    <Projects/>

    <!-- <div class="projects section">
      <h1 class="title">Projects</h1>
      <div class="project">
        <image-card
          title="Digital Tracker"
          caption="Digital Cryptocurrency tracking portfolio"
          text="View Project"
          image="./static/images/DigiTracker/AddHolding.png" />
      </div>
    </div> -->
    <!-- </div> -->
  </div>
</div></template>

<script>
import Projects from '@/components/Projects/Projects'
import ImageCard from '@/components/ImageCard'

export default {
  name: 'HomePage',
  components: {
    Projects
  },
  data () {
    return {
      skills: [
        {
          title: 'HTML',
          items: [
            {
              name: 'HTML5',
              img:
                'http://andrewborstein.github.io/portfolio/static/img/html5.png'
            },
            {
              name: 'Pug',
              img: 'https://avatars0.githubusercontent.com/u/9338635?s=200&v=4'
            }
          ]
        },
        {
          title: 'CSS',
          items: [
            {
              name: 'CSS3',
              img:
                'https://www.shareicon.net/download/2016/08/01/639873_internet.svg'
            },
            {
              name: 'Sass',
              img: 'https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg'
            },
            {
              name: 'Bootstrap',
              img:
                'https://v4-alpha.getbootstrap.com/assets/brand/bootstrap-solid.svg'
            },
            {
              name: 'Bulma',
              img: 'https://jgthms.com/web-design-in-4-minutes/bulma.png'
            },
            {
              name: 'Semantic Ui',
              img: 'https://semantic-ui.com/images/logo.png'
            }
          ]
        },
        {
          title: 'Javascript',
          items: [
            {
              name: 'Vue.js',
              img: 'https://vuejs.org/images/logo.png'
            },
            {
              name: 'Javascript',
              img: 'https://cdn.worldvectorlogo.com/logos/javascript-1.svg'
            },
            {
              name: 'Jquery',
              img:
                'http://andrewborstein.github.io/portfolio/static/img/jquery.png'
            },
            {
              name: 'NodeJs',
              img: 'https://nodejs.org/static/images/logo.svg'
            }
          ]
        }
      ],
      contacts: [
        {
          name: 'email',
          icon: 'far fa-envelope',
          text: 't.pang767@gmail.com',
          path: '#'
        },
        {
          name: 'github',
          icon: 'fab fa-github',
          text: 'github.com/tpang767',
          path: 'https://github.com/tpang767'
        },
        {
          name: 'linkedIn',
          icon: 'fab fa-linkedin-in',
          text: 'linkedin.com/in/thomas-pang/',
          path: 'https://linkedin.com/in/thomas-pang/'
        },
        {
          name: 'codepen',
          icon: 'fab fa-codepen',
          text: 'codepen.io/teapea767',
          path: 'https://codepen.io/teapea767'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.jumbotron {
  background: url('../assets/images/backgrounds/bg-apollo.png') no-repeat;
  background-size:cover;
  background-position:center;
  opacity: 1;
  // border:14px solid black;
  position: absolute;
  top:0;
  left:0;
  bottom:0;
  right:0;
  width:100%;
  height:100%;
}

.button {
  font-family: "Roboto", sans-serif;
  background:none;
  border: 1px solid #1F3075;
  font-size: .8125rem;
  letter-spacing: .1em;
  line-height: 1;
  margin: 0.5em;
  padding: 1em 2em;
}
.button {
  color:white;
  text-transform:uppercase;
  transition: 0.25s;
  font-size:bold;
  &:hover,
  &:focus {
    border-color: white;
    color: white;
  }
}
/* GENERAL BUTTON STYLING */
.raise:hover,
.raise:focus {
  box-shadow: 0 0.5em 0.5em -0.4em
#1F3075;
  transform: translateY(-0.25em);
}

</style>
