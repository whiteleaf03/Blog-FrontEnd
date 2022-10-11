<template>
  <div id="SideMenu">
    <ul>
      <li><div><router-link to="/admin/home">首页</router-link></div></li>
      <li><div><router-link to="/admin/home">首页</router-link></div></li>
      <li><div><router-link to="/admin/home">首页</router-link></div></li>
      <li><div><router-link to="/admin/home">首页</router-link></div></li>
      <li><div><router-link to="/admin/home">首页</router-link></div></li>
      <li><div><router-link to="/admin/home">首页</router-link></div></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Menu"
  }
</script>

<style scoped>
  #SideMenu {
    display: flex;
    border-right: 3px gold solid;
    backdrop-filter: blur(15px);
    width: 128px;
    text-align: center;
  }
</style>