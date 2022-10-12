<template>
  <div id="FontDesk">
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
  import Menu from "./FontDesk/Menu";
  import SidebarLeft from "./FontDesk/SidebarLeft";
  import Content from "./FontDesk/Content";
  import SideBarRight from "./FontDesk/SidebarRight";
  export default {
    name: "FontDesk",
    components: {Content, SidebarLeft, SideBarRight, Menu}
  }
</script>

<style scoped>
  #FontDesk {
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