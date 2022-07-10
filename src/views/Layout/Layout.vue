<template>
  <div class="fan-nav">
    <fan-nav-header />
    <router-view class="fan-nav-content"></router-view>
    <fan-nav-footer />
  </div>
</template>

<script>
export default {
  components: {
    FanNavHeader: () => import('./components/FanNavHeader'),
    FanNavFooter: () => import('./components/FanNavFooter')
  }
}
</script>

<style lang="scss" scoped>
.fan-nav {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  .fan-nav-content {
    flex-grow: 1;
  }
}
</style>
