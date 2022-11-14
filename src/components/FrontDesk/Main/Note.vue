<template>
  <div id="Note">
    <div id="Note-Search" class="Note-Item">
      <p>搜索文章</p>
      <input placeholder="未来可期">
      <button><img src="/images/icon/搜索_search.png"></button>
    </div>
    <div class="Note-Item" @click="goToNote(0)">
      <div class="Note-Info">
        <div class="Note-Avatar"></div>
        <div style="display: flex; flex-direction: column">
          <div class="Note-Author">WhiteLeaf03</div>
          <div class="Note-Date">2022-01-01</div>
        </div>
      </div>
      <div class="Note-Main">
        <div class="Note-Cover"></div>
        <div class="Note-Title">测试用标题114514</div>
        <div class="Note-Subtitle">这么臭的标题真有必要要吗（恼</div>
      </div>
    </div>
    <div class="Note-Item" v-for="note in this.noteList" @click="this.goToNote(1)">
      <div class="Note-Info">
        <div class="Note-Avatar"></div>
        <div style="display: flex; flex-direction: column">
          <div class="Note-Author">WhiteLeaf03</div>
          <div class="Note-Date">{{note.date}}</div>
        </div>
      </div>
      <div class="Note-Main">
        <div class="Note-Cover"></div>
        <div class="Note-Title">{{note.title}}</div>
        <div class="Note-Subtitle">{{note.subTitle}}</div>
      </div>
    </div>
    <div id="Note-End" class="Note-Item">
      到底啦~
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Note',
    data() {
      return {
        noteList: [{
          title: '测试',
          subTitle: '测试',
          date: '2022-01-01',
        }]
      }
    },
    methods: {
      goToNote(id) {
        this.$router.push(`/note/${id}`)
      }
    }
  }
</script>

<style scoped>
  #Note {

  }

  #Note-Search {
    display: flex;
  }

  #Note-Search p,#Note-Search p:hover  {
    width: 80px;
    line-height: 34px;
    color: black;
  }

  #Note-Search input {
    flex: 8;
    height: 32px;
    margin-right: 16px;
    padding: 0 16px;
  }

  #Note-Search button {
    width: 36px;
    height: 36px;
    display: flex;
    background-color: rgba(245, 245, 245, 0);
    border: 1px solid black;
    border-radius: 5px;
  }

  #Note-Search button img {
    width: 36px;
    height: 36px;
  }

  .Note-Item {
    background-color: rgba(245, 245, 245);
    padding: 16px;
    border-radius: 5px;
    margin-bottom: 32px;
  }

  .Note-Item:hover {
    box-shadow: 0 0 10px 2px gray;
    color: #42a1ff;
  }

  .Note-Info {
    display: flex;
    margin-bottom: 16px;
  }

  .Note-Avatar {
    background-image: url("images/avatar.jpg");
    background-size: cover;
    border-radius: 50px;
    width: 54px;
    height: 54px;
    display: inline-block;
    margin-right: 24px;
  }

  .Note-Author {
    font-family: Tanugo糖果手写体, fangsong;
    flex: 1;
  }

  .Note-Date {
    font-family: Tanugo糖果手写体, fangsong;
    font-size: 16px;
    flex: 1;
  }

  .Note-Main {
    display: flex;
    flex-direction: column;
    height: 296px;
    border: 1px rgba(200, 200, 200) solid;
    border-radius: 5px;
  }

  .Note-Cover {
    flex: 6;
    background-image: url("images/background/20.jpg");
    background-size: cover;
  }

  .Note-Title {
    flex: 3;
    font-family: 包圆小白体, fangsong;
    font-size: 56px;
    padding: 0 32px;
  }

  .Note-Title:hover {

  }

  .Note-Subtitle {
    font-size: medium;
    font-family: Tanugo糖果手写体, fangsong;
    flex: 1;
    padding: 0 32px;
  }

  a, a:visited {
    color: black;
    text-decoration: none;
  }

  #Note-End {
    margin-bottom: 0;
  }
</style>