<template>
<section id="contact" class="section">
      <h1 class="title">Contact</h1>
      <div class="contacts" v-for="item in items" :key="item.name" slot="content">
        <div class="contact">
          <i class="fa-3x icon" :class="item.icon"></i>
          <a :href="`${item.value}`" class="link">{{item.value}}</a>
        </div>
      </div>
  </section>
</template>

<script>
  import Section from '../components/Layout/Section.vue'
  
  export default {
    name: 'Contact',
    component: {
      't-section': Section
    },
    props: {
      items: {
        type: Array,
        default: () => []
      }
    }
  }
</script>

<style lang="scss">
  #contact {
    .contacts {
      display: flex;
      flex-direction: column;
      .contact {
        display: flex;
        flex-direction: row;
        .icon {
          width: 42px;
          margin-right: 5px;
        }
        .link {
          text-decoration: none;
          color: $text-color;
          font-size: 1.2em;
          width: auto;
          line-height: 45px;
          transform-text: uppercase;
        }
      }
    }
  }
</style>
