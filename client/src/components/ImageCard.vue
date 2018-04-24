<template>
  <div class="image-card">
    <a :href="`${path}`">
      <h1 class="title">{{ title }}</h1>
      <img
        :src="`${image}`"
        class="thumbnail"
        alt="">

      <div class="overlay">
        <div class="caption"><p>{{ caption }}</p></div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'ImageCard',
  props: {
    title: '',
    caption: '',
    path: '',
    text: {
      type: String,
      default: 'Button'
    },
    image: {
      type: String,
      default: 'https://images.unsplash.com/photo-1488628075628-e876f502d67a?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=&bg='
    }
  }
}
</script>
<style lang="scss">

.image-card {
  position: relative;
  width: 100%;

  :hover .overlay{

  }

  :hover .title {
      top: 30px;
      opacity: 0.3;
      visibility: visible;
      transition: all .4s ease;
      // transition-delay: 300ms;
  }

  :hover .overlay {
    display: block;
    background: rgba(0, 0, 0, .3);
    transition-delay: 300ms;
  }

  :hover .overlay,
  :hover .overlay .caption,
  :hover .overlay .button{
    opacity: 1;
    visibility: visible;
    transition-delay: 100ms;
  }
}

.image-card .caption {
   font-family: 'Assistant', 'Arial', sans-serif;
   font-style: normal;
   font-size: 18px;
   color: #fff;
   position: absolute;
   margin:auto;
   overflow: hidden;
   opacity:0;
   transition: opacity .2s ease;
   top: 40%;
   left: 0;
   width: 100%;
   height: 100%;
   text-align: center;
   display: flex;
   justify-content: center;
  //  align-items: center;
}

.image-card .thumbnail {
    display: block;
    width: 100%;
    height: auto;
    overflow: hidden;
}

.image-card  .title {
    position: absolute;
    width: 100%;
    left: 0;
    top: 40%;
    font-weight: 700;
    font-size: 30px;
    text-align: center;
    text-transform: uppercase;
    color: white;
    z-index: 1;
    transition: top .5s ease;
  }

  .image-card .overlay {
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      visibility: hidden;
      background: rgba(0, 0, 0, 0);
      transition: background 0.5s ease;
  }

  .image-card .caption {
    visibility: hidden;
    display: inline-block;
    transform: translateY(-20px);
    transition: all .5 9s ease;
  }

  .caption,
  .button {

}

  .button {
    color:white;
    position: absolute;
    width: 100%;
    height: 100%;
    left:0;
    top: 180px;
    top: 0;
    opacity: 0;
    transition: opacity .5s ease;
    margin: 0 auto;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }

</style>
