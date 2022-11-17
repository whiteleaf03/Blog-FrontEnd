<template>
  <div id="Home">
    <p>欢迎来到风之屿</p>
    <p>一个二刺猿码农的小破站</p>
    <p>平时写点笔记和说说</p>
    <p>欢迎留言吖~</p>
    <img src="/images/touch-fish.png">
    <p>诶嘿~</p>
  </div>
</template>

<script>
  export default {
    name: 'Home'
  }
</script>

<style scoped>
  #Home {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  #Home p {
    flex: 1;
    text-align: center;
    font-family: Tanugo糖果手写体, fangsong;
    font-size: xx-large;
    font-weight: bold;
  }

  #Home img {
    height: 50%;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>