<template>
  <div class="fan-nav">
    <fan-nav-header />
    <router-view class="fan-nav-content"></router-view>
    <fan-nav-footer v-if="hiddenFooter" />
    <div class="top-bar" v-if="hiddenTopBar" @click="toTop">
      <i class="fas fa-caret-up"></i>
    </div>
  </div>
</template>

<script>
import FanNavFooter from './components/FanNavFooter.vue'
import FanNavHeader from './components/FanNavHeader.vue'

export default {
  data() {
    return {
      hiddenTopBar: false,
    }
  },
  computed: {
    hiddenFooter() {
      return !this.$route.path.includes('home')
    },
  },
  methods: {
    toTop() {
      window.scrollTo({
        left: 0,
        top: 0,
        behavior: 'smooth', //平滑滚动
      })
    },
  },
  mounted() {
    const _this = this
    window.addEventListener('scroll', function () {
      _this.hiddenTopBar = document.documentElement.scrollTop > 230
    })
  },
  components: {
    FanNavHeader,
    FanNavFooter,
  },
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

  .top-bar {
    position: fixed;
    right: 16px;
    bottom: 16px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #fff;
    text-align: center;
    line-height: 50px;
    font-size: 32px;
    transition: all 1s ease;
    cursor: pointer;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
}
</style>
