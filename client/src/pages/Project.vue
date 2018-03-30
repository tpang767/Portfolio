<template>
  <div class="animated fadeIn">
    <span style="color:white;">
      {{ title }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'Project',
  data() {
    return {
      title: ''
    }
  },
  created() {
    const title = this.$route.params.name
    this.title = title
  }
}
</script>

<style>

</style>
