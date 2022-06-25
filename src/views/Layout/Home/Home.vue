<template>
  <div class="home">
    <div class="illustration"></div>
    <search-bar />
  </div>
</template>

<script>
import SearchBar from '../components/SearchBar.vue'

export default {
  name: 'Home',
  components: { SearchBar },
}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;

  .illustration {
    width: 560px;
    height: 166px;
    margin-top: 64px;
    margin-bottom: 32px;
    border-radius: 10px;
    background: url(~@/assets/img/fox.png) no-repeat scroll center / contain;
  }
}
</style>
