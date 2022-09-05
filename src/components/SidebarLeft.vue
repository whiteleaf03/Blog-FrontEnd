<template>
  <div id="SidebarLeft">
    <UserCard></UserCard>
  </div>
</template>

<script>
  import UserCard from "./SidebarLeft/UserCard";
  export default {
    name: "SidebarLeft",
    components: {UserCard},
    mounted() {
      document.getElementById("SidebarLeft").style.marginLeft = `${innerWidth * 0.2}px`
      document.getElementById("SidebarLeft").style.marginRight = `0px`
    }
  }
</script>

<style scoped>
  #SidebarLeft {
    width: 260px;
  }
</style>