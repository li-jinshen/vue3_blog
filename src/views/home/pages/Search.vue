<template>
    <div class="container flex flex-wrap justify-around mt-4">
        聚合搜索
    </div>
  </template>
    
    <script lang="ts">
  import { defineComponent } from "vue";
  export default defineComponent({
    name: "Search",
    setup() {
      let list = [
          {name:"duang2.0",url:"http://duang.pro/"},
          {name:"汤姆聚合搜索",url:"https://www.tomfind.com/"},
          {name:"一个开始",url:"https://aur.one/"}
      ]
      return {};
    },
  });
  </script>
    
    <style lang="scss" scoped>
  </style>
    