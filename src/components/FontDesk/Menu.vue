<template>
  <div id="menu">
    <div style="flex: 1"></div>
    <ul id="list">
      <li><router-link to="/home">
        <img src="images/icon/首页_home.png" class="icon"><p>主页</p>
      </router-link></li>
      <li><router-link to="/note">
        <img src="images/icon/书籍_book.png" class="icon"><p>笔记</p>
      </router-link></li>
      <li><router-link to="/saysay">
        <img src="images/icon/标签_tag-one.png" class="icon"><p>说说</p>
      </router-link></li>
      <li><router-link to="/message">
        <img src="images/icon/邮件_mail.png" class="icon"><p>留言</p>
      </router-link></li>
      <li><router-link to="/eihei">
        <p>诶嘿ヾ(*ゝω・*)ノ</p>
      </router-link></li>
      <li><router-link to="/login">
        <img src="images/icon/我的_me.png" class="icon" id="login">
      </router-link></li>
    </ul>
    <div style="flex: 1"></div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  #menu {
    position: relative;
    margin: 0 auto 32px;
    height: 32px;
    padding: 8px 0;
    border-bottom: 1px solid #42a1ff;
    background-color: rgba(245, 245, 245, 0.5);
    display: flex;
  }

  #list {
    position: relative;
    margin: 0 auto;
    list-style: none;
    flex: 5;
  }

  li {
    display: inline-block;
    margin: 0 32px;
    height: 32px;
    line-height: 32px;
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
    top: -10px;
    width: 32px;
    height: 32px;
    display: inline-block;
    vertical-align: middle;
    margin-right: 2px;
  }

  p {
    position: relative;
    top: -10px;
    display: inline-block;
    font-family: 包圆小白体, fangsong;
    height: 32px;
    line-height: 32px;
    vertical-align: middle;
  }

  #login {
    position: absolute;
    right: 16px;
    top: 0;
  }
</style>