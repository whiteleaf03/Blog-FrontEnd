<template>
  <div id="Timeline">
    <div class="time">
      <div class="date">2021年10月6日</div>
      <div class="event">购买腾讯云服务器</div>
    </div>
    <div class="time">
      <div class="date">2022年4月14日</div>
      <div class="event">风之屿v1.0建立</div>
    </div>
    <div class="time">
      <div class="date">2022年8月4日</div>
      <div class="event">网站因备案关闭</div>
    </div>
    <div class="time">
      <div class="date">2022年9月3日</div>
      <div class="event">风之屿v2.0建立</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Timeline"
  }
</script>

<style scoped>
  #Timeline {
    display: flex;
    flex-direction: column;
  }

  .time {
    flex: 1;
    display: flex;
    margin-top: 16px;
    font-size: large;
  }

  .date {
    font-family: Tanugo糖果手写体, fangsong;
    color: black;
    margin-right: 16px;
    flex: 1;
  }

  .event {
    flex: 3;
    font-family: Tanugo糖果手写体, fangsong;
  }
</style>