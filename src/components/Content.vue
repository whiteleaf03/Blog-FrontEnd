<template>
  <div id="Content">
    <p>123</p>
  </div>
</template>

<script>
  export default {
    name: "Content",
    mounted() {
      document.getElementById('Content').style.width = `${innerWidth * 0.7 - 552}px`
    }
  }
</script>

<style scoped>
  #Content {
    backdrop-filter: blur(8px);
    display: inline-block;
    position: absolute;
    min-height: 320px;
    margin: 0 16px;
    border-radius: 5px;
    border: 1px solid deepskyblue;
  }
</style>