<template>
  <div id="Note">
    <div class="Note-Item">
      <router-link to="">
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
      </router-link>
    </div>
    <div class="Note-Item">
      <router-link to="">
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
      </router-link>
    </div>
    <div class="Note-Item">
      <router-link to="">
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
      </router-link>
    </div>
    <div id="Note-End" class="Note-Item">
      到底啦~
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Note',
    mounted() {

    }
  }
</script>

<style scoped>
  #Note {

  }

  .Note-Item {
    background-color: rgba(245, 245, 245, 0.5);
    padding: 16px;
    box-shadow: 0 0 10px 2px gray;
    border-radius: 5px;
    margin-bottom: 32px;
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
    /*font-size: 16px;*/
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
  }

  .Note-Subtitle {
    font-size: medium;
    font-family: Tanugo糖果手写体, fangsong;
    flex: 1;
  }

  a, a:visited {
    color: black;
    text-decoration: none;
  }

  #Note-End {
    margin-bottom: 0;
  }
</style>