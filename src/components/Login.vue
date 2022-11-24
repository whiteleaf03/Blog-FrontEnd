<template>
  <div id="Login">
    <div style="flex: 1"></div>
    <div style="flex: 1; display: flex; flex-direction: column;">
      <div style="flex: 3; display: flex;flex-direction: column;">
        <div style="flex: 1"></div>
        <div id="Login-bg">
          <div id="Login-title">用户登录</div>
          <div id="Login-input">
            <div class="tips">用户名</div>
            <div class="input"><input v-model="username" type="text"></div>
            <div class="tips">密码</div>
            <div class="input"><input v-model="password" type="password"></div>
          </div>
          <div id="Login-button">
            <button @click="login">登&nbsp;&nbsp;&nbsp;录</button>
          </div>
        </div>
        <div style="flex: 1"></div>
      </div>
      <a href="https://beian.miit.gov.cn/" id="Beian" target="_blank">这是备案号\(^o^)/~</a>
    </div>
    <div style="flex: 1"></div>
  </div>
</template>

<script>
  import {login} from "../request/BackDeskRequest.js";
  import {setCookie} from "../utils.js";

  export default {
    name: "Login",
    data() {
      return {
        username: '',
        password: '',
        valid: ''
      }
    },
    mounted() {
      document.getElementById('Login').style.height = `${innerHeight}px`
    },
    methods: {
      async login() {
        let result = await login(this.username, this.password)
        if (result.status === 0 && result.msg === '登录成功') {
          //登录成功
          setCookie('token', result.data.token, -1)
          this.$router.push('/admin')
        } else {
          alert(result.msg)
        }
      }
    }
  }
</script>

<style>
  #Login {
    display: flex;
    width: 100%;
    height: complex;
  }

  #Login-bg {
    flex: 3;
    display: flex;
    flex-direction: column;
    backdrop-filter: blur(15px);
    border: 1px gold solid;
    border-radius: 15px;
  }

  #Login-title {
    flex: 1;
    text-align: center;
    font-family: 包圆小白体, fangsong;
    font-size: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #Login-input {
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 128px;
  }

  .tips {
    text-align: left;
    font-size: 32px;
    width: 100%;
    font-family: 包圆小白体, fangsong;
  }

  .input {
    width: 100%;
    height: 20%;
    display: flex;
    margin: 8px 0;
  }

  .input input {
    border: none;
    border-radius: 5px;
    width: 100%;
    padding: 6px;
    font-size: larger;
  }

  .input input:focus {
    outline: 2px solid cornflowerblue;
  }

  #Login-button {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #Login-button button {
    width: 30%;
    height: 40%;
    background: rgba(245, 245, 245, 0.3);
    border: 1px solid #42a1ff;
    border-radius: 5px;
    font-size: 24px;
    font-family: 包圆小白体, fangsong;
  }

  #Beian {
    height: 7%;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(8px);
    background-color: rgba(245, 245, 245, 0.5);
    margin: 26px 20px 26px 26px;
    border-radius: 5px;
    border: 1px solid deepskyblue;
    padding: 8px 0;
    font-family: 包圆小白体, fangsong;
    font-size: xx-large;
  }
</style>