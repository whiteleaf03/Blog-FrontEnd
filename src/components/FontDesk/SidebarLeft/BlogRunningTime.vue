<template>
  <div id="BlogRunningTime">
    <p class="runtime-text">本博客已运行(≧ω≦)</p>
    <p class="runtime-text">{{value}}</p>
  </div>
</template>

<script>
  export default {
    name: "BlogRunningTime",
    data() {
      return {
        timer: "",
        value: "",
      };
    },
    created() {
      this.getBlogRunningTime()
      this.timer = setInterval(this.getBlogRunningTime, 1000)
    },
    methods: {
      getBlogRunningTime() {
        const startTime = new Date(`2022-4-13 10:19:00`).getTime() / 1000;
        const nowTime = new Date().getTime() / 1000;
        let RunTime = Math.ceil(nowTime - startTime);
        const sec = RunTime % 60;
        RunTime = (RunTime - sec) / 60;
        const min = RunTime % 60;
        RunTime = (RunTime - min) / 60;
        const hour = RunTime % 24;
        RunTime = (RunTime - hour) / 24;
        const day = RunTime % 365;
        RunTime = (RunTime - day) / 365;
        const year = RunTime;
        if (`${sec}`.length === 1) {
          this.value = `${year}年${day}天${hour}时${min}分0${sec}秒`;
        } else {
          this.value = `${year}年${day}天${hour}时${min}分${sec}秒`;
        }
      }
    }
  };
</script>

<style>
  #BlogRunningTime {
    position: relative;
    padding: 16px;
    border-radius: 5px;
    border: 1px solid #42a1ff;
    backdrop-filter: blur(3px);
    background-color: rgba(245, 245, 245, 0.5);
    margin-top: 16px;
    text-align: center;
    display: flex;
    flex-direction: column;
  }

  .runtime-text {
    font-size: 20px;
    font-family: Tanugo糖果手写体, fangsong;
    flex: 1;
  }
</style>
