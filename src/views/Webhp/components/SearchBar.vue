<template>
  <div class="searchbar">
    <button class="btn btn-logo" @click="toggleSearchType">
      <i v-if="searchType == 0" class="fab fa-google"></i>
      <i v-else class="fas fa-paw"></i>
    </button>
    <input
      type="text"
      class="search-input"
      ref="search-input"
      @keyup.enter="search"
      v-model="keyword"
    />
    <button class="btn btn-search" @click="search">
      <i style="color: #9aa0a6" class="fas fa-search"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  data() {
    return {
      keyword: '',
      searchType: 0
    }
  },
  methods: {
    toggleSearchType() {
      if (this.searchType == 0) {
        this.searchType = 1
      } else {
        this.searchType = 0
      }
    },
    search() {
      switch (this.searchType) {
        case 1:
          window.open(`https://www.baidu.com/s?wd=${this.keyword}`, '_self')
          break
        default:
          window.open(
            `https://www.google.com/search?q=${this.keyword}`,
            '_self'
          )
      }
    }
  },
  mounted() {
    this.$refs['search-input'].focus()
  }
}
</script>

<style lang="scss" scoped>
.searchbar {
  display: flex;
  width: 582px;
  height: 44px;
  border: 1px solid #dfe1e5;
  border-radius: 24px;
  background: #fff;

  &:hover,
  &:focus-within {
    box-shadow: 0 1px 6px rgb(32 33 36 / 28%);
    border-color: rgba(223, 225, 229, 0);
  }

  .btn {
    width: 45px;
    height: 44px;
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
