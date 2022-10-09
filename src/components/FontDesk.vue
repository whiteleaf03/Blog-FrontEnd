<template>
  <div id="FontDesk">
    <Menu></Menu>
    <div id="MainArea">
      <SidebarLeft></SidebarLeft>
      <Content></Content>
      <SideBarRight></SideBarRight>
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
    components: {Content, SidebarLeft, SideBarRight, Menu},
    mounted() {
      let leftWidth = document.getElementById('SidebarLeft').clientWidth
      let contentWidth = document.getElementById('Content').clientWidth
      let rightWidth = document.getElementById('SideBarRight').clientWidth
      document.getElementById('MainArea').style.width = `${leftWidth + contentWidth + rightWidth + 34}px`
      console.log(document.getElementById('MainArea').clientWidth)
      console.log(innerWidth)
    }
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
  }

  #Beian {
    text-align: center;
  }
</style>