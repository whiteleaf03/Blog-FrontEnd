<template>
  <router-view></router-view>
</template>

<script>
  export default {
    methods: {
      randomBackgroundImage() {
        let file
        do {
          file = Math.round(Math.random() * 21)
        } while (file === 21 || file === 0)
        document.body.style.backgroundImage = `url("/images/background/${file}.jpg")`
      }
    },
    mounted() {
      this.randomBackgroundImage()
    }
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    user-select: none;
    font-family: 包圆小白体, fangsong;
    font-size: 24px;
  }

  body {
    background-size: cover;
    position: relative;
  }

  @font-face {
    font-family: 包圆小白体;
    src: url("/font-family/BaoTuXiaoBaiTi-2.ttf");
  }

  @font-face {
    font-family: 阿里巴巴普惠体-regular;
    src: url("font-family/AlibabaPuHuiTi-2-55-Regular");
  }
</style>