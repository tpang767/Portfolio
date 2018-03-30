<template>
  <div class="level nav-top">
    <div class="level-left">
    </div>
    <div class="level-right">
      <router-link v-for="(item,i) in navItems" :key='i' :to="{name: item}" class="level-item has-text-centered ">
        <a class="nav-link link is-info">{{item}}</a>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tHeader',
  data() {
    return {
      navItems: ['Projects', 'Resume', 'Contact']
    }
  },
  methods: {
    emitEvent(event) {
      this.$emit('clickToggle', event)
    }
  }
}
</script>

<style lang="scss">
.nav-top {
  border-bottom: 1px solid #eee;
  padding: 0 10px;
  margin: 0;
}

.menu-toggler {
  cursor: pointer;
   :hover {
    transition: color 0.5s ease;
    color: #75757e;
  }
}

.nav-link {
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: .2rem;
  margin-right: 5px;
  text-decoration: none;
  color: #222; // border: 1px solid #eee;
  padding: 5px;
  width: 120px;
}

.nav-link.brand {
  font-size: 14px;
  padding: 5px;
  height: 100%;
  border: 1px solid #222;
}

.nav-link.brand:hover {
  transition: background-color 0.5s ease;
  color: black;
  font-weight: 800;
}

.nav-link:hover {
  color: #75757e;
}
</style>
