<template>
  <div id="QuickComment">
    <p id="title">给我留言吧</p>
    <p class="tips">昵称*</p>
    <input v-model="nickname" class="input">
    <p class="tips">邮箱</p>
    <input v-model="email" placeholder="非必填，审核通过后发送邮件通知" class="input">
    <p class="tips">留言*</p>
    <textarea v-model="text" class="input" style="resize: none; height: 96px"></textarea>
    <div  id="button">
      <button @click="submitComment">提&nbsp;&nbsp;交</button>
    </div>
  </div>
</template>

<script>
  import {postComment} from "../../../request/FontDeskRequest.js";

  export default {
    name: "QuickComment",
    data() {
      return {
        nickname: '',
        email: '',
        comment: ''
      }
    },
    methods: {
      async submitComment() {
        await postComment(this.nickname, this.email, this.text, Date.now())
        this.nickname = ''
        this.email = ''
        this.text = ''
        alert('评论成功')
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

  #QuickComment {
    position: relative;
    padding: 16px 32px;
    border-radius: 5px;
    border: 1px solid #42a1ff;
    margin-top: 16px;
    text-align: center;
    backdrop-filter: blur(3px);
    background-color: rgba(245, 245, 245, 0.5);
    display: flex;
    flex-direction: column;
  }

  #title {
    font-size: 36px;
    font-family: 包圆小白体, fangsong;
  }

  .tips {
    text-align: left;
    width: 196px;
    font-family: Tanugo糖果手写体, fangsong;
    font-size: 24px;
  }

  .input {
    width: auto;
    justify-content: center;
    border-radius: 5px;
    border: 2px solid deepskyblue;
    outline: none;
    background-color: rgba(245, 245, 245);
    font-size: 12px;
    padding: 6px;
  }

  .input:focus {
    outline: none;
    background-color: white;
    border: 2px solid #0080ff;
  }

  #button {
   display: flex;
    align-items: center;
    justify-content: center;
  }

  #button button {
    width: 60%;
    margin-top: 12px;
    background-color: white;
    border-radius: 5px;
    border: 2px solid deepskyblue;
    padding: 6px 0;
  }

  #button button:active {
    box-shadow: 0 2px 6px 0 rgba(0,0,0,0.2), 0 17px 50px 0 rgba(0,0,0,0.2);
  }
</style>