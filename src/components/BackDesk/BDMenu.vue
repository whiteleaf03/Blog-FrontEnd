<template>
  <div>
    <ul id="BDMenu">
      <li><div id="title">风之屿</div></li>
      <li><div><router-link to="/admin/analysis"><div class="li">数据分析</div></router-link></div></li>
      <li><div><router-link to="/admin/note"><div class="li">笔记管理</div></router-link></div></li>
      <li><div><router-link to="/admin/saysay"><div class="li">说说管理</div></router-link></div></li>
      <li><div><router-link to="/admin/daily"><div class="li">日记管理</div></router-link></div></li>
      <li><div><router-link to="/admin/comment"><div class="li">留言管理</div></router-link></div></li>
      <li><div><router-link to="/admin/eihei"><div class="li">诶嘿</div></router-link></div></li>
      <li id="backHome"><div><router-link to="/home"><div class="li">回到首页</div></router-link></div></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "BDMenu",
    mounted() {
      document.getElementById('BDMenu').style.height = `${innerHeight}px`
    }
  }
</script>

<style scoped>
  #BDMenu {
    border-right: 3px gold solid;
    border-left: 3px gold solid;
    background-color: rgba(245, 245, 245, 0.5);
    backdrop-filter: blur(5px);
    width: 100%;
    display: inline-block;
  }

  ul {
    width: 128px;
    list-style: none;
  }

  #title {
    font-size: 48px;
    font-family: 包圆小白体, fangsong;
    font-weight: bolder;
  }

  li {
    text-align: center;
    padding: 16px 0;
    border: 2px gold solid;
    border-radius: 5px;
    margin: -2px -2px 0 -2px;
  }

  .li {
    font-family: Tanugo糖果手写体, fangsong;
  }

  a, a:visited {
    text-decoration: none;
    color: black;
  }

  #backHome {
    position: absolute;
    bottom: 0;
    width: 100%;
  }
</style>