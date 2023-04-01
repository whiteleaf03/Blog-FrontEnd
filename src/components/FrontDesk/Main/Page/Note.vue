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
        title: '使用Vite构建Vue3项目',
        subTitle: '构建命令及配置文件',
        date: '2022-11-21 20:06:05',
        coverPath: '/images/test/note01.png',
        text: "<h2>初始化项目（以npm为例）</h2><pre><code >npm create vite@latest</code></pre><h2>vue.config.js配置文件</h2><pre><code class=\"language-javascript\">import { defineConfig } from java'vite'\n" +
            "import vue from '@vitejs/plugin-vue'\n" +
            "import AutoImport from 'unplugin-auto-import/vite'\n" +
            "import Components from 'unplugin-vue-components/vite'\n" +
            "import {AntDesignVueResolver} from 'unplugin-vue-components/resolvers'\n" +
            "\n" +
            "// https://vitejs.dev/config/\n" +
            "export default defineConfig({\n" +
            "  plugins: [\n" +
            "    vue(),\n" +
            "    //组件库自动导入\n" +
            "    AutoImport({\n" +
            "      resolvers: [AntDesignVueResolver()],\n" +
            "    }),\n" +
            "    Components({\n" +
            "      resolvers: [AntDesignVueResolver()],\n" +
            "    }),\n" +
            "  ],\n" +
            "  base: './',\n" +
            "  //省略后缀\n" +
            "  resolve: {\n" +
            "    extensions: ['.js', '.vue']\n" +
            "  },\n" +
            "  //服务启动端口及代理\n" +
            "  server: {\n" +
            "    port: 80,\n" +
            "    proxy: {\n" +
            "      '/bs/api': {\n" +
            "        target: 'http://127.0.0.1:8080',\n" +
            "        changeOrigin: true\n" +
            "      },\n" +
            "      '/fd/api': {\n" +
            "        target: 'http://127.0.0.1:8080',\n" +
            "        changeOrigin: true\n" +
            "      }\n" +
            "    }\n" +
            "  },\n" +
            "  //构建路径\n" +
            "  build: {\n" +
            "    outDir: 'Blog-FrontEnd'\n" +
            "  }\n" +
            "})</code></pre>"
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