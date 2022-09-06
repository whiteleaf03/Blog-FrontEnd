<template>
  <div id="Content">
    <p>123</p>
  </div>
</template>

<script>
  export default {
    name: "Content",
    mounted() {
      document.getElementById('Content').style.width = `${innerWidth * 0.7 - 532}px`
    }
  }
</script>

<style scoped>
  #Content {
    background-color: rgba(245, 245, 245, 0.2);
    backdrop-filter: blur(15px);
    display: inline-block;
    position: absolute;
    min-height: 320px;
    margin: 0 6px;
  }
</style>