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
      <div><a class="Recommend-line" v-for="recommend in this.recommendList" :href="recommend.resourcePath" target="_blank">
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
        bannerList: [
          {
            resourcePath: 'https://www.bilibili.com/video/BV1zZ4y137KH',
            coverPath: '/images/test/Recommend-002.jpg',
            type: '视频',
            title: '【喵☆酱】拼凑的断音'
          },
          {
            resourcePath: 'https://www.bilibili.com/video/BV1R7411774f',
            coverPath: '/images/test/123.png',
            type: '视频',
            title: 'SpringCloudAlibaba教程'
          },
          {
            resourcePath: 'https://www.bilibili.com/video/BV1ob4y1Y7Ep',
            coverPath: '/images/test/456.jpg',
            type: '视频',
            title: 'Cookie、Session、Token究竟区别在哪'
          }
        ],
        recommendList: [
          {
            resourcePath: 'https://www.bilibili.com/video/BV1gv4y1Q7x9',
            coverPath: '/images/test/789.jpg',
            type: '歌曲翻唱',
            title: '【多多poi】枕边童话'
          },
          {
            resourcePath: 'https://www.bilibili.com/video/BV1Bq4y1Q7GZ',
            coverPath: '/images/test/SpringCode.jpg',
            type: '视频',
            title: 'Spring源码'
          },
          {
            resourcePath: 'https://live.bilibili.com/1051386',
            coverPath: '/images/test/train.jpg',
            type: '直播',
            title: '火车带你去旅行'
          },
          {
            resourcePath: 'https://www.bilibili.com/video/BV1ev411k73K',
            coverPath: '/images/test/cat.jpg',
            type: '直播录屏',
            title: '猫 | 自习 | 轻音乐'
          }
        ]
      }
    },
    mounted() {
      this.init()
    },
    methods: {
      async init() {
        let result = await getRecommand()
        if (result.data.length <= 3) {
          this.bannerList = result.data
          console.log('设置完毕')
        } else {
          this.bannerList = result.data.slice(0, 3)
          this.recommendList = (result.data.slice(3)).reverse()
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
    position: relative;
  }

  .banner-image {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  .banner-info {
    position: absolute;
    left: 0px;
    top: 0px;
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
    width: 288px;
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