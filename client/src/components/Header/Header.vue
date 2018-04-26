<template>
  <div class="header">
    <div class="headline">
      <h2>Thomas Pang</h2>
      <p>Welcome to my web development portfolio, a website which I designed and programmed myself entirely from scratch.
      If you're interested in seeing my recent work or learning about me, feel free to explore around.
      </p>
      <div class="btn-group">
        <raise-button link="about">About Me</raise-button>
        <raise-button link="projects">Recent Work</raise-button>
        <!-- <a
              href="#about"
              class="raise button">
              Recent Work
            </a> -->
      </div>
      <!-- <div class="jumbotron"/> -->
    </div>
  </div>
</template>

<script>
import RaiseButton from '../Buttons/RaiseButton.vue'

export default {
  name: 'Header',
  components: {
    RaiseButton
  }
}
</script>

<style>

</style>
