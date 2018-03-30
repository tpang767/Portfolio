<template>
  <div class="sidebar" :class="{'is-visible': active}">
    <template v-if="active">
      <div class="nav-item header">
        Header
      </div>
      <div v-for="(nav,i) in navs" class="nav-item" :key="i">
        <router-link :to="{name: nav}" class="nav-item">
          <div class="nav-title">
            {{nav}}
          </div>
        </router-link>
      </div>
      <!--<div class="nav-item minimizer">
            <div class="btn-minimizer">
              <i class="fas fa-angle-left"></i>
            </div>
          </div>-->
    </template>
  </div>
</template>

<script>
export default {
  name: 'tSidebar',
  props: {
    active: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      navs: ['Home', 'Projects', 'Resume', 'About', 'Contact']
    }
  }
}
</script>

<style lang='scss'>
.sidebar {
  display: flex;
  align-items: flex-start;
  flex-direction: column; // justify-content: center;
  height: 100%;
  >.nav-item {
    width: 100%; // border-bottom: 1px solid #eee;
  }
}

.nav-item.header {
  height: 33px;
}

.nav-item.minimizer {
  border-top: 1px solid #eee;
  width: 100;
  >.btn-minimizer {
    position: relative;
    border-left: 1px solid #eee;
    float: right;
    padding: 5px 10px;
  }
}
</style>
