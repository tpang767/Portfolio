  <div class="pf-grid">
      <div
        id="navbar"
        ref="navbar"
        :class="{ scrolled: scrolled }"
        class="pf-navbar sticky">

        <scrollactive
          ref="scrollactive"
          :offset="1074"
          class="my-nav"
          active-class="active"
          @itemchanged="onItemChanged">
          <a
            href="#"
            class="brand-wrapper">
            <img
              src="./assets/images/brand/blue.png"
              class="brand-logo">
          </a>
          <a
            href="#home"
            class="scrollactive-item">Home</a>
          <a
            href="#about"
            class="scrollactive-item">About</a>
            <!-- <a
            href="#contact"
            class="scrollactive-item">Contact</a>
          <a
            href="#projects"
            class="scrollactive-item">Projects</a>
          <a
            href="#skills"
            class="scrollactive-item">Skills</a> -->
        </scrollactive>
      </div>

      <div class="pf-content">
        <!-- HERO -->
        <!-- <div
          id="home"
          class="hero">
          <div
            v-css-parallax
            class="parallax">
            <img src="../static/images/Hero/gear-btm2.png" >
          </div>
          <div class="container centered">
            <div class="row">
              <h1>Thomas Pang</h1>
              <h1>Web Developer</h1>
              <h4>Welcome to my web development portfolio, a website which I designed and programmed myself entirely from scratch.
              If you're interested in seeing my recent work or learning about me, feel free to explore around.</h4>
            </div>
          </div>
        </div> -->

        <!-- <template>
          <div
            v-css-parallax
            class="parallax">
            <img src="../static/images/Hero/gear-btm2.png" >
          </div>
        </template> -->

        <!-- ABOUT -->
        <!-- <div
          id="about"
          class="hero off-white">
          <div class="container centered" >
            <div class="row">
              <h1 class="header-1">About Me</h1>
              <h4>I have experience building various kinds of web applications both on the frontend and backend side.</h4>
            </div>
            <div class="row">
              <h4> As a web developer with a deep passion for learning and a mission-driven work ethic, my aim is to always deliver high-quality work with long term scalability in mind</h4>
            </div>
          </div>
        </div>
      </div> -->

        <!-- Skills -->
        <!-- <div
        id="skills"
        class="hero">
        <div class="container centered">
          <div class="row">
            <h1>Skills</h1>
          </div>
        </div>
      </div> -->

      </div>
</div>
