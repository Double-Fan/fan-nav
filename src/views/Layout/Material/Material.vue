<template>
  <web-nav :webList="material" />
</template>

<script>
import WebNav from '../components/WebNav.vue'
import material from '@/mock/material.json'

export default {
  name: 'Manual',
  data() {
    return {
      material: material,
    }
  },
  components: {
    WebNav,
  },
}
</script>
