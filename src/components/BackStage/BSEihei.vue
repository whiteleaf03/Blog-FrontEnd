<template>
  <div id="BSEihei">
    <div id="Recommend">
      <div class="Recommend-input">
        <div class="title">推荐标题</div>
        <input v-model="title">
      </div>
      <div class="Recommend-input">
        <div class="title">封面路径</div>
        <input v-model="cover">
      </div>
      <div class="Recommend-input">
        <div class="title">资源类型</div>
        <input v-model="type">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "BSEihei",
    data() {
      return {
        title: "",
        cover: "",
        type: ""
      }
    }
  }
</script>

<style scoped>
  #Recommend {
    display: flex;
    height: 64px;
  }

  .Recommend-input {
    flex: 1;
    display: flex;
    flex-direction: column;
    margin: 32px;
  }
</style>