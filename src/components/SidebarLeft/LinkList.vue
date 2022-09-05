<template>
  <div id="LinkList">
    <p id="title">欢迎来玩OwO</p>
    <ul>
      <li style="border-top: 0; user-select: text;"><p>whiteleaf03@163.com</p></li>
      <li><a href="https://space.bilibili.com/22199790"><p>Bilibili</p></a></li>
      <li><a href="https://github.com/whiteleaf03"><p>Github</p></a></li>
      <li style="border-bottom: 0"><a href="https://music.163.com/#/user/home?id=3919827028"><p>网易云音乐</p></a></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "LinkList"
  }
</script>

<style scoped>
  #LinkList {
    position: relative;
    background-color: rgba(255, 255, 255, 0.3);
    padding: 16px 32px;
    border-radius: 5px;
    margin-top: 6px;
  }

  #title {
    font-size: 24px;
    text-align: center;
    margin: 8px auto;
  }

  ul {
    list-style: none;
    text-align: center;
    /*background-color: whitesmoke;*/
  }

  li {
    padding: 16px 0;
    border-top: 1px solid whitesmoke;
    border-bottom: 1px solid whitesmoke;
  }

  a {
    color: black;
    text-decoration: none;
  }

  a:visited {
    color: black;
  }
</style>