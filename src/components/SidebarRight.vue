<template>
  <div id="SideBarRight">
    <Chunibyou></Chunibyou>
    <QuickComment></QuickComment>
  </div>
</template>

<script>
  import Chunibyou from "./SidebarRight/Chunibyou";
  import QuickComment from "./SidebarRight/QuickComment";
  export default {
    name: "SideBarRight",
    components: {QuickComment, Chunibyou},
    mounted() {
      document.getElementById("SideBarRight").style.right = `${innerWidth * 0.15}px`
    }
  }
</script>

<style scoped>
  #SideBarRight {
    width: 260px;
    display: inline-block;
    position: absolute;
  }
</style>