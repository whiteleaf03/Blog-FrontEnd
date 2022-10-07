<template>
  <div id="UserCard">
    <img src="https://i.postimg.cc/3wZw7rM6/avatar.jpg" id="avatar" alt="ERROR">
    <p id="username">WhiteLeaf03</p>
    <p id="introduce">一枚渣渣程序员</p>
  </div>
</template>

<script>
  export default {
    name: "UserCard"
  }
</script>

<style scoped>
  #UserCard {
    position: relative;
    padding: 16px 32px;
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
    font-family: "Copperplate Gothic Light", serif;
    height: 54px;
    line-height: 54px;
    font-size: medium;
    font-weight: bolder;
  }

  #introduce {
    margin-top: 16px;
    text-align: right;
  }
</style>