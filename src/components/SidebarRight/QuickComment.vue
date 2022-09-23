<template>
  <div id="QuickComment">
    <p id="title">给我留言吧</p>
    <p class="tips">昵称</p>
    <input v-model="username" class="input">
    <p class="tips">邮箱</p>
    <input v-model="email" class="input">
    <p class="tips">密码</p>
    <input v-model="password" class="input">
    <p class="tips">留言</p>
    <textarea v-model="comment" class="input" style="resize: none; height: 96px"></textarea>
  </div>
</template>

<script>
  export default {
    name: "QuickComment",
    data() {
      return {
        username: '',
        email: '',
        password: '',
        comment: ''
      }
    }
  }
</script>

<style scoped>
  #QuickComment {
    position: relative;
    padding: 16px 32px;
    border-radius: 5px;
    border: 1px solid #42a1ff;
    margin-top: 16px;
    text-align: center;
    backdrop-filter: blur(3px);
  }

  #title {
    font-size: 32px;
  }

  .tips {
    text-align: left;
    width: 196px;
  }

  .input {
    width: 196px;
    height: 24px;
    border-radius: 5px;
    border: 2px solid deepskyblue;
    outline: none;
  }

  .input:focus {
    outline: none;
    background-color: white;
    border: 2px solid #0080ff;
  }
</style>