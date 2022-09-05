<template>
  <div id="SidebarLeft">
    <UserCard></UserCard>
    <LinkList></LinkList>
  </div>
</template>

<script>
  import UserCard from "./SidebarLeft/UserCard";
  import LinkList from "./SidebarLeft/LinkList";
  export default {
    name: "SidebarLeft",
    components: {LinkList, UserCard},
    mounted() {
      document.getElementById("SidebarLeft").style.marginLeft = `${innerWidth * 0.2}px`
      document.getElementById("SidebarLeft").style.marginRight = `0px`
    }
  }
</script>

<style scoped>
  #SidebarLeft {
    width: 260px;
    background-color: rgba(245, 245, 245, 0.2);
    backdrop-filter: blur(5px);
  }
</style>