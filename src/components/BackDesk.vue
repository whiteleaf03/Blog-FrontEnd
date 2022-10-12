<template>
  <div id="BackDesk">
    <div style="flex: 1"><Menu></Menu></div>
    <div id="BDMain"><router-view></router-view></div>
  </div>
</template>

<script>
  import Menu from "./BackDesk/BDMenu";
  export default {
    name: "BackDesk",
    components: {Menu},
    mounted() {
      document.getElementById('BDMain').style.height = `${innerHeight * 0.8}px`
      document.getElementById('BDMain').style.width = `${innerWidth * 0.8}px`
    }
  }
</script>

<style scoped>
  #BackDesk {
    display: flex;
  }

  #BDMain {
    display: inline-block;
    margin: 32px 72px;
    padding: 48px;
    background-color: rgba(245, 245, 245, 0.5);
    flex: 8;
  }
</style>