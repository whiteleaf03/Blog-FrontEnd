<template>
  <div id="Note">
    <div id="info">
      <div id="title">{{ title }}</div>
      <div style="display: flex">
        <div id="date">{{ date }}</div>
        <div id="subTitle">{{ subTitle }}</div>
      </div>
      <div id="cover"><img :src="coverPath" alt=""></div>
    </div>
    <div id="content">
      <div v-html="text" class="editor-content-view"></div>
    </div>
  </div>
</template>

<script>
  import {getNote} from "../../../../request/FontDeskRequest.js";
  import {tsToDate} from "../../../../utils.js";

  export default {
    name: "Note",
    data() {
      return {
        title: '',
        subTitle: '',
        date: '',
        coverPath: '',
        text: ''
      }
    },
    methods: {
      async init() {
        let result = await getNote(this.$route.params.id)
        this.title = result.data.title
        this.subTitle = result.data.subTitle
        this.date = tsToDate(result.data.date)
        this.coverPath = result.data.coverPath
        this.text = result.data.text
        console.log('高亮')
      }
    },
    created() {
      this.init()
    },
    mounted() {
      // this.init()
    }
  }
</script>

<style scoped>
  #Note {
    display: flex;
    flex-direction: column;
  }

  #info {
    display: flex;
    flex-direction: column;
    height: auto;
    margin-bottom: 16px;
  }

  #title {
    flex: 2;
    text-align: center;
    font-size: xxx-large;
    font-family: Tanugo糖果手写体, fangsong;
  }

  #date {
    flex: 1;
    text-align: left;
    font-size: large;
  }

  #subTitle {
    flex: 1;
    text-align: right;
    font-size: large;
  }

  #cover {
    margin-top: 32px;
    height: auto;
  }

  #cover img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 25%;
  }

  #content {
    margin-top: 16px;
  }
</style>