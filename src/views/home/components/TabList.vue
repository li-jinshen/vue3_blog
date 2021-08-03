<template>
  <div class="container fixed top-4 right-4 z-100" style="width:40px">
    <div
      class="item flex justify-center items-center mb-3 duration-500"
      v-for="(item,index) in tagsList"
      :key="index"
    >
      <a :href="item.url" target="_blank">
        <span :class="item.icon" :style="{'fontSize':item.size +'px'}"></span>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
interface Tabs {
  icon: string
  size: number
  url?: string
}
export default defineComponent({
  name: 'TabList',
  setup() {
    let tagsList: Tabs[] = reactive([
      {
        icon: 'iconfont icon-mayun1',
        size: 25,
        url: 'https://gitee.com/ymshen'
      },
      {
        icon: 'iconfont icon-houtai3',
        size: 23
        // url: 'https://gitee.com/ymshen'
      },
      {
        icon: 'iconfont icon-icon_qq-circle',
        size: 30
        // url: 'https://gitee.com/ymshen'
      },
      {
        icon: 'iconfont icon-icon_github-square',
        size: 28,
        url: 'https://gitee.com/ymshen'
      }
    ])
    return {
      tagsList
    }
  }
})
</script>

<style lang="scss" scoped>
.item {
  height: 40px;
  width: 40px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.4);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(13.5px);
  -webkit-backdrop-filter: blur(16.5px);
  border: 1px solid rgba(255, 255, 255, 0.18);
}
.item:hover {
  cursor: pointer;
  transform: scale(1.1);
}
</style>
