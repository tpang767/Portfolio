<template>
  <div class="flex-card-image-wrap">
      <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'FlexCard',
  props: {}
}
</script>

<style lang="scss">
.flex-cards {
  display: flex;
  justify-content: center;
}
.flex-cards-wrapper {
  overflow: auto;
  list-style-image: none;
  list-style-position: outside;
  list-style-type: none;
  padding: 0;
  margin: 0;
}
.flex-card-item {
  margin: 0 12px 12px 0;
  float: left;
  margin-left: 1rem;
}
.flex-card-image-wrap {
  padding: 6px;
  display: block;
  padding: 4px;
  line-height: 20px;
  border: 1px solid #ddd;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.055);
  -moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.055);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.055);
  -webkit-transition: all 0.2s ease-in-out;
  -moz-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}
.flex-card-image {
  -webkit-user-drag: none;
  display: block;
  max-width: 100%;
  margin-right: auto;
  margin-left: auto;
}
</style>
