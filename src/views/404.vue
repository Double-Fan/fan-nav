<template>
  <div class="notfound">
    <h1>你迷路了吧？</h1>
    <router-link to="/">赶紧回去</router-link>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.notfound {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    color: red;
  }

  a {
    margin-top: 32px;
    padding: 16px 32px;
    border: 1px solid black;
  }
}
</style>
