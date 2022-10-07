<template>
  <div id="Content">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "Content",
    mounted() {
      document.getElementById('Content').style.width = `${innerWidth * 0.7 - 616}px`
    }
  }
</script>

<style scoped>
  #Content {
    backdrop-filter: blur(8px);
    background-color: rgba(245, 245, 245, 0.5);
    display: inline-block;
    position: absolute;
    min-height: 320px;
    margin: 0 16px;
    border-radius: 5px;
    border: 1px solid deepskyblue;
    padding: 32px;
  }
</style>