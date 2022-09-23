<template>
  <div id="SidebarLeft">
    <UserCard></UserCard>
    <LinkList></LinkList>
    <BlogRunningTime></BlogRunningTime>
  </div>
</template>

<script>
  import UserCard from "./SidebarLeft/UserCard";
  import LinkList from "./SidebarLeft/LinkList";
  import BlogRunningTime from "./SidebarLeft/BlogRunningTime";
  export default {
    name: "SidebarLeft",
    components: {BlogRunningTime, LinkList, UserCard},
    mounted() {
      document.getElementById("SidebarLeft").style.marginLeft = `${innerWidth * 0.15}px`
    }
  }
</script>

<style scoped>
  #SidebarLeft {
    width: 260px;
    display: inline-block;
  }
</style>