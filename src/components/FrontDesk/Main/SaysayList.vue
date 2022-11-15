<template>
  <div id="SaysayList">
    <div id="Saysay-Start" class="Saysay-Item">至今已发布说说 {{sum}} 条啦 (≥w≤)</div>
    <div class="Saysay-Item" v-for="saysay in this.saysayList">
      <div class="info">
        <div class="avatar"></div>
        <div style="flex: 3; display: flex; flex-direction: column; margin-left: 16px;">
          <div class="username">WhiteLeaf03</div>
          <div class="date">{{saysay.date}}</div>
        </div>
        <div style="flex: 10"></div>
      </div>
      <div class="text">{{saysay.text}}</div>
    </div>
    <div id="Saysay-End" class="Saysay-Item">到底啦~</div>
  </div>
</template>

<script>
  import {getSaysay} from "../../../request/FontDeskRequest.js";
  import {tsToDate} from "../../../utils.js";

  export default {
    name: 'SaysayList',
    data() {
      return {
        height: '0px',
        sum: 0,
        saysayList: [
          {
            date: '2022-01-01',
            text: '暑假由于学业和秋招没有回家，今天又和我妈通电话，忽然就感觉，还是自家母亲最好，到底是长大了啊。'
          }
        ]
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
        this.sum = this.saysayList.length
        console.log(document.getElementsByClassName('avatar'))
      }
    }
  }
</script>

<style scoped>
  #Saysay-Start {
    font-family: 包圆小白体, fangsong;
    font-size: 24px;
  }

  .Saysay-Item {
    background-color: rgba(245, 245, 245);
    padding: 24px;
    border-radius: 5px;
    margin-bottom: 32px;
  }

  .Saysay-Item:hover {
    box-shadow: 0 0 10px 2px gray;
  }

  .info {
    display: flex;
    margin-bottom: 16px;
  }

  .avatar {
    background-image: url("/images/avatar.jpg");
    background-size: cover;
    border-radius: 5000px;
    width: 50px;
    height: 50px;
  }

  .username {
    flex: 1;
    display: flex;
    align-items: center;
    font-size: larger;
  }

  .date {
    flex: 1;
    display: flex;
    align-items: center;
    color: gray;
    font-size: xx-small;
  }

  #Saysay-End {
    margin-bottom: 0;
    padding: 16px 24px;
  }
</style>