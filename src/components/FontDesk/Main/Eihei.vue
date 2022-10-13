<template>
  <div id="Eihei">
    <div id="Recommend">
      <div class="title">站☆长☆推☆荐</div>
      <div id="banner">
        <ul id="img-list">
          <li><a href=""><div class="banner-image"><div class="banner-info">[歌曲MV]如果突然想起我</div></div></a></li>
          <li><a href=""><div class="banner-image"><div class="banner-info">[歌曲MV]如果突然想起我</div></div></a></li>
          <li><a href=""><div class="banner-image"><div class="banner-info">[歌曲MV]如果突然想起我</div></div></a></li>
          <li><a href=""><div class="banner-image"><div class="banner-info">[歌曲MV]如果突然想起我</div></div></a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Eihei',
    data() {
      return {
        left: 12,
        timer: 0,
        bannerWidth: 0,
        step: 150
      }
    },
    mounted() {
      this.runBanner()
    },
    methods: {
      runBanner() {
        if (this.left <= -1800) {
          this.left = 0;
        }
        document.getElementById('img-list').style.marginLeft = `${this.left}px`
        let n
        n = (this.left % 600 === 0) ? n = 2500 : n = 10
        this.timer = setTimeout(this.runBanner, n)
        this.left -= 6
      }
    }
  }
</script>

<style scoped>
  #Eihei {

  }

  #Recommend {
    padding: 0 16px;
  }

  .title {
    font-family: 包圆小白体, fangsong;
    font-size: 42px;
    text-align: center;
  }

  #banner {
    width: 600px;
    height: 338px;
    overflow: hidden;
    margin: 32px auto 0;
    position: relative;
  }

  #img-list {
    width: 2400px;
    height: 338px;
    list-style: none;
    margin: 0;
    padding: 0;
    text-decoration: none;
  }

  #img-list li {
    float: left;
  }

  a, a:visited {
    color: black;
  }

  .banner-image {
    width: 600px;
    height: 338px;
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

  .Recommend-Item {
    display: flex;
    background-color: whitesmoke;
    margin: 32px 0;
  }

  .Recommend-Item-cover {
    width: 320px;
    height: 180px;
    display: inline-block;
    margin-right: 32px;
    flex: 1;
  }

  .Recommend-Item-title {
    flex: 2;
    display: flex;
    text-align: center;
  }

  .Recommend-Item-class {
    flex: 3;
    text-align: center;
  }

  .Recommend-Item-link {
    flex: 3;
  }
</style>