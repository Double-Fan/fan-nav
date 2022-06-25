<template>
  <web-nav :webList="black" />
</template>

<script>
import WebNav from '../components/WebNav.vue'
import black from '@/mock/black.json'

export default {
  name: 'Black',
  components: {
    WebNav,
  },
  data() {
    return {
      black: black,
    }
  },
}
</script>
