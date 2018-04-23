<template>
  <div class="animated fadeIn" style="padding-top:2em;">
    <div class="row">
      <div class="col-12">
        <div class="title-header">
          <div class="title">
            WEB DEVELOPER
          </div>
          <div class="header">
            <li>Thomas</li>
            <li>Pang</li>
          </div>
          <ul class="lead">
            <li>Email/ t.pang767@gmail.com</li>
            <li>Located/ New York, NY</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped lang='scss'>
.grid-container {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto auto;

  .section {
    grid-column: span 12;
  }
}
</style>
