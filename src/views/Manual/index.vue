<template>
  <web-nav :webList="manual" />
</template>

<script>
import manual from '@/mock/manual.json'

export default {
  name: 'Manual',
  components: {
    WebNav: () => import('@/components/WebNav')
  },
  data() {
    return {
      manual: manual
    }
  }
}
</script>
