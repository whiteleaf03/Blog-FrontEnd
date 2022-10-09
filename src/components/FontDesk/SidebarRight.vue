<template>
  <div id="SideBarRight">
    <Chunibyou></Chunibyou>
    <QuickComment></QuickComment>
    <Copyright></Copyright>
  </div>
</template>

<script>
  import Chunibyou from "./SidebarRight/Chunibyou";
  import QuickComment from "./SidebarRight/QuickComment";
  import Copyright from "./SidebarRight/Copyright";
  export default {
    name: "SideBarRight",
    components: {Copyright, QuickComment, Chunibyou},
    mounted() {
      document.getElementById("SideBarRight").style.right = `${innerWidth * 0.15}px`
    }
  }
</script>

<style scoped>
  #SideBarRight {
    width: 260px;
    display: inline-block;
    float: left;
  }
</style>