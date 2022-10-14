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
  }
</script>

<style scoped>
  #SidebarLeft {
    display: inline-block;
    flex: 1;
  }
</style>