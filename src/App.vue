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
    methods: {
      randomBackgroundImage() {
        let file
        do {
          file = Math.round(Math.random() * 22)
        } while (file === 22 || file === 0)
        console.log(file)
        document.body.style.backgroundImage = `url("images/background/${file}.jpg")`
      }
    },
    created() {
      this.randomBackgroundImage()
    },
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
    font-family: 站酷仓耳渔阳体, fangsong;
  }

  body {
    background-size: cover;
  }

  @font-face {
    font-family: "站酷仓耳渔阳体";
    src: url("/font-family/TsangerYuYangT_W01_W01.ttf");
  }
  @font-face {
    font-family: "站酷仓耳渔阳体";
    src: url("/font-family/TsangerYuYangT_W02_W02.ttf");
  }
  @font-face {
    font-family: "站酷仓耳渔阳体";
    src: url("/font-family/TsangerYuYangT_W03_W03.ttf");
  }
  @font-face {
    font-family: "站酷仓耳渔阳体";
    src: url("/font-family/TsangerYuYangT_W04_W04.ttf");
  }
  @font-face {
    font-family: "站酷仓耳渔阳体";
    src: url("/font-family/TsangerYuYangT_W05_W05.ttf");
  }
</style>