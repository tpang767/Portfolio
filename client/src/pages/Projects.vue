<template>
  <div class="animated fadeIn" style="padding-top:2em;">
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <div class="card-container">
          <img src="../assets/images/DigiTracker/DashboardPage.png" alt="Avatar" class="image">
          <div class="middle">
            <div class="text">
              <router-link :to="{name: 'Project', params: {name: 'DigiTracker'}}" class="projectLink">
                View Project
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <div class="body">
          <div class="title text-style-1">
            Cryptocurrency Portfolio Tracker
          </div>
          <div class="description">
            Track portfolio assets
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <div class="card-container">
          <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" class="image">
          <div class="middle">
            <div class="text">
              <router-link :to="{name: 'Project', params: {name: 'DigiTracker'}}" class="projectLink">
                View Project
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <div class="body">
          <div class="title text-style-1">
            Budget Tracking App
          </div>
          <div class="description">
            Keep track of finances among peers
          </div>
        </div>
      </div>
    </div>

  </div>
  </div>

  </div>
</template>

<script>
import RevealCard from '@/components/Cards/RevealCard'

export default {
  name: 'Projects',
  components: {
    RevealCard
  },
  data() {
    return {
      title: 'Projects',
      projects: {
        digiTracker: {
          image: '../../../assets/images/DigiTracker/DashboardPage.png'
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
.text-style-1 {
  font-family: 'PT Sans';
  letter-spacing: 0.2em;
  font-size: 1.2em;
  margin-bottom: 20px;
  text-transform: uppercase;
  font-weight: 900;
}

.card-container {
  position: relative;
  width: 450px;
  height: 220px;
   :hover {
    cursor: pointer;
  }
}

.image {
  opacity: 1;
  display: block;
  width: 450px;
  height: 220px;
  transition: .5s ease;
  backface-visibility: hidden;
}

.middle {
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}

.card-container:hover .image {
  opacity: 0.3;
}

.card-container:hover .middle {
  opacity: 1;
}

.text {
  background-color: #4CAF50;
  color: white;
  font-size: 16px;
  padding: 16px 32px;
}

.grid {
  display: flex;
  flex-direction: column;
  .header {
    font-weight: 900;
    padding: 1em 2em;
    text-transform: uppercase;
    font-family: 'PT Sans';
    letter-spacing: 0.2em;
    font-size: 1.2em;
  }
}

.project {
  padding: 2em;
  flex: 1;
  display: inherit;
  flex-direction: row;
  box-shadow: 0px 1px 2px -1px rgba(250, 250, 250, 0.5);
  .image {
    flex: 1;
    width: 20em;
  }
  .body {
    flex: 3;
    .title {
      font-size: 1.5em;
      margin-bottom: 1em;
    }
    .description {
      font-size: 1.1em;
    }
  }
}

.projectLink {
  text-decoration: none;
}
</style>
