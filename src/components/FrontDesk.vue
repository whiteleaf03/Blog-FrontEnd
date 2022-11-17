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
    <div style="display: flex">
      <div style="flex: 2"></div>
      <a href="https://beian.miit.gov.cn/" id="Beian" target="_blank">这是备案号\(^o^)/~</a>
      <div style="flex: 2"></div>
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
    flex: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(8px);
    background-color: rgba(245, 245, 245, 0.5);
    margin: 26px 20px 26px 26px;
    border-radius: 5px;
    border: 1px solid deepskyblue;
    padding: 8px 0;
    font-family: 包圆小白体, fangsong;
    font-size: xx-large;
  }

  a, a:visited {
    text-decoration: none;
    color: black;
  }
</style>