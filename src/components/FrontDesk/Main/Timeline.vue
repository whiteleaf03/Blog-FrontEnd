<template>
  <div id="Timeline">
    <div class="timeline" v-for="timeline in this.timelineList">
      <div class="date">{{ timeline.date }}</div>
      <div class="event">{{ timeline.event }}</div>
    </div>
  </div>
</template>

<script>
import {tsToDate} from "../../../utils.js";
import {getTimeline} from "../../../request/FontDeskRequest.js";

  export default {
    name: "Timeline",
    data() {
      return {
        timelineList: []
      }
    },
    methods: {
      async init() {
        let result = await getTimeline()
        for (let index in result.data) {
          result.data[index].date = tsToDate(result.data[index].date).split(' ')[0].replace('/', '年').replace('/', '月') + '日'
        }
        this.timelineList = result.data
      }
    },
    mounted() {
      this.init()
    }
  }
</script>

<style scoped>
  #Timeline {
    display: flex;
    flex-direction: column;
  }

  .timeline {
    flex: 1;
    display: flex;
    margin-top: 16px;
    font-size: large;
  }

  .date {
    font-family: Tanugo糖果手写体, fangsong;
    color: black;
    margin-right: 16px;
    flex: 1;
  }

  .event {
    flex: 3;
    font-family: Tanugo糖果手写体, fangsong;
  }
</style>