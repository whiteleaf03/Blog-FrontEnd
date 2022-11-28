<template>
  <div id="BackStage">
    <div style="flex: 1"><BDMenu></BDMenu></div>
    <div id="BDMain"><router-view></router-view></div>
  </div>
</template>

<script>
  import BDMenu from "./BackStage/BSMenu";
  export default {
    name: "BackStage",
    components: {BDMenu}
  }
</script>

<style scoped>
  #BackStage {
    display: flex;
  }

  #BDMain {
    display: inline-block;
    margin: 32px;
    padding: 48px;
    background-color: rgba(245, 245, 245, 0.5);
    flex: 7;
  }
</style>