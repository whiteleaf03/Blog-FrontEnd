<template>
  <div id="menu">
    <ul id="list">
      <li><router-link to="/home">
        <img src="/images/icon/首页_home.png" class="icon"><p>主页</p>
      </router-link></li>
      <li><router-link to="/note">
        <img src="/images/icon/书籍_book.png" class="icon"><p>笔记</p>
      </router-link></li>
      <li><router-link to="/saysay">
        <img src="/images/icon/标签_tag-one.png" class="icon"><p>说说</p>
      </router-link></li>
      <li><router-link to="/message">
        <img src="/images/icon/信封1_envelope-one.png" class="icon"><p>留言</p>
      </router-link></li>
      <li><router-link to="/eihei">
        <p>诶嘿ヾ(*ゝω・*)ノ</p>
      </router-link></li>
    </ul>
  </div>
</template>

<script>
  export default {
    mounted() {
      document.getElementById('menu').style.width = `${innerWidth}px`
      document.getElementById('list').style.width = `${innerWidth * 0.6}px`
    }
  }
</script>

<style scoped>
  #menu {
    position: relative;
    margin: 0 auto 16px;
    height: 32px;
    background-color: rgba(245, 245, 245, 0.5);
    padding: 8px 0;
  }

  ul {
    position: relative;
    margin: 0 auto;
  }

  li {
    display: inline-block;
    margin: 0 32px;
    height: 32px;
    line-height: 32px;
    user-select: none;
  }

  a {
    display: inline-block;
    height: 32px;
    color: black;
    text-decoration: none;
  }

  a:visited {
    color: black;
  }

  .icon {
    position: relative;
    top: -2px;
    width: 32px;
    height: 32px;
    display: inline-block;
    vertical-align: middle;
    margin-right: 2px;
  }

  p {
    display: inline-block;
  }
</style>