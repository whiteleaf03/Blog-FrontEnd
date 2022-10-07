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
    backdrop-filter: blur(3px);
    background-color: rgba(245, 245, 245, 0.5);
    padding: 16px 32px;
    border-radius: 5px;
    border: 1px solid #42a1ff;
  }
</style>