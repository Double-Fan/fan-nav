<template>
  <web-nav :webList="black" />
</template>

<script>
import black from '@/mock/black.json'

export default {
  name: 'Black',
  data() {
    return {
      black
    }
  },
  components: {
    WebNav: () => import('@/components/WebNav')
  }
}
</script>
