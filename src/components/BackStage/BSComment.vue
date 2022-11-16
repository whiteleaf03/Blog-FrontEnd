<template>
  <div id="BSComment">
    <div id="CommentList">
      <a-table :dataSource="commentList" :columns="columns" :scroll="true" height="600px"/>
    </div>
  </div>
</template>

<script>
  import {deleteComment, getComment} from "../../request/BackDeskRequest.js";
  import {tsToDate} from "../../utils.js";

  export default {
    name: "BSComment",
    data() {
      return {
        columns: [
          {
            key: 'nickname',
            dataIndex: 'nickname',
            title: '昵称'
          },
          {
            key: 'date',
            dataIndex: 'date',
            title: '日期'
          },
          {
            key: 'email',
            dataIndex: 'email',
            title: '邮箱'
          },
          {
            key: 'text',
            dataIndex: 'text',
            title: '留言'
          }
        ],
        commentList: []
      }
    },
    mounted() {
      this.init()
    },
    methods: {
      async init() {
        let result = await getComment();
        for (let index in result.data) {
          result.data[index].date = tsToDate(result.data[index].date)
        }
        result.data = result.data.reverse()
        this.commentList = result.data
        document.getElementById('CommentList').style.height = `${document.getElementById('BSComment').clientHeight - document.getElementById('title')}px`
      },
      async delete(a, b) {
        // let result = await deleteComment(id)
        // if (result.msg === 'OK') {
        //   location.reload()
        // }
        console.log(a)
        console.log(b)
      }
    }
  }
</script>

<style scoped>
  #BSComment {
    display: flex;
    flex-direction: column;
    height: 300px;
  }

  #title {
    font-family: 包圆小白体, fangsong;
    font-size: 48px;
  }

  #CommentList {
    display: flex;
    flex-direction: column;
    /*overflow-x:hidden;*/
  }
</style>