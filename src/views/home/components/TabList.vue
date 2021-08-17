<template>
  <div class="container fixed top-4 right-4 z-50" style="width: 40px">
    <div
      class="item flex justify-center items-center mb-3 duration-500 relative"
      v-for="(item, index) in tagsList"
      :key="index"
      @mouseenter="showFlag(index)"
      @mouseleave="hiddenFlag(index)"
    >
      <a :href="item.url" target="_blank">
        <span :class="item.icon" :style="{ fontSize: item.size + 'px' }"></span>
      </a>
      <transition name="left">
        <div
          class="hover_box absolute top-0 flex items-center justify-center"
          v-if="item.isHover"
        >
          {{ item.title }}
        </div>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
interface Tabs {
  icon: string;
  size: number;
  isHover?: boolean;
  url?: string;
  title?: string;
}
export default defineComponent({
  name: "TabList",
  setup() {
    let tagsList: Tabs[] = reactive([
      {
        icon: "iconfont icon-mayun1",
        size: 25,
        title:"码云",
        url: "https://gitee.com/ymshen",
        isHover: false,
      },
      {
        icon: "iconfont icon-houtai1",
        size: 23,
        title:"后台管理",
        // url: 'https://gitee.com/ymshen'
        isHover: false,
      },
      {
        icon: "iconfont icon-qq1",
        size: 25,
        title: "2896583081",
        isHover: false,
      },
      {
        icon: "iconfont icon-github",
        size: 26,
        title:"github",
        url: "https://github.com/lijinshen-ym",
        isHover: false,
      },
      {
        icon: "iconfont icon-youxiang1",
        size: 24,
        title: "18824454802@163.com",
        isHover: false,
      },
    ]);
    function showFlag(index: number): void {
      if (tagsList[index].isHover == false || tagsList[index].isHover) {
        let list = tagsList;
        list[index].isHover = true;
        tagsList = list;
      }
    }
    function hiddenFlag(index: number): void {
      if (tagsList[index].isHover == false || tagsList[index].isHover) {
        let list = tagsList;
        list[index].isHover = false;
        tagsList = list;
      }
    }
    return {
      tagsList,
      showFlag,
      hiddenFlag,
    };
  },
});
</script>

<style lang="scss" scoped>
.item {
  height: 36px;
  width: 36px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.4);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(13.5px);
  -webkit-backdrop-filter: blur(16.5px);
  border: 1px solid rgba(255, 255, 255, 0.18);
}
.item:hover{
  cursor: pointer;
}
.active:hover {
  cursor: pointer;
  transform: scale(1.1);
}
.iconfont {
  color: rgba(255, 255, 255, 0.8);
}
.hover_box {
  font-size: 14px;
  padding: 0 4px;
  height: 36px;
  right: 42px;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  z-index: 999;
  min-width: 90px;
  white-space: nowrap;
}

.hover_box:after{
    content: "";
    position: absolute;
    right:-13px;
    top:10px;
    width: 0;
    height: 0;
    border-top: 6px solid transparent;
    border-left: 6px solid rgba(255, 255, 255, 0.7);
    border-right: 6px solid transparent;
    border-bottom: 6px solid transparent;
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
}

.left-enter-active,
.left-leave-active {
  transition: all 0.6s ease;
}
.left-enter-to,
.left-leave-from {
  opacity: 1;
}
.left-enter-from,
.left-leave-to {
  transform: translateX(-40px);
  opacity: 0;
}
</style>
