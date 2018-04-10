<template>
    <section id="landing" class="section animated fadeIn">
            <div class="introduction">
            <div class="jumbotron">
                <div class="header txt-1" style="text-transform:uppercase;">
                    <span>Hello,</span>
                </div>
                         <div class="header txt-1" style="text-transform:uppercase;">
                    <span>My name is Thomas</span>
                </div>
                   <div class="header txt-1" style="text-transform:uppercase;">
                    and I am a web developer.
                </div>
                    <div class="header txt-3">
                Feel free to explore around!
                </div>
                <div class="btn-group">
                <Button target='projects'>
                    Projects
                </Button>
                <Button target='about'>
                    About
                </Button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Button from '../components/Buttons/Button.vue'

export default {
  name: 'Landing',
  components: {
      Button
  },
  props: {

  }
}
</script>

<style lang="scss">
#landing {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto auto;
     
      .introduction,
      .inquiries {
        display: flex;
        flex-direction: row;
      }
      .introduction {
        grid-column: 1 / span 2;
        grid-row: 1 / span 2;

        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items:center;
        // text-align:center;

        .picture {
          height: 150px;
          width: 150px;
          margin-left:auto;
          margin-right:auto;
          .image{
            border-radius:100%;
            width:100%;
            height:100%;
          }
        }
      }

      .inquiries {
        grid-column: 1 / span 2;
        grid-row: 3;
        display: flex;
        flex-direction: row;
        align-items:center;
      }

      .profile {
        grid-column: 1;
        grid-row: 1 / span 3;

        display: flex;
        flex-direction: row;
        align-items:center;
      }

      .jumbotron {
        &:not(:last-child) {
          margin-bottom: 30px;
        }

        .btn-group{
          margin-top:20px;
        }
      }
    }   
</style>