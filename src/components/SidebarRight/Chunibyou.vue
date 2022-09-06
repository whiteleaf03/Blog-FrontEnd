<template>
  <div id="Chunibyou">
    <p>{{ sentence }}</p>
  </div>
</template>

<script>
  export default {
    name: "Chunibyou",
    data() {
      return {
        sentence: 'Something Bad Happen!'
      }
    }
  }
</script>

<style scoped>
  #Chunibyou {
    position: relative;
    background-color: rgba(255, 255, 255, 0.3);
    padding: 16px 32px;
    border-radius: 5px;
  }
</style>