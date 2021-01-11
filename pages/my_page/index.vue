<template>
  <div class="container">Hello {{ this.$store.state.token }}</div>
</template>
<script>
export default {
  middleware: 'auth',
}
</script>

<style scope>
@import '@/assets/css/custom.scss';
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
