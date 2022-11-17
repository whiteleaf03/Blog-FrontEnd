<template>
  <div id="Comment">
    <div id="title">留&nbsp;言&nbsp;墙</div>
    <div id="waterfall">
      <div class="waterfall">
        <div class="comment-item" v-for="comment in this.commentListLeft">
          <div class="nickname">{{comment.nickname}}</div>
          <div class="date">{{comment.date}}</div>
          <div style="height: 16px"></div>
          <div class="comment">{{comment.text}}</div>
        </div>
      </div>
      <div id="middle" class="waterfall">
        <div class="comment-item" v-for="comment in this.commentListMiddle">
          <div class="nickname">{{comment.nickname}}</div>
          <div class="date">{{comment.date}}</div>
          <div style="height: 16px"></div>
          <div class="comment">{{comment.text}}</div>
        </div>
      </div>
      <div class="waterfall">
        <div class="comment-item" v-for="comment in this.commentListRight">
          <div class="nickname">{{comment.nickname}}</div>
          <div class="date">{{comment.date}}</div>
          <div style="height: 16px"></div>
          <div class="comment">{{comment.text}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getComment} from "../../../request/FontDeskRequest.js";
  import {tsToDate} from "../../../utils.js";

  export default {
    name: 'Comment',
    data() {
      return {
        commentListLeft: [],
        commentListMiddle: [],
        commentListRight: []
      }
    },
    mounted() {
      this.init()
    },
    methods: {
      async init() {
        let result = await getComment()
        console.log(result)
        let i = 0
        for (let index in result.data) {
          result.data[index].date = tsToDate(result.data[index].date)
          if (i === 0) {
            this.commentListLeft.push(result.data[index])
            console.log('左列')
            i = 1
          } else if (i === 1) {
            this.commentListMiddle.push(result.data[index])
            console.log('中列')
            i = 2
          } else {
            this.commentListRight.push(result.data[index])
            console.log('右列')
            i = 0
          }
        }
        this.commentListLeft = this.commentListLeft.reverse()
        this.commentListMiddle = this.commentListMiddle.reverse()
        this.commentListRight = this.commentListRight.reverse()
      }
    }
  }
</script>

<style scoped>
  #Comment {
    display: flex;
    flex-direction: column;
  }

  #title {
    background-color: rgba(245, 245, 245, 0.75);
    margin-bottom: 36px;
    padding: 16px;
    text-align: center;
    font-family: 包圆小白体, fangsong;
    font-size: 48px;
    font-weight: 600;
    border-radius: 5px;
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

  .comment-item {
    padding: 16px;
    display: flex;
    flex-direction: column;
    min-height: 75px;
    margin-bottom: 16px;
    /*background-color: rgba(255, 255, 255, 1);*/
    /*background-image: linear-gradient(90deg, #ffffff 0%, #f2f2f2 30%, #d6d6d6 60%, #b5b5b5 100%);*/
    background-color: rgba(245, 245, 245, 0.75);
  }

  .nickname {
    flex: 1;
    font-family: Tanugo糖果手写体, fangsong;
    font-size: x-large;
  }

  .date {
    flex: 1;
    font-family: Tanugo糖果手写体, fangsong;
    font-size: small;
  }

  .comment {
    flex: 3;
    font-size: medium;
  }
</style>