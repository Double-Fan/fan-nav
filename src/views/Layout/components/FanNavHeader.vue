<template>
  <div class="fan-nav-header">
    <div class="left">
      <router-link class="logo" to="/">
        <h1>Fan-Nav</h1>
      </router-link>
    </div>
    <div class="middle">
      <router-link to="/material">宝藏资源</router-link>
      <router-link to="/black">黑科技</router-link>
    </div>
    <div class="right"></div>
  </div>
</template>

<script>
export default {
  name: 'FanNavHeader'
}
</script>

<style lang="scss" scoped>
.fan-nav-header {
  display: flex;
  height: 62px;
  background-color: #343535;
  color: #ebebeb;

  .left {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 16px;
    cursor: pointer;

    h1 {
      color: #ebebeb;
      font-size: 24px;
      font-weight: 700;
    }
  }

  .middle {
    flex-grow: 1;
    display: flex;
    align-items: center;

    a {
      height: 62px;
      line-height: 62px;
      margin: 0 16px;
      cursor: pointer;

      &:hover {
        border-bottom: 2px solid #ff6934;
        font-weight: 700;
      }
    }
    .router-link-active {
      border-bottom: 2px solid #ff6934;
      font-weight: 700;
    }
  }

  .right {
    margin-right: 16px;
  }
}
</style>
