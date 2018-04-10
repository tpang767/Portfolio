<template>
  <button class="btn" v-scroll-to="{ el: `#${target}`}">
     <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    target: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
button.btn {
  outline: none;
  height: 40px;
  text-align: center;
  width: 130px;
  border-radius:40px;
  background: #fff;
  border: 2px solid black;
  color:black;
  letter-spacing:1px;
  text-shadow:0;

  font:{
    size: 1.1em;
    weight:bold;
  }
  cursor: pointer;
  transition: all 0.25s ease;
  &:hover {
    color: white;
    background: black;
  }
  &:active {
    letter-spacing: 2px ;
  }
  &:after {
    // content:"SUBMIT";
  }
}

</style>
