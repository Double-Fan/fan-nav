<template>
  <div class="test">
    <ThemeToggle />
  </div>
</template>

<script>
export default {
  components: {
    ThemeToggle: () => import('@/components/ThemeToggle')
  }
}
</script>

<style lang="scss" scoped>
.test {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
