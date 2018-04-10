<template>
    <nav class="navbar shadow animated slideInDown">
        <a class="menu-toggle" @click="toggleMenu">
            <i class="fas fa-bars"></i>
        </a>
        <!-- <div class="navbrand">
            <img src="../../assets/images/logo.png">
        </div> -->
            <a v-for="(item, i) in items" :key="i" class="item" :class="{open: isOpen}" v-scroll-to="{ el: `#${item.path}`}">
                {{item.name}}
            </a>
    </nav> 
</template>

<script>
export default {
    name: 'Navbar',
    props: {
        items: {
            type: Array,
            default: () => []
        }
    },

    data(){
        return{
            isOpen: false
        }
    },
    methods: {
        handleScroll(e) {
            console.log(e)
        },
        toggleMenu() {

        }
    }
}
</script>

<style lang="scss">
@import '../../assets/styles/variables.scss'; 
/*
  * * * * Navbar * * * *
  */
  nav.navbar {
    height:50px;
    z-index:500;
    position: fixed;
    top: 0;
    width: 100%;
    background-color: black;
    color: white;
    text-transform: uppercase;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;

    justify-content:center;
    // .navbrand{
    //     display:block;
    //     width: 50px;
    //     align-self: flex-start;
    // }
    a.item {
      font-family: 'Pt Sans';
      font-size: 1.1em;
      letter-spacing: 0.1em;
      font-weight: bold;
      color: $light-grey;
      text-decoration: none;
      padding: 0.5em 1em;
    } //Hover Effect
    a.item:hover {
      cursor: pointer;
      color: white;
      font-weight: 900;
    }

    a.item::after {
      content: '';
      display: block;
      width: 0;
      height: 1px;
      background: white;
      transition: width .3s;
    }

    a.item:hover::after {
      width: 100%;
    }

    /* Toggle Menu */
    a.item.open {
      display: block !important;
    }

    a.menu-toggle {
      display: none;
  }
}

</style>
