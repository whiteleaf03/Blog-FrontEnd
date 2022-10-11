<template>
  <div id="Copyright">
    <div class="title">网站为个人学习用</div>
    <div class="title">非商业用途</div>
    <div class="title">导航栏图标</div>
    <div class="line">IconPark</div>
    <div class="title">使用字体</div>
    <div class="line">包圆小白体 阿里普惠体</div>
  </div>
</template>

<script>
  export default {
    name: "Copyright"
  }
</script>

<style scoped>
  #Copyright {
    position: relative;
    padding: 16px 32px;
    border-radius: 5px;
    border: 1px solid #42a1ff;
    margin-top: 16px;
    text-align: center;
    backdrop-filter: blur(3px);
    background-color: rgba(245, 245, 245, 0.5);
  }

  .title {
    font-size: 20px;
    font-weight: lighter;
  }

  .line {
    font-family: 阿里巴巴普惠体-regular;
    font-size: 16px;
    font-weight: lighter;
  }
</style>