<template>
  <div id="BSNote">
    <div id="info">
      <div style="display: flex;">
        <div id="title">
          <div class="tips">标题</div>
          <input v-model="title">
        </div>
        <div id="subTitle">
          <div class="tips">副标题</div>
          <input v-model="subTitle">
        </div>
      </div>
      <div style="display: flex;">
        <div id="coverPath">
          <div class="tips">封面图片</div>
          <input v-model="coverPath">
        </div>
        <div id="button">
          <div class="tips">&nbsp;</div>
          <button @click="postData">提交</button>
        </div>
      </div>
    </div>
    <div id="editor">
      <Toolbar
          style="border-bottom: 1px solid #ccc"
          :editor="editorRef"
          :defaultConfig="toolbarConfig"
          :mode="mode"
      />
      <Editor
          id="Editor"
          style="height: 500px; overflow-y: hidden;"
          v-model="valueHtml"
          :defaultConfig="editorConfig"
          :mode="mode"
          @onCreated="handleCreated"
      />
    </div>
  </div>
</template>

<script>
  import '@wangeditor/editor/dist/css/style.css' // 引入 css

  import { onBeforeUnmount, ref, shallowRef, onMounted } from 'vue'
  import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
  import {postNote} from "../../request/BackDeskRequest.js";

  export default {
    name: "BSNote",
    components: { Editor, Toolbar },
    setup() {
      let title
      let subTitle
      let coverPath

      // 编辑器实例，必须用 shallowRef
      const editorRef = shallowRef()

      // 内容 HTML
      let valueHtml = ref('')

      const toolbarConfig = {}
      const editorConfig = { placeholder: '请输入内容...' }

      // 组件销毁时，也及时销毁编辑器
      onBeforeUnmount(() => {
        const editor = editorRef.value
        if (editor == null) return
        editor.destroy()
      })

      const handleCreated = (editor) => {
        editorRef.value = editor // 记录 editor 实例，重要！
      }

      async function postData() {
        let result = await postNote(title, subTitle, coverPath, Date.now(), valueHtml.value)
        console.log(result.data)
      }

      return {
        title: '',
        subTitle: '',
        coverPath: '',
        editorRef,
        valueHtml,
        mode: 'simple',
        toolbarConfig,
        editorConfig,
        handleCreated,
        postData
      };
    }
  }
</script>

<style scoped>
  #BSNote {
    display: flex;
    flex-direction: column;
  }

  #info {
    display: flex;
    flex-direction: column;
    margin-bottom: 32px;
  }

  #editor {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  #title {
    flex: 1;
  }

  #title input {
    width: 80%;
    justify-content: center;
    border-radius: 5px;
    border: 2px solid deepskyblue;
    outline: none;
    background-color: rgba(245, 245, 245);
    font-size: 12px;
    padding: 6px;
  }

  #subTitle {
    flex: 1;
  }

  #subTitle input {
    width: 80%;
    justify-content: center;
    border-radius: 5px;
    border: 2px solid deepskyblue;
    outline: none;
    background-color: rgba(245, 245, 245);
    font-size: 12px;
    padding: 6px;
  }

  #coverPath {
    flex: 1;
  }

  #coverPath input {
    width: 80%;
    justify-content: center;
    border-radius: 5px;
    border: 2px solid deepskyblue;
    outline: none;
    background-color: rgba(245, 245, 245);
    font-size: 12px;
    padding: 6px;
  }

  #button {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  #button button {
    width: 80%;
    background-color: white;
    border-radius: 5px;
    border: 2px solid deepskyblue;
    padding: 4px;
  }

  #button button:active {
    box-shadow: 0 2px 6px 0 rgba(0,0,0,0.2), 0 17px 50px 0 rgba(0,0,0,0.2);
  }
</style>