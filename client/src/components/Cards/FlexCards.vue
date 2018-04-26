<template>
  <div class="flex-cards">
      <ul class="flex-cards-wrapper" v-for="item in items">
          <!-- <li class="flex-card-item title"><div class="flex-cards-title"><h5>{{title}}</h5></div></li> -->
            <li class="flex-card-item">
            <div class="flex-card-image-wrap">
                <img :src="`${item.image}`" class="flex-card-image">
            </div>
                <span class="flex-card-text">{{item.name}}</span>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'FlexCards',
  props: {
    items: {
      type: Array
    },
    title: {
      type: String
    }
  }
}
</script>

<style lang="scss">
$flexcard-border-color: $grey;
.flex-cards{
    display: flex;
    flex-direction:row;
    flex-wrap: wrap;
    // border:2px solid $primary-color;
    text-align:center;

}
.flex-cards-wrapper{
    flex:1;
    display:flex;
    align-items:center;
    justify-content:stretch;
    overflow: auto;
    list-style-image: none;
    list-style-position: outside;
    list-style-type: none;
    padding: 2rem;
    margin: 0 ;
}
.flex-card-item{
    flex:1;
    // margin-bottom:1rem;
}

.flex-card-image-wrap{
    // background: $white-3;
    padding: 1rem;
    line-height: 20px;
    -webkit-transition: all .2s ease-in-out;
    -moz-transition: all .2s ease-in-out;
    -o-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;
    // border: 1px solid $flexcard-border-color;
    border-radius:5px;
}
.flex-card-image{
    -webkit-user-drag: none;
    max-width: 100px;
    height:100px;
    // min-height:100px;
}
.flex-cards-title-wrapper{
    padding: 6px;
    margin: 0 12px 12px 0;
}
.flex-card-item.title{
    margin:2rem 0;
    font-size:2.3rem;
    line-height:3rem;
}
.flex-cards-title{
    text-transform:uppercase;
    padding: 6px;
    >*{
        font-weight:600;
    }
}
.flex-card-text {
    // border:1px solid white;
    font-weight:600;
    // background-color:$primary-primary;
    color: $dark-1;
}
.flex-cards{
    li:not(:first-child) {

    }
    li:last-child{

    }
}
</style>
