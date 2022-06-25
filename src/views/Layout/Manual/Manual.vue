<template>
  <web-nav :webList="manual" />
</template>

<script>
import WebNav from '../components/WebNav.vue'
import manual from '@/mock/manual.json'

export default {
  name: 'Manual',
  components: {
    WebNav,
  },
  data() {
    return {
      manual: manual,
    }
  },
}
</script>
