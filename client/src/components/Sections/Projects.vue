<template>
    <section id="projects" class="section">
      <h1 class="title">Projects</h1>
      <slot v-for="item in items" 
            :item="item">
      </slot>
    </section>
</template>

<script>

export default {
  name: 'Projects',
  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss">
    #projects {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
}
</style>
