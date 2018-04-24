<template/>

<script>
export default {
  name: 'Navbar',
  props: {
    navLinks: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss">
.navbar {
  .nav-left {
    margin-right: auto;
  }
  .nav-right {
    margin-left: auto;
  }

  a {
    font-family: "Raleway", sans-serif;
    font-size: 1.2em;
    text-transform: uppercase;
    font-weight: normal;
    outline: none;
    background: transparent;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-shadow: 0;
    cursor: pointer;
    transition: all 0.25s ease;
    &:hover {
      color: rgb(126, 120, 192);
    }

    &:active {
      letter-spacing: 2px;
    }

    &:not(.brand-wrapper) {
      margin-right: 15px;
    }
  }
}
</style>
