<template>
  <div id="BSAnalysis">
    <div id="title">网站数据汇总</div>
    <div id="BackStageData">
      <div class="showData">
        <div class="line">
          <div class="tips">文章(篇)</div>
          <div class="number">{{ note }}</div>
        </div>
        <div class="line">
          <div class="tips">说说(条)</div>
          <div class="number">{{ saysay }}</div>
        </div>
        <div class="line">
          <div class="tips">留言(条)</div>
          <div class="number">{{ comment }}</div>
        </div>
      </div>
      <div class="showData">
        <div class="line">
          <div class="tips">中二病语句(句)</div>
          <div class="number">{{ chunibyou }}</div>
        </div>
        <div class="line">
          <div class="tips">资源推荐(个)</div>
          <div class="number">{{ recommend }}</div>
        </div>
        <div class="line">
          <div class="tips">访问量(次)</div>
          <div class="number">{{ click }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {getAnalysis} from "../../request/BackDeskRequest.js";

  export default {
    name: "BSAnalysis",
    data() {
      return {
        note: 0,
        saysay: 0,
        comment: 0,
        chunibyou: 0,
        recommend: 0,
        click: 0
      }
    },
    mounted() {
      this.init()
    },
    methods: {
      async init() {
        let result = await getAnalysis();
        this.note = result.data.note
        this.saysay = result.data.saysay
        this.comment = result.data.comment
        this.chunibyou = result.data.chunibyou
        this.recommend = result.data.recommend
      }
    }
  }
</script>

<style scoped>
  #BSAnalysis {
    font-family: 阿里巴巴普惠体-regular, fangsong;
    display: flex;
    flex-direction: column;
  }

  #title {
    font-family: 包圆小白体, fangsong;
    font-size: 48px;
  }

  .showData {
    display: flex;
  }

  .line {
    flex: 1;
    margin: 36px 96px;
    background-color: whitesmoke;
    padding: 32px;
    border: 3px solid gold;
    border-radius: 15px;
  }

  .tips {
    font-family: Tanugo糖果手写体, fangsong;
    font-size: 20px;
    margin-bottom: 16px;
  }

  .number {
    font-size: 32px;
    font-weight: 1000;
  }
</style>