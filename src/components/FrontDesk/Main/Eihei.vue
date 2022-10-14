<template>
  <div id="Eihei">
    <div id="Recommend">
      <div id="Recommend-title">站☆长☆推☆荐</div>
      <div id="Recommend-banner">
        <el-carousel height="400px" indicator-position="outside">
          <el-carousel-item><a :href="this.url"><div class="banner-image"><div class="banner-info">[歌曲MV]如果突然想起我</div></div></a></el-carousel-item>
          <el-carousel-item><a :href="this.url"><div class="banner-image"><div class="banner-info">[歌曲MV]如果突然想起我</div></div></a></el-carousel-item>
          <el-carousel-item><a :href="this.url"><div class="banner-image"><div class="banner-info">[歌曲MV]如果突然想起我</div></div></a></el-carousel-item>
        </el-carousel>
      </div>
      <div><a class="Recommend-line" :href="this.url">
        <div style="flex: 3"></div>
        <img class="Recommend-line-img" src="images/test/Recommend-001.png">
        <div style="flex: 2"></div>
        <div class="Recommend-line-info">
          <div class="Recommend-line-title">如果突然想起我</div>
          <div class="Recommend-line-subtitle">歌曲MV</div>
        </div>
        <div style="flex: 3"></div>
      </a></div>
      <div><a class="Recommend-line" :href="this.url">
        <div style="flex: 3"></div>
        <img class="Recommend-line-img" src="images/test/Recommend-001.png">
        <div style="flex: 2"></div>
        <div class="Recommend-line-info">
          <div class="Recommend-line-title">如果突然想起我</div>
          <div class="Recommend-line-subtitle">歌曲MV</div>
        </div>
        <div style="flex: 3"></div>
      </a></div>
      <div><a class="Recommend-line" :href="this.url">
        <div style="flex: 3"></div>
        <img class="Recommend-line-img" src="images/test/Recommend-001.png">
        <div style="flex: 2"></div>
        <div class="Recommend-line-info">
          <div class="Recommend-line-title">如果突然想起我</div>
          <div class="Recommend-line-subtitle">歌曲MV</div>
        </div>
        <div style="flex: 3"></div>
      </a></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Eihei',
    data() {
      return {
        url: "www.baidu.com"
      }
    },
    mounted() {
      this.initBanner()
    },
    methods: {
      async initBanner() {
        let bannerWidth = document.getElementById('Recommend-title').clientWidth
        for (let index in document.getElementsByClassName('banner-image').length) {
          document.getElementsByClassName('banner-image')[index].style.width = `${bannerWidth}px`
        }
      }
    }
  }
</script>

<style scoped>
  #Recommend-title {
    font-family: 包圆小白体, fangsong;
    font-size: 42px;
    text-align: center;
  }

  #Recommend-banner {
    margin-top: 16px;
  }

  a, a:visited {
    color: black;
  }

  .banner-image {
    height: 400px;
    position: relative;
    background-image: url("images/test/Recommend-001.png");
    background-size: cover;
    background-repeat: no-repeat;
  }

  .banner-info {
    position: absolute;
    height: 32px;
    line-height: 32px;
    left: 0px;
    bottom: 0px;
    font-family: Tanugo糖果手写体, fangsong;
    font-weight: 600;
    font-size: 24px;
    background-color: whitesmoke;
    padding: 8px 16px;
  }

  .Recommend-line {
    display: flex;
    height: 120px;
    margin: 36px 0;
  }

  .Recommend-line-img {
    flex: 5;
  }

  .Recommend-line-info {
    flex: 8;
    display: flex;
    flex-direction: column;
  }

  .Recommend-line-title {
    font-family: 包圆小白体, fangsong;
    font-size: 36px;
    flex: 3;
  }

  .Recommend-line-subtitle {
    font-family: Tanugo糖果手写体, fangsong;
    font-size: 24px;
    flex: 2;
  }

  a, a:visited {
    color: black;
    text-decoration: none;
  }
</style>