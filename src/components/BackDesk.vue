<template>
  <Menu></Menu>
  <router-view></router-view>
</template>

<script>
  import Menu from "./BackDesk/Menu";
  export default {
    name: "BackDesk",
    components: {Menu},
    mounted() {

    }
  }
</script>

<style scoped>

</style>