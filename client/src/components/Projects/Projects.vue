<template>
  <div class="projects">
      <div class="project" v-for="
      project in projects">

        <div class="description">
          <h5 class="headline tight" style="margin-bottom:2rem;">
            {{ project.title }}
          </h5>
          <h6>{{ project.description }}</h6>
        </div>
        <div class="preview">
          <HoverCard
            :name="project.name"
            :image="`${project.image}`"
            :path="project.path"/>
        </div>
      </div>
  </div>
</template>

<script>
import HoverCard from './HoverCard'
export default {
  name: 'Projects',
  components: {
    HoverCard
  },
  data () {
    return {
      projects: [
        {
          name: 'DigiTracker',
          title: 'Cryptocurrency Portfolio Manager',
          description: 'Track cryptocurrency investments using DigiTracker client. Add, delete, or edit asset holdings in portfolio. Monitor overall performance using real-time market data.',
          image: './static/images/DigiTracker/DashboardPage.png',
          path: '#'
        },
        {
          name: 'Budget Tracker',
          title: 'Financial Budget Tracking for Friends',
          description: 'Track cryptocurrency investments using DigiTracker client. Add, delete, or edit asset holdings in portfolio. Monitor overall performance using real-time market data.',
          image: './static/images/DigiTracker/DashboardPage.png',
          path: '#'
        }
      ]
    }
  }
}
</script>

<style lang="scss">

.projects{
  flex:1;
}

.project{
  display:flex;
  flex-wrap: wrap;
  // justify-content:center;
  padding: 1rem;
  margin-bottom:3rem;
  // background: #262626;
  // border:2px solid $primary-color;
}
.project:not(:last-child) {
  // margin-bottom:1em;
  // padding-bottom:2em;
  // border-bottom:1px solid $black;
}

/* Small Screens */
@media only screen and (max-width: 900px) {
  .projects{
    flex-direction:column;
  }

  .project .description{
    margin-bottom:1em;
  }
}

/* Large Screens */
@media only screen and (min-width: 901px) {
  .preview {
    flex: 0.5;
  }
  .description{
    flex:0.5;
  }
  .project .description{
    margin-right:2em;
  }
}
</style>
