<template>
  <Menu></Menu>
  <SidebarLeft></SidebarLeft>
<!--  <div id="Main"><router-view></router-view></div>-->
  <SidebarRight></SidebarRight>
  <div id="Beian">
    <p>这是备案号\(^o^)/~</p>
  </div>
</template>

<script>
  import Menu from "./components/Menu";
  import SidebarLeft from "./components/SidebarLeft";
  import SidebarRight from "./components/SidebarRight";
  export default {
    components: {SidebarRight, SidebarLeft, Menu},
    mounted() {
      document.getElementsByTagName('Menu')[0].style.width = `${innerWidth}px`
    }
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    user-select: none;
  }
</style>