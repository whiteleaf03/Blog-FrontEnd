<template>
  <div id="Message">
    <div id="title">留&nbsp;言&nbsp;墙</div>
    <div id="waterfall">
      <div class="waterfall">
        <div class="message-item" v-for="message in this.messageListLeft">
          <div class="nickname">{{message.nickname}}</div>
          <div class="date">{{message.date}}</div>
          <div style="height: 16px"></div>
          <div class="message">{{message.text}}</div>
        </div>
      </div>
      <div id="middle" class="waterfall">
        <div class="message-item" v-for="message in this.messageListMiddle">
          <div class="nickname">{{message.nickname}}</div>
          <div class="date">{{message.date}}</div>
          <div style="height: 16px"></div>
          <div class="message">{{message.text}}</div>
        </div>
      </div>
      <div class="waterfall">
        <div class="message-item" v-for="message in this.messageListRight">
          <div class="nickname">{{message.nickname}}</div>
          <div class="date">{{message.date}}</div>
          <div style="height: 16px"></div>
          <div class="message">{{message.text}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {getMessage} from "../../../request/FontDeskRequest.js";
  import {tsToDate} from "../../../utils.js";

  export default {
    name: 'Message',
    data() {
      return {
        messageListLeft: [],
        messageListMiddle: [],
        messageListRight: []
      }
    },
    mounted() {
      this.init()
    },
    methods: {
      async init() {
        let result = await getMessage()
        console.log(result)
        let i = 0
        for (let index in result.data) {
          result.data[index].date = tsToDate(result.data[index].date)
          if (i === 0) {
            this.messageListLeft.push(result.data[index])
            console.log('左列')
            i = 1
          } else if (i === 1) {
            this.messageListMiddle.push(result.data[index])
            console.log('中列')
            i = 2
          } else {
            this.messageListRight.push(result.data[index])
            console.log('右列')
            i = 0
          }
        }
        this.messageListLeft = this.messageListLeft.reverse()
        this.messageListMiddle = this.messageListMiddle.reverse()
        this.messageListRight = this.messageListRight.reverse()
      }
    }
  }
</script>

<style scoped>
  #Message {
    display: flex;
    flex-direction: column;
  }

  #title {
    background-color: whitesmoke;
    margin-bottom: 36px;
    padding: 16px;
    text-align: center;
    font-family: 包圆小白体, fangsong;
    font-size: 48px;
    font-weight: 600;
    border-radius: 15px;
  }

  #waterfall {
    display: flex;
  }

  #middle {
    margin: 0 16px;
  }

  .waterfall {
    flex: 1;
  }

  .message-item {
    padding: 16px;
    display: flex;
    flex-direction: column;
    min-height: 75px;
    margin-bottom: 16px;
    background-color: whitesmoke;
  }

  .nickname {
    flex: 1;
    font-family: 包圆小白体, fangsong;
    font-size: 24px;
  }

  .date {
    flex: 1;
    font-family: Tanugo糖果手写体, fangsong;
    font-size: small;
  }

  .message {
    flex: 3;
  }
</style>