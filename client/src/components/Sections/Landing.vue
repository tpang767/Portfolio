<template>
    <div id='home-page'>
        <div class="pg-grid jumbotron">
            <div class="content-box b1">
            </div>
            <div class="content-box b2">
            </div>
            <div class="content-box b3">
                <p class="text-box">
                    As a web developer with a deep passion for learning, mission-driven work ethic, and versatile approach towards problem-solving, my mission is to deliver high-quality products with long term scalability in mind. My philosophy to use a modular approach
                    which focuses both on attention to detail and overall macro objectives.
                </p>
            </div>
            <div class="content-box b4">
            </div>
        </div>
        <div class="pg-divider">
        </div>
        <div class="pg-section">
            <Skills :skills="skills"></Skills>
            <Projects :projects="projects"></Projects>
            <Contacts :contacts="contacts"></Contacts>
        </div>
    </div>
</template>

<script>
import api from "../../api";
import Projects from "../Projects";
import Skills from "../Skills";
import Contacts from "../Contacts";
export default {
  name: "HomePage",
  components: {
    Projects,
    Skills,
    Contacts
  },
  data() {
    return {
      projects: "",
      contacts: "",
      sections: ""
    };
  },
  created() {
    this.skills = api.skills;
    this.contacts = api.contacts;
    this.projects = api.projects;
    this.sections = api.sections;
  }
};
</script>

<style lang="scss">
// .pg-grid {
//     display: grid;
// }

// .pg-container {
//     width: 100%;
//     height: 100%;

//     .pg-section {
//         background:rgb(255,252,220);
//     }

//     .pg-divider{
//         height: 100px;
//         // background:rgb(252,97,92);
//     }

//     .jumbotron {
//         grid-template-columns: repeat(4, 1fr);
//         grid-template-rows: repeat(4, 1fr);
//         min-height:500px;
//     }
// }

// .jumbotron {
//     background-position: 50% 50% !important;
//     background-size: cover !important;
//     width: 100%;
//     background: url('../../assets/images/backgrounds/bg-ocean.png');
//     .content-box{
//         display: flex;
//         padding: 1vw;
//         justify-content: center;
//         align-items: center;
//     }

//         .b1 {
//             grid-column: 1 / span 2;
//             grid-row: span 2;
//         }
//         .b2 {
//             grid-column: 3 / span 2;
//             grid-row: span 2;
//         }
//         .b3 {
//             grid-column: 1 / span 2;
//             grid-row: span 2;
//             align-self: flex-end;
//         }
//         .b4 {
//             grid-column: 3 / span 2;
//             grid-row: span 2;
//         }
// }

// .flex-vertical-center {
//     display: flex;
//     align-items: center;
//     justify-content: center;
// }
</style>
