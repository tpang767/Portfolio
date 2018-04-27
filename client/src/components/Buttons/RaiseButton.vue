<template>
  <a
    :href="`#${link}`"
    class="raise button">
    <slot/>
  </a>
</template>

<script>
export default {
  name: 'RaiseButton',
  props: {
    link: ''
  }
}
</script>

<style lang="scss">
.button {
  font-family: 'Roboto', sans-serif;
  background: none;
  border: 1px solid #1f3075;
  font-size: 0.8125rem;
  letter-spacing: 0.1em;
  line-height: 1;
  margin: 0.5em;
  padding: 1em 2em;
}

.button {
  color: white;
  text-transform: uppercase;
  transition: 0.25s;
  font-size: bold;
  &:hover,
  &:focus {
    border-color: white;
    color: white;
  }
}
/* GENERAL BUTTON STYLING */
.raise:hover,
.raise:focus {
  box-shadow: 0 0.5em 0.5em -0.4em #1f3075;
  transform: translateY(-0.25em);
}
</style>
