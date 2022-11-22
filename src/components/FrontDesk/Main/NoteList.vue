<template>
  <div id="NoteList">
    <div id="Note-Search" class="Note-Item">
      <p>搜索文章</p>
      <input placeholder="未来可期">
      <button><img src="/images/icon/搜索_search.png"></button>
    </div>
    <div class="Note-Item" v-for="note in this.noteList" @click="this.goToNote(note.id)">
      <div class="Note-Info">
        <div class="Note-Avatar"></div>
        <div style="display: flex; flex-direction: column">
          <div class="Note-Author">WhiteLeaf03</div>
          <div class="Note-Date">{{note.date}}</div>
        </div>
      </div>
      <div class="Note-Main">
        <div class="Note-Cover">
          <img :src="note.coverPath">
        </div>
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
  import {getNoteList} from "../../../request/FontDeskRequest.js";
  import {tsToDate} from "../../../utils.js";

  export default {
    name: 'NoteList',
    data() {
      return {
        noteList: []
      }
    },
    methods: {
      async init() {
        let result = await getNoteList()
        for (let index in result.data) {
          result.data[index].date = tsToDate(result.data[index].date)
        }
        this.noteList = result.data.reverse()
      },
      goToNote(id) {
        this.$router.push(`/note/${id}`)
      }
    },
    mounted() {
      this.init()
    }
  }
</script>

<style scoped>
  #NoteList {

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
    background-image: url("/images/avatar.jpg");
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
    font-size: x-large;
  }

  .Note-Date {
    font-family: Tanugo糖果手写体, fangsong;
    font-size: 16px;
    flex: 1;
  }

  .Note-Main {
    display: flex;
    flex-direction: column;
    height: 336px;
    border: 1px rgba(200, 200, 200) solid;
    border-radius: 5px;
  }

  .Note-Cover {
    flex: 6;
    height: 50%;
  }

  .Note-Cover img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 25%;
  }

  .Note-Title {
    flex: 2;
    font-family: 包圆小白体, fangsong;
    font-size: 56px;
    padding: 0 32px;
  }

  .Note-Title:hover {

  }

  .Note-Subtitle {
    font-size: large;
    font-family: Tanugo糖果手写体, fangsong;
    flex: 1;
    padding: 0 32px;
    text-align: right;
  }

  a, a:visited {
    color: black;
    text-decoration: none;
  }

  #Note-End {
    margin-bottom: 0;
  }
</style>