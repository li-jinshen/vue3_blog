<template>
  <div class="container h-full">
    <ul>
      <li
        class="flex justify-center duration-500 hover:bg-primary hover:text-white"
        v-for="item in menu"
        :key="item.title"
      >
        <span class="flex justify-start">
          <span>{{item.icon}}</span>
          <span>{{item.title}}</span>
        </span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
export default defineComponent({
  name: 'App',
  setup() {
    let menu = reactive([
      { title: '技术文章', icon: '', href: '' },
      { title: '文章归档', icon: '', href: '' },
      { title: '音乐网站', icon: '', href: '' },
      { title: '前端工具库', icon: '', href: '' },
      { title: '浏览器插件', icon: '', href: '' },
      { title: '友情链接', icon: '', href: '' },
      { title: '友情链接', icon: '', href: '' },
      { title: '友情链接', icon: '', href: '' },
      { title: '友情链接', icon: '', href: '' }
    ])
    return { menu }
  }
})
</script>

<style lang="scss" scoped>
.container {
  overflow-y: scroll;
  user-select: none;
  &::-webkit-scrollbar {
    display: none;
  }
}
li {
  height: 50px;
  line-height: 50px;
  & > span {
    width: 60%;
  }
  &:hover {
    cursor: pointer;
    // background: rgb(136, 158, 201);
    color: white;
  }
}
</style>
