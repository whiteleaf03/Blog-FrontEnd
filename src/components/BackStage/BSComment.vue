<template>
  <div id="BSComment">
    <div id="title">网站留言管理</div>
    <div id="CommentList">
      <div class="line">
        <div class="info">
          <div class="date">日期</div>
          <div class="nickname">昵称</div>
          <div class="email">邮箱</div>
          <div class="text">评论内容</div>
        </div>
        <div style="flex: 1"></div>
      </div>
      <div class="line" v-for="comment in this.commentList">
        <div class="info">
          <div class="date">{{ comment.date }}</div>
          <div class="nickname">{{ comment.nickname }}</div>
          <div class="email">{{ comment.email }}</div>
          <div class="text">{{ comment.text }}</div>
        </div>
        <button @click="this.delete(comment.id)">删&nbsp;除</button>
      </div>
    </div>
  </div>
</template>

<script>
import {deleteComment, getComment} from "../../request/BackDeskRequest.js";
  import {tsToDate} from "../../utils.js";

  export default {
    name: "BSComment",
    data() {
      return {
        commentList: []
      }
    },
    mounted() {
      this.init()
    },
    methods: {
      async init() {
        let result = await getComment();
        for (let index in result.data) {
          result.data[index].date = tsToDate(result.data[index].date)
        }
        result.data = result.data.reverse()
        this.commentList = result.data
      },
      async delete(id) {
        let result = await deleteComment(id)
        if (result.msg === 'OK') {
          location.reload()
        }
      }
    }
  }
</script>

<style scoped>
  #BSComment {
    display: flex;
    flex-direction: column;
  }

  #title {
    font-family: 包圆小白体, fangsong;
    font-size: 48px;
  }

  #CommentList {
    display: flex;
    flex-direction: column;
    margin-top: 16px;
  }

  .line {
    display: flex;
    background-color: whitesmoke;
    margin-top: 16px;
    padding: 16px 32px;
    min-height: 32px;
    align-items: center;
  }

  .info {
    display: flex;
    width: 100%;
    flex: 10;
  }

  .line button {
    margin-left: auto;
    flex: 1;
    border-radius: 5px;
    width: 100%;
    padding: 6px;
    font-size: larger;
    background-color: whitesmoke;
    border: 1px solid #42a1ff;
  }

  .line button:active {
    box-shadow: 0 2px 6px 0 rgba(0,0,0,0.2), 0 10px 50px 0 rgba(0,0,0,0.2);
  }

  .date {
    flex: 2;
  }

  .nickname {
    flex: 2;
  }

  .email {
    flex: 3;
  }

  .text {
    flex: 5;
  }
</style>