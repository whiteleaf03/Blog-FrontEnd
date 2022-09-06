<template>
  <Menu></Menu>
  <div id="MainArea">
    <SidebarLeft></SidebarLeft>
    <Content></Content>
    <SidebarRight></SidebarRight>
  </div>
  <div id="Beian">
    <p>这是备案号\(^o^)/~</p>
  </div>
</template>

<script>
  import Menu from "./components/Menu";
  import SidebarLeft from "./components/SidebarLeft";
  import Content from "./components/Content";
  import SidebarRight from "./components/SidebarRight";
  export default {
    components: {Menu, SidebarLeft, Content, SidebarRight},
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