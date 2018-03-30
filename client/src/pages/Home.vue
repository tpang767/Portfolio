<template>
  <div class="animated fadeIn">
    <div class="row">
      <div class="col-12">
        <div class="jumbotron">
          <p class="text-style-1">
            Hello,
          </p>
          <p class="text-style-1">
            My name is thomas and I am a web developer
          </p>
          <p class="text-style-1">
            Feel free to explore my work.
          </p>
          <p class="text-style-1" style="text-align:right">
            Enjoy!
          </p>
        </div>
      </div>
      </row>
      <div class="row">
        <div class="col-12" style="text-align:left; padding: 0 6em;">
          <router-link :to="{name: 'About'}" class="button" style="margin-left:auto;">About Me</router-link>
          <router-link :to="{name: 'Projects'}" class="button" style="margin-left:auto;">View Projects</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Buttons/Button'

export default {
  name: 'Home',
  components: {
    't-button': Button
  },
  data() {
    return {
      pageLoading: true
    }
  },
  mounted() {
    // const position = this.$el.querySelector('.t-header').getBoundingClientRect()
    // console.log(position)
  },
  methods: {

  }
}
</script>

<style scoped lang='scss'>
.grid {
  display: grid;
  grid-template-columns: repeat(12, fr);
  grid-template-rows: auto auto;
  .section1 {
    grid-column: span 8;
    grid-row: 1/1;
  }
  .section2 {
    grid-column: span 8;
    grid-row: 1/1;
  }
}

// .grid-container {
//   display: grid;
//   grid-template-columns: repeat(12, 1fr);
//   grid-template-rows: auto auto;
//   .section {
//     grid-column: span 12;
//   }
// }
.text-style-1 {
  font-family: 'PT Sans';
  letter-spacing: 0.2em;
  font-size: 1.2em;
  margin-bottom: 20px;
  text-transform: uppercase;
  font-weight: 900;
}

.button {
  text-decoration: none;
  padding: 1em;
  border: 1px solid white;
  color: #818181;
  &:hover {
    color: #f1f1f1;
  }
}

.button-section {
  margin-top: 1em;
}
</style>
