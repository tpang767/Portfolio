<template>
  <div id="app">
    <div class="container">
      <nav class="sidenav animated fadeInDown">
        <!--<div class="navbrand">

                                                                                </div>-->
        <div class="profile">
          <img src="./assets/images/avatar.png" class="avatar">
          <h3>Thomas Pang</h3>
          <h4>Web Developer</h4>
        </div>
        <div class="nav-items">
          <router-link :to="{name: 'Home'}">
            Home
          </router-link>
          <router-link :to="{name: 'Projects'}">
            Projects
          </router-link>
          <router-link :to="{name: 'About'}">
            About
          </router-link>
          <router-link :to="{name: 'Contact'}">
            Contact
          </router-link>
        </div>
      </nav>

      <main class="main">
        <router-view/>
      </main>
    </div>

  </div>
</template>

<script>
export default {
  name: 'App',
  components: {

  }
}
</script>

<style lang="scss">
@import './assets/styles/app.scss';

@media only screen and (min-width: 768px) {
  /* For desktop: */
  .col-1 {
    width: 8.33%;
  }
  .col-2 {
    width: 16.66%;
  }
  .col-3 {
    width: 25%;
  }
  .col-4 {
    width: 33.33%;
  }
  .col-5 {
    width: 41.66%;
  }
  .col-6 {
    width: 50%;
  }
  .col-7 {
    width: 58.33%;
  }
  .col-8 {
    width: 66.66%;
  }
  .col-9 {
    width: 75%;
  }
  .col-10 {
    width: 83.33%;
  }
  .col-11 {
    width: 91.66%;
  }
  .col-12 {
    width: 100%;
  }
}


#app {
  height: 100%;
  display: -ms-flexbox;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-box;
  display: box;

  -ms-flex-direction: row;
  -webkit-box-orient: horizontal;
  -moz-box-orient: horizontal;
  -ms-box-orient: horizontal;
  box-orient: horizontal;
}

.main {
  -ms-flex: 1;
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  -ms-box-flex: 1;
  box-flex: 1;
}


.navbrand {
  background-image: url('./assets/images/logo.png');
}

main {
  margin-left: 250px;
}

.sidenav {
  border-right: 1px solid white;
  height: 100vh;
  width: 250px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  transition: 0.5s;
  .navbrand {
    display: block;
    border: 1px solid white;
    width: 100%;
    height: 50px;
    background-repeat: no-repeat;
    background-position: 5% 50%;
    background-size: auto auto;
  }
  .profile {
    padding: 2em 0 2em 0;
    display: block;
    width: 100%;
    text-align: center;
    .avatar {
      border-radius: 50%;
    }
  }
  .nav-items {
    >a {
      padding: 8px 8px 8px 3em;
      text-decoration: none;
      font-size: 25px;
      color: #818181;
      display: block; // border: 1px solid white;
      transition: 0.3s;
      &:hover {
        color: #f1f1f1;
      }
    }
  }
}
</style>