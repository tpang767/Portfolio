<template>
      <div class="contacts" >
        <div class="contact" v-for="item in items" :key="item.name" slot="content">
          <i class="fa-3x icon" :class="item.icon"></i>
          <a :href="`${item.value}`" class="link">{{item.value}}</a>
        </div>
      </div>
</template>

<script>

export default {
  name: 'Contact',
  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss">
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
          font-size: 1.2rem;
          width: auto;
          line-height: 45px;
          text-transform: uppercase;
        }
      }
    }
</style>
