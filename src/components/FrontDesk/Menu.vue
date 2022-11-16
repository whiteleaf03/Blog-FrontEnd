<template>
  <div id="menu">
    <div style="flex: 1"></div>
    <div id="list">
      <router-link to="/home" class="link"><img src="/images/icon/首页_home.png" class="icon"><p>主页</p></router-link>
      <router-link to="/note" class="link"><img src="/images/icon/书籍_book.png" class="icon"><p>笔记</p></router-link>
      <router-link to="/saysay" class="link"><img src="/images/icon/标签_tag-one.png" class="icon"><p>说说</p></router-link>
      <router-link to="/comment" class="link"><img src="/images/icon/邮件_mail.png" class="icon"><p>留言</p></router-link>
      <router-link to="/comment" class="link"><img src="/images/icon/邮件_mail.png" class="icon"><p>时间线</p></router-link>
      <router-link to="/eihei" class="link" style="flex: 5;"><p>诶嘿ヾ(*ゝω・*)ノ</p></router-link>
      <router-link to="/login" class="link" style="flex: 1;"><img src="/images/icon/我的_me.png" class="icon"></router-link>
    </div>
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
    height: auto;
    border-bottom: 1px solid #42a1ff;
    background-color: rgba(245, 245, 245, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #list {
    position: relative;
    margin: 0 auto;
    list-style: none;
    flex: 5;
    display: flex;
    padding: 0 6px;
    justify-content: center;
    align-items: center;
  }

  .link {
    flex: 2;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  a {
    display: inline-block;
    color: black;
    text-decoration: none;
  }

  a:visited {
    color: black;
  }

  .icon {
    width: 32px;
    height: 32px;
    display: inline-block;
  }

  p {
    margin: 0;
    font-family: 包圆小白体, fangsong;
    font-size: xx-large;
  }
</style>