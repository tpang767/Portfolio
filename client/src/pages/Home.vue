<template>
  <div id="landing">
    <div class="jumbotron">
      <img src="../assets/images/avatar.png" class="profile-pic">
      <p class="text-style-1">
        Hello,
      </p>
      <p class="text-style-1">
        My name is thomas pang and
      </p>
      <p class="text-style-1">
        I am a web developer from New York City
      </p>
      <hr>
      <p class="text-style-1">
        Feel free to explore my work
      </p>
      <p class="text-style-1" style="float:right">
        Cheers!
      </p>
    </div>
  </div>
  <!-- <div class="content">
      <div class="left">
        left

      </div>
      <div class="right">
        right
      </div>
        
        <nav class="sidebar">
          <div class="profile">
            <div class="avatar">
              <img src="./assets/images/avatar.png" class="profile-pic">
            </div>
            <div class="title">
              Thomas Pang
            </div>
            <div class="subtitle">
              Web Developer
            </div>
          </div>
          <div class="nav-menu">
         
          </div>
        </nav>
    </div> -->
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
#landing {
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  .jumbotron {
    margin-left: auto;
    margin-right: auto;
  }
}

.content {
  .left {
    background-color: blue;
    flex: 0.5;
  }
  .right {
    background-color: red;
    flex: 0.5;
  }
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
