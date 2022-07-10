<template>
  <web-nav :webList="material" />
</template>

<script>
import material from '@/mock/material.json'

export default {
  name: 'Manual',
  data() {
    return {
      material
    }
  },
  components: {
    WebNav: () => import('@/components/WebNav')
  }
}
</script>
