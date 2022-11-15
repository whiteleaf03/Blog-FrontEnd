<template>
  <div id="BSSaysay">
    <div id="title">网站说说管理</div>
    <div id="addSaysay">
      <div class="subTitle">添加说说</div>
      <div style="display: flex;" id="submit">
        <input v-model="text" placeholder="内容">
        <button @click="post">提 交</button>
        <div style="flex: 20;"></div>
      </div>
    </div>
    <div id="SaysayList">
      <div class="subTitle">删除说说</div>
      <div class="line" v-for="saysay in this.saysayList">
        <div class="info">
          <div class="date">{{ saysay.date }}</div>
          <input :value="saysay.text" class="text">
        </div>
        <div class="button">
          <div style="flex: 1"></div>
<!--          <button @click="this.put(saysay.id, saysay.text)">修&nbsp;改</button>-->
          <div style="flex: 1"></div>
          <button @click="this.delete(saysay.id)">删&nbsp;除</button>
          <div style="flex: 1"></div>
          <div style="flex: 1"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {deleteSaysay, getSaysay, postSaysay, putSaysay} from "../../request/BackDeskRequest.js";
  import {tsToDate} from "../../utils.js";

  export default {
    name: "BSSaysay",
    data() {
      return {
        text: '',
        saysayList: []
      }
    },
    mounted() {
      this.init()
    },
    methods: {
      async init() {
        let result = await getSaysay()
        for (let index in result.data) {
          result.data[index].date = tsToDate(result.data[index].date)
        }
        this.saysayList = result.data.reverse()
      },
      async get() {
        await getSaysay()
      },
      async post() {
        if (this.text !== '') {
          let result = await postSaysay(Date.now(), this.text)
          if (result.msg === 'OK') {
            location.reload()
          }
        }
      },
      async put(id, text) {
        console.log(text)
      },
      async delete(id) {
        let result = await deleteSaysay(id)
        if (result.msg === "OK") {
          location.reload()
        }
      }
    }
  }
</script>

<style scoped>
  #BSSaysay {
    display: flex;
    flex-direction: column;
  }

  #title {
    font-family: 包圆小白体, fangsong;
    font-size: 48px;
  }

  .subTitle {
    font-family: Tanugo糖果手写体, fangsong;
    font-size: 28px;
  }

  #addSaysay {
    display: flex;
    flex-direction: column;
    margin-top: 16px;
  }

  #submit {
    margin-top: 16px;
    height: 48px;
  }

  #submit input {
    width: 30%;
    justify-content: center;
    border-radius: 5px;
    border: 2px solid deepskyblue;
    outline: none;
    background-color: rgba(245, 245, 245);
    font-size: 16px;
    padding: 6px;
  }

  #submit button {
    margin-left: 32px;
  }

  #SaysayList {
    display: flex;
    flex-direction: column;
    margin-top: 16px;
  }

  .line {
    display: flex;
    background-color: whitesmoke;
    padding: 16px;
    align-items: center;
    border-radius: 15px;
    margin-top: 32px;
  }

  .info {
    flex: 3;
    display: flex;
  }

  .date {
    flex: 1;
    padding: 0 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 包圆小白体, fangsong;
    font-size: xx-large;
  }

  .text {
    flex: 3;
    width: auto;
    justify-content: center;
    border-radius: 5px;
    border: 2px solid deepskyblue;
    outline: none;
    background-color: rgba(245, 245, 245);
    font-size: 12px;
    padding: 6px;
  }

  .button {
    flex: 1;
    display: flex;
    margin-left: auto;
  }

  button {
    flex: 2;
    border-radius: 5px;
    width: 100%;
    padding: 6px;
    font-size: larger;
    background-color: whitesmoke;
    border: 1px solid #42a1ff;
  }

  button:active {
    box-shadow: 0 2px 6px 0 rgba(0,0,0,0.2), 0 10px 50px 0 rgba(0,0,0,0.2);
  }
</style>