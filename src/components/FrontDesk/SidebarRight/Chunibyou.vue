<template>
  <div id="Chunibyou">
    <p>&nbsp;&nbsp;{{ sentence }}</p>
  </div>
</template>

<script>
  import {getChunibyou} from "../../../request/FontDeskRequest.js";

  export default {
    name: "Chunibyou",
    data() {
      return {
        sentence: 'Something Bad Happen!'
      }
    },
    methods: {
      async init() {
        let result = await getChunibyou()
        this.sentence = result.data.text
      }
    },
    mounted() {
      this.init()
    }
  }
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
    user-select: none;
  }

  #Chunibyou {
    position: relative;
    backdrop-filter: blur(3px);
    background-color: rgba(245, 245, 245, 0.5);
    padding: 16px 32px;
    border-radius: 5px;
    border: 1px solid #42a1ff;
    font-family: Tanugo糖果手写体, fangsong;
    font-size: 24px;
  }
</style>