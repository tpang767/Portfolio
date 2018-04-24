<template>
  <div class="projects section bg-black">
    <div
      class="section-title large"
      style="">Recent Work</div>
    <template
      v-for="
      project in projects">
      <div class="project">

        <div class="description">
          <h3 class="project-title">
            {{ project.title }}
          </h3>
          <p>{{ project.description }}</p>
        </div>
        <div class="preview">
          <HoverCard
            :name="project.name"
            :image="`${project.image}`"
            :path="project.path"/>
        </div>
      </div>
      <div class="divider"/>
    </template>
</h1>
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
.divider{
  height:1px;
  width: 95%;
  margin:1rem auto;
  background-color: $black-2;
}
.projects{
  //  border-left:1px solid white;
  //  border-right:2px solid $black-2;
}
.project{
  display:flex;
  flex-wrap: wrap;
  justify-content:center;
  padding: 1rem;
  // background: #262626;

}
.project:not(:last-child) {
  // margin-bottom:1em;
  // padding-bottom:2em;
  // border-bottom:1px solid $black;
}

.project .description {
  .project-title {
        font-family: "Roboto", sans-serif;
        color:#1F3075;
        // color:#47b784;
        font-size: .6875rem;
        line-height:1rem;
        margin-bottom:1em;
        letter-spacing: .1em;
        text-transform: uppercase;
        font-weight: normal;
  }
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
    margin-right:1em;
  }
}
</style>
