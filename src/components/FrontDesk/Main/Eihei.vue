<template>
  <div id="Eihei">
    <div id="Recommend">
      <div id="Recommend-title">站☆长☆推☆荐</div>
      <div id="Recommend-banner">
        <el-carousel height="400px" indicator-position="outside">
          <el-carousel-item><a :href="this.url"><div class="banner-image"><div class="banner-info">[歌曲MV]如果突然想起我</div></div></a></el-carousel-item>
          <el-carousel-item><a :href="this.url"><div class="banner-image"><div class="banner-info">[歌曲MV]如果突然想起我</div></div></a></el-carousel-item>
          <el-carousel-item><a :href="this.url"><div class="banner-image"><div class="banner-info">[歌曲MV]如果突然想起我</div></div></a></el-carousel-item>
          <el-carousel-item><a :href="this.url"><div class="banner-image"><div class="banner-info">[歌曲MV]如果突然想起我</div></div></a></el-carousel-item>
          <el-carousel-item><a :href="this.url"><div class="banner-image"><div class="banner-info">[歌曲MV]如果突然想起我</div></div></a></el-carousel-item>
        </el-carousel>
      </div>
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
</style>