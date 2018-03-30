<template>
  <div class="card-container">
    <img :src="image" alt="Avatar" class="image">
    <div class="middle">
      <div class="text">{{text}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RevealCard',
  props: {
    image: {
      type: String,
      default: '../assets/images/DigiTracker/DashboardPage.png'
      // default: 'https://www.w3schools.com/howto/img_avatar.png'
    },
    text: {
      type: String,
      default: 'Click Link'
    }
  }
}
</script>

<style lang="scss">

</style>
