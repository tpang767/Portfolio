<template>
  <div class="hover-card">
    <a :href="`${path}`">
      <!-- <h2 class="name">{{ name }}</h2> -->
      <img
        :src="`${image}`"
        class="thumbnail"
        alt="" >
      <div class="overlay">
        <div class="caption">
          <p>{{ caption }}</p>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'HoverCard',
  props: {
    name: {
      type: String,
      default: 'Project Name'
    },
    image: {
      type: String,
      default: 'https://images.unsplash.com/photo-1488628075628-e876f502d67a?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=&bg='
    },
    caption: {
      type: String,
      default: 'View Project'
    },
    description: {
      type: String,
      default: 'Project Description'
    },
    title: {
      type: String,
      default: 'Project Title'
    }
  }
}
</script>

<style lang="scss">

.hover-card {
  position: relative;
  width: 100%;
  display:flex;
  flex-wrap:wrap;
  justify-content: center;
}

.hover-card:hover .overlay{
    display: block;
    background: rgba(0, 0, 0, .5);
    transition-delay: 300ms;
}

.hover-card:hover .name{
      top: -30px;
      opacity: 0.3;
      visibility: visible;
      transition: all .4s ease;
      // transition-delay: 300ms;
}

.hover-card:hover .overlay,
.hover-card:hover .overlay .caption{
    opacity: 1;
    visibility: visible;
    transition-delay: 200ms;
}

.hover-card .caption {
    font-size: .8125rem;
    letter-spacing:0.1rem;
   font-style: normal;
   color: #fff;
   position: absolute;
   margin:auto;
   overflow: hidden;
   opacity:0;
   transition: opacity .4s ease;
   top: 50%;
   left: 0;
   width: 100%;
   height: 100%;
   text-align: center;
   display: flex;
   justify-content: center;
}

.hover-card .thumbnail {
    display: block;
    width: 100%;
    height: auto;
    overflow: hidden;
}

.hover-card .name {
    position: absolute;
    width: 100%;
    left: 0;
    top: 20%;
    background:black;
    padding:1rem;
    // color:#47b784;
    // color: white;
    // width:50%;

    font-family: "Roboto", sans-serif;
    font-size: 1.125rem;
    letter-spacing: .1rem;
    font-weight: normal;
    text-align: center;
    text-transform: uppercase;
    z-index: 1;
    transition: top .5s ease;
  }

.hover-card .overlay {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    visibility: hidden;
    background: rgba(0, 0, 0, 0);
    transition: background 0.5s ease;
}

.hover-card .caption {
    visibility: hidden;
    display: inline-block;
    transform: translateY(-20px);
    transition: all .5 9s ease;
    font-size: 1.125rem;
    letter-spacing: 0.1rem;
    text-transform:uppercase;
    // background-colorblack;
}

/* Small Screens */
@media only screen and (max-width: 900px) {
}

/* Large Screens */
@media only screen and (min-width: 901px) {

}
</style>
