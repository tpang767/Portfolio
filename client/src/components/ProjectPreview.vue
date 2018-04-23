<template>
      <div class="preview">
           <a href="#img1">
  <img src="https://www.w3schools.com/css/img_fjords.jpg" class="thumbnail">
      <div class="overlay">

      </div>
    </a>
 </div>
</template>

<script>
export default {
  name: 'ProjectPreview',
  props: {
    title: "",
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

<style scoped lang="scss">

/* CSS OVERLAY ON HOVER */

.preview {
    position: relative;
    width: 100%;
}

.thumbnail /* image */ {
    display: block;
    width: 100%;
    height: auto;
    overflow:hidden;
}
.overlay {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background-color: rgba(180, 81, 64, 0.85);
    opacity:0.5;
    visibility: hidden;
    transition: all .5s ease;
    transform: translateY(-100%);
}

.preview:hover .overlay,
.preview:hover .overlay .caption i {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);

}
.preview:hover .overlay .caption i {
   transition-delay: 300ms;
}
.caption {
   font-family: 'Assistant', 'Arial', sans-serif;
   font-style: normal;
   font-size: 18px;
   color: #fff;
   position: absolute;
   margin:auto;
   overflow: hidden;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   text-align: center;
   display: flex;
   justify-content: center;
   align-items: center;
}
.caption i {
  opacity: 0;
  visibility: hidden;
   display: inline-block;
   transform: translateY(-20px);
    transition: all .5s ease;
}
</style>
