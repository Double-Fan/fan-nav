<template>
  <div class="webhp">
    <div class="header"></div>
    <div class="illustration"></div>
    <SearchBar />
    <div class="btn-group">
      <router-link class="btn" to="/manual">开发手册</router-link>
      <router-link class="btn" to="/material">随便看看</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Webhp',
  components: {
    SearchBar: () => import('./components/SearchBar')
  }
}
</script>

<style lang="scss" scoped>
.webhp {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  font-size: 14px;
  color: #3c4043;

  .header {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    width: 100%;
    height: 60px;
  }

  .illustration {
    width: 560px;
    height: 166px;
    margin-top: 124px;
    margin-bottom: 26px;
    border-radius: 10px;
    background: url('https://cdn.jsdelivr.net/gh/Double-Fan/image-hosting/picture/fox.png') no-repeat scroll center / contain;
  }

  .btn-group {
    display: flex;
    margin-top: 26px;

    .btn {
      height: 34px;
      margin: 0 4px;
      padding: 0 16px;
      border: 1px solid #f8f9fa;
      border-radius: 4px;
      background-color: #f8f9fa;
      line-height: 34px;

      &:hover {
        border: 1px solid #dadce0;
        box-shadow: 0 1px 1px rgb(0 0 0 / 10%);
      }
    }
  }
}
</style>
