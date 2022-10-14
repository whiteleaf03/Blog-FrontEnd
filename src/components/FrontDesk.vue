<template>
  <div id="FrontDesk">
    <Menu></Menu>
    <div id="MainArea">
      <div style="flex: 1"></div>
      <SidebarLeft></SidebarLeft>
      <Content></Content>
      <SideBarRight></SideBarRight>
      <div style="flex: 1"></div>
    </div>
    <div id="Beian">
      <p>这是备案号\(^o^)/~</p>
    </div>
  </div>
</template>

<script>
  import Menu from "./FrontDesk/Menu";
  import SidebarLeft from "./FrontDesk/SidebarLeft";
  import Content from "./FrontDesk/Content";
  import SideBarRight from "./FrontDesk/SidebarRight";
  export default {
    name: "FrontDesk",
    components: {Content, SidebarLeft, SideBarRight, Menu}
  }
</script>

<style scoped>
  #FrontDesk {
    /*position: absolute;*/
  }

  #MainArea {
    position: relative;
    height: auto;
    margin: 0 auto;
    display: flex;
  }

  #Beian {
    text-align: center;
  }
</style>