<template>
  <div id="UserCard">
    <img src="/images/avatar.jpg" id="avatar" alt="ERROR">
    <div id="username">WhiteLeaf03</div>
    <div id="introduce">一枚渣渣程序员</div>
    <div id="info">
      <div class="info">
        <div class="info-number">{{ note }}</div>
        <div class="info-tips">文章</div>
      </div>
      <div class="info">
        <div class="info-number">{{ saysay }}</div>
        <div class="info-tips">说说</div>
      </div>
      <div class="info">
        <div class="info-number">{{ recommend }}</div>
        <div class="info-tips">推荐</div>
      </div>
    </div>
  </div>
</template>

<script>
  import {getAnalysis} from "../../../request/FontDeskRequest.js";

  export default {
    name: "UserCard",
    data() {
      return {
        note: 0,
        saysay: 0,
        recommend: 0
      }
    },
    mounted() {
      this.init()
    },
    methods: {
      async init() {
        let result = await getAnalysis()
        this.note = result.data.note
        this.saysay = result.data.saysay
        this.recommend = result.data.recommend
      }
    }
  }
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
    user-select: none;
  }

  #UserCard {
    position: relative;
    padding: 16px;
    border-radius: 5px;
    border: 1px solid #42a1ff;
    backdrop-filter: blur(3px);
    background-color: rgba(245, 245, 245, 0.5);
  }

  #avatar {
    display: inline-block;
    border-radius: 1000px;
    width: 54px;
    height: 54px;
    vertical-align: middle;
    margin-right: 16px;
  }

  #username {
    display: inline-block;
    font-family: 包圆小白体, fangsong, serif;
    height: 54px;
    line-height: 54px;
    font-size: xx-large;
    font-weight: bolder;
    vertical-align: middle;
  }

  #introduce {
    margin-top: 16px;
    text-align: right;
    font-family: Tanugo糖果手写体, fangsong;
    font-size: 18px;
  }

  #info {
    display: flex;
    margin-top: 16px;
  }

  .info {
    flex: 1;
    text-align: center;
  }

  .info-number {
    font-family: Tanugo糖果手写体, fangsong;
    font-size: larger;
  }

  .info-tips {
    font-family: 包圆小白体, fangsong;
    font-size: larger;
  }
</style>