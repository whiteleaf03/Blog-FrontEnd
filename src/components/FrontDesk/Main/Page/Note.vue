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

    </div>
  </div>
</template>

<script>
  export default {
    name: "Note",
    data() {
      return {
        title: 'Vite构建Vue项目',
        subTitle: '构建命令及配置文件',
        date: '2022-01-01',
        coverPath: '/images/test/note01.png',
        richText: ''
      }
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
    height: 320px;
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
</style>