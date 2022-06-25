<template>
  <div class="searchbar">
    <button class="btn btn-logo" @click="toggleSearchType">
      <i v-if="searchType == 0" class="fab fa-google"></i>
      <i v-else class="fas fa-paw"></i>
    </button>
    <input type="text" class="search-input" ref="search-input" :placeholder="searchTip" @keyup.enter="search" v-model="keyword" />
    <button class="btn btn-search" @click="search">
      <i class="fas fa-search"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  data() {
    return {
      keyword: '',
      /* 
        0: google
        1: baidu
       */
      searchType: 0,
      searchTip: '在 Google 上搜索',
    }
  },
  methods: {
    /* 
      https://www.google.com/search?q=666
      https://www.baidu.com/s?wd=666
    */
    toggleSearchType() {
      if (this.searchType == 0) {
        this.searchType = 1
        this.searchTip = '在 Baidu 上搜索'
      } else {
        this.searchType = 0
        this.searchTip = '在 Google 上搜索'
      }
    },
    search() {
      switch (this.searchType) {
        case 1:
          window.open(`https://www.baidu.com/s?wd=${this.keyword}`, '_self')
          break
        default:
          window.open(`https://www.google.com/search?q=${this.keyword}`, '_self')
          break
      }
      this.keyword = ''
    },
  },
  mounted() {
    this.$refs['search-input'].focus()
  },
}
</script>

<style lang="scss" scoped>
.searchbar {
  display: flex;
  width: 560px;
  height: 42px;
  border: rgb(218, 218, 218) solid 1px;
  border-radius: 22px;
  box-shadow: 0px 0px 5px rgb(212, 212, 212);
  background: #fff;

  .btn {
    width: 45px;
    height: 40px;
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;

    i {
      font-size: 16px;
    }
  }

  .search-input {
    flex-grow: 1;
    height: 40px;
    border: none;
    outline: none;
    font-size: 16px;
    color: rgb(112, 112, 112);
  }
}
</style>
