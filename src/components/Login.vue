<template>
  <div id="Login">
    <div id="title">风 起 地</div>
    <div class="line">
      <div class="tips">用户名</div>
      <div class="input"><input v-model="username" type="text"></div>
    </div>
    <div class="line">
      <div class="tips">密码</div>
      <div class="input"><input v-model="password" type="password"></div>
    </div>
    <div class="line">
      <div style="width: 360px; text-align: center">
        <input class="button" type="button" value="can can need" v-on:click="login">
      </div>
    </div>
    <div class="line">
      <div style="width: 360px; text-align: center">
        <router-link to="/home"><input class="button" type="button" value="愿风神忽悠你"></router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        username: '',
        password: '',
        valid: ''
      }
    },
    methods: {
      async login() {
        this.$router.push('/admin')
      }
    }
  }
</script>

<style scoped>
  #Login {
    backdrop-filter: blur(25px);
    width: 640px;
    height: auto;
    margin: 120px auto 0;
    border: 3px black solid;
    border-radius: 15px;
  }

  #title {
    text-align: center;
    font-size: 56px;
    margin-top: 16px;
  }

  .line {
    margin: 32px auto;
    width: 360px;
  }

  input {
    width: 360px;
    border-radius: 5px;
    border: 1px solid black;
    padding: 6px;
    font-family: 阿里巴巴普惠体-regular;
  }

  input:focus {
    outline: 1px solid black;
  }

  .button {
    width: 180px;
    margin: 0px auto 0;
    font-family: 包圆小白体, fangsong;
  }

  #back {
    width: 64px;
    height: 64px;
    position: absolute;
    right: 16px;
    top: 16px;
    border: 3px solid black;
    border-radius: 5px;
  }
</style>