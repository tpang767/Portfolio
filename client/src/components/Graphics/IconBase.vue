<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100"
    height="100"
    viewBox="0 0 100 100"
    :aria-labelledby="thinker"
    role="presentation"
  >
    <title id="thinker" lang="en">Thinking</title>
  </svg>
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
      default: 'box'
    },
    width: {
      type: [Number, String],
      default: 18
    },
    height: {
      type: [Number, String],
      default: 18
    },
    iconColor: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>

<style>

</style>
