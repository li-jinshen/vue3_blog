<template>
  <div class="container px-4 pt-2 flex items-center h-full">
    <div class="flex items-center justify-around w-full">
      <div class="sort item_box px-2">
        <div class="font-bold text-left">点击排行</div>
        <div
          class="item duration-500 flex items-center py-2"
          v-for="item in 10"
          :key="item"
        >
          <span
            class="
              sort_num
              iconfont
              icon-toptenbands_icon_king
              jin
              justify-center
            "
            v-if="item == 1"
          ></span>
          <span
            class="
              sort_num
              iconfont
              icon-toptenbands_icon_king
              yin
              justify-center
            "
            v-else-if="item == 2"
          ></span>
          <span
            class="
              sort_num
              iconfont
              icon-toptenbands_icon_king
              tong
              justify-center
            "
            v-else-if="item == 3"
          ></span>
          <span class="sort_num text-gray-600 justify-center" v-else>{{
            item
          }}</span>
          <span class="content text-gray-600"
            >uni-app蓝牙对接热敏打印机阿斯顿发送到发</span
          >
          <span class="click text-gray-500 pl-2 items-center">
            <i class="iconfont icon-liulanliang1 pr-1"></i
            ><span style="font-size: 14px">200</span></span
          >
        </div>
      </div>
      <div class="date item_box px-2">
        <div class="font-bold text-left">最近更新</div>
        <div
          class="item duration-500 flex items-center py-2"
          v-for="item in 10"
          :key="item"
        >
          <span
            class="sort_num iconfont icon-zuixin2 justify-center"
            v-if="item == 1"
          ></span>
          <span
            class="sort_num iconfont icon-zuixin2 justify-center"
            v-else-if="item == 2"
          ></span>
          <span
            class="sort_num iconfont icon-zuixin2 justify-center"
            v-else-if="item == 3"
          ></span>
          <span class="sort_num text-gray-600 justify-center" v-else>{{
            item
          }}</span>
          <span class="content text-gray-600"
            >uni-app蓝牙对接热敏打印机阿斯顿发送到发</span
          >
          <span class="click text-gray-500 pl-2 flex items-center"
            ><i class="iconfont icon-riqi1 pr-1" style="fontsize: 14px"></i
            ><span style="font-size: 14px">2020-12-12</span></span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Article",
  setup() {
    return;
  },
 
});
</script>

<style lang="scss" scoped>
.item_box {
  // background: rgba(255, 255, 255, 0.1);
  // box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  // backdrop-filter: blur(4px);
  // -webkit-backdrop-filter: blur(4px);
  // border-radius: 10px;
  // border: 1px solid rgba(255, 255, 255, 0.18);
  .item:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
  span {
    display: flex;
    font-size: 15px;
  }
  .sort_num {
    width: 40px;
  }
  .content {
    width: 200px;
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
.jin {
  color: #ebc059;
}
.yin {
  color: #e1e4ea;
}
.tong {
  color: rgb(184, 115, 51);
}
.iconfont {
  font-size: 24px !important;
}
.icon-zuixin2 {
  color: red;
}
.icon-liulanliang1 {
  font-size: 15px !important;
}
.icon-riqi1 {
  font-size: 15px !important;
}
</style>
