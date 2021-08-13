<template>
    <div class="container flex flex-wrap justify-around mt-4">
        实用工具
    </div>
  </template>
    
    <script lang="ts">
  import { defineComponent } from "vue";
  export default defineComponent({
    name: "Tool",
    setup() {
      let list = [
          {name:"一个木函工具箱",url:"https://web.woobx.cn/"},
          {name:"Typora",url:"https://www.typora.io/",desc:"世界上最漂亮的写作App"},
          {name:"稿定设计",url:"https://ps.gaoding.com/#/",desc:"在线ps"},
          {name:"在线压缩工具",url:"https://docsmall.com/"},
          {name:"Audio Extractor(音频提取)",url:"https://audio-extractor.net/cn/"},
          {name:"docsmall",url:"https://docsmall.com/",desc:"在线压缩工具"},
          {name:"tinypng",url:"https://tinypng.com/",desc:"图片压缩"},
      ]
      return {};
    },
  });
  </script>
    
    <style lang="scss" scoped>
  </style>
    