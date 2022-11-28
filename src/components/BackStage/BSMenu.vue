<template>
  <div id="BSMenu">
    <div id="title">风之屿</div>
    <div class="line">
      <router-link to="/admin/analysis">
        <div class="li">数据分析</div>
      </router-link>
    </div>
    <div class="line">
      <router-link to="/admin/chunibyou">
        <div class="li">中二语句管理</div>
      </router-link>
    </div>
    <div class="line">
      <router-link to="/admin/note">
        <div class="li">笔记管理</div>
      </router-link>
    </div>
    <div class="line">
      <router-link to="/admin/saysay">
        <div class="li">说说管理</div>
      </router-link>
    </div>
    <div class="line">
      <router-link to="/admin/daily">
        <div class="li">日记管理</div>
      </router-link>
    </div>
    <div class="line">
      <router-link to="/admin/comment">
        <div class="li">留言管理</div>
      </router-link>
    </div>
    <div class="line" style="border-bottom: 4px gold solid;">
      <router-link to="/admin/eihei">
        <div class="li">诶嘿</div>
      </router-link>
    </div>
    <div class="line" id="backhome">
      <router-link to="/home">
        <div class="li">回到首页</div>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "BSMenu",
    mounted() {
      document.getElementById('BSMenu').style.height = `${innerHeight}px`
    }
  }
</script>

<style scoped>
  #BSMenu {
    border-right: 3px gold solid;
    border-left: 3px gold solid;
    background-color: rgba(245, 245, 245, 0.5);
    backdrop-filter: blur(5px);
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0;
  }

  #title {
    border-top: 2px gold solid;
    border-bottom: 2px gold solid;
    font-size: 48px;
    font-family: 包圆小白体, fangsong;
    font-weight: bolder;
    text-align: center;
    padding: 16px 0;
  }

  .line {
    font-family: 包圆小白体, fangsong;
    font-size: x-large;
    text-align: center;
    border-top: 2px gold solid;
    border-bottom: 2px gold solid;
    padding: 16px 0;
  }

  a, a:visited {
    text-decoration: none;
    color: black;
  }

  #backhome {
    position: absolute;
    bottom: 0;
    width: 100%;
    border-top: 4px gold solid;
    border-bottom: 4px gold solid;
  }
</style>