<template>
  <div id="UserCard">
    <img src="images/avatar.jpg" id="avatar" alt="ERROR">
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
    background-color: rgba(255, 255, 255, 0.3);
    padding: 16px 32px;
    border-radius: 5px;
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