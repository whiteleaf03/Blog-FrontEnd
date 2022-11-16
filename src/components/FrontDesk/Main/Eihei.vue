<template>
  <div id="Eihei">
    <div id="Recommend">
      <div id="Recommend-title">站☆长☆推☆荐</div>
      <div id="Recommend-banner">
        <a-carousel autoplay="true" arrows>
          <div v-for="banner in this.bannerList"><a :href="banner.resourcePath">
              <img :src="banner.coverPath" class="banner-image">
              <div class="banner-info">[{{ banner.type }}]{{ banner.title }}</div>
          </a></div>
        </a-carousel>
      </div>
      <div><a class="Recommend-line" v-for="recommend in this.recommendList" :href="recommend.resourcePath">
        <div style="flex: 3"></div>
        <img class="Recommend-line-img" :src="recommend.coverPath">
        <div style="flex: 2"></div>
        <div class="Recommend-line-info">
          <div class="Recommend-line-title">{{recommend.title}}</div>
          <div class="Recommend-line-subtitle">{{recommend.type}}</div>
        </div>
        <div style="flex: 3"></div>
      </a></div>
    </div>
  </div>
</template>

<script>
  import {getRecommand} from "../../../request/FontDeskRequest.js";

  export default {
    name: 'Eihei',
    data() {
      return {
        url: '',
        bannerList: [],
        recommendList: []
      }
    },
    mounted() {
      this.init()
    },
    methods: {
      async init() {
        let result = await getRecommand()
        result.data = result.data.reverse()
        if (result.data.length <= 3) {
          this.bannerList = result.data
          console.log('设置完毕')
        } else {
          this.bannerList = result.data.slice(0, 3)
          this.recommendList = result.data.slice(3)
        }
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
    width: 100%;
    height: 100%;
  }

  .banner-image {
    object-fit: cover;
    width: 100%;
    height: 100%;
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
    height: 180px;
    margin: 36px 0;
  }

  .Recommend-line-img {
    flex: 7;
  }

  .Recommend-line-info {
    flex: 8;
    display: flex;
    flex-direction: column;
  }

  .Recommend-line-title {
    font-family: 包圆小白体, fangsong;
    font-size: 24px;
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