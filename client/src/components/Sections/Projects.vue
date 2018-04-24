<template>
  <div class="skills section">
    <h1 class="title">Skills</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos sapiente,
    sint voluptates quam dolores officia culpa ipsam illum error inventore unde
    aliquid, corrupti provident cum minus. Aspernatur inventore placeat officia.</p>

    <div class="table">
      <template v-for="skill in skills">
        <div class="skill">
          <h3>{{ skill.title }}</h3>
          <div 
v-for="item in skill.items"
               class="item">
            <div class="image">
              <img :src="`${item.img}`">
            </div>
            <p class="title">{{ item.name }}</p>
          </div>
        </div>
      </template>
    </div>
  </div>
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

</style>
