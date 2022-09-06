<template>
  <div id="SideBarRight">
    <Chunibyou></Chunibyou>
  </div>
</template>

<script>
  import Chunibyou from "./SidebarRight/Chunibyou";
  export default {
    name: "SideBarRight",
    components: {Chunibyou},
    mounted() {
      document.getElementById("SideBarRight").style.right = `${innerWidth * 0.15}px`
    }
  }
</script>

<style scoped>
  #SideBarRight {
    width: 260px;
    background-color: rgba(245, 245, 245, 0.2);
    backdrop-filter: blur(5px);
    display: inline-block;
    position: absolute;
  }
</style>