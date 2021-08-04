<template>
  <div class="container h-full">
    <div class="header w-full flex justify-center items-center">
      <Search />
    </div>
    <div class="bottom px-4 pt-2 flex items-center h-full">
      <div class="flex items-center justify-around w-full">
        <div class="sort item_box px-2">
          <div class="font-bold text-left">点击排行</div>
          <div
            class="item duration-500 flex items-center py-2"
            v-for="item in 10"
            :key="item"
          >
            <span
              class="sort_num iconfont icon-vip2 jin justify-center"
              v-if="item == 1"
            ></span>
            <span
              class="sort_num iconfont icon-vip2 yin justify-center"
              v-else-if="item == 2"
            ></span>
            <span
              class="sort_num iconfont icon-vip2 tong justify-center"
              v-else-if="item == 3"
            ></span>
            <span class="sort_num text-gray-600 justify-center" v-else>{{ item }}</span>
            <span class="content text-gray-600"
              >uni-app蓝牙对接热敏打印机阿斯顿发送到发</span
            >
            <span class="click text-gray-500 pl-2 items-center">
 <i class="iconfont icon-liulanliang1 pr-1"></i>200</span>
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
            <span class="sort_num text-gray-600 justify-center" v-else>{{ item }}</span>
            <span class="content text-gray-600">uni-app蓝牙对接热敏打印机阿斯顿发送到发</span>
            <span class="click text-gray-500 pl-2 flex items-center"><i class="iconfont icon-riqi1 pr-1" style="fontSize:14px"></i>2020-12-12</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Search from "@/components/search/Search.vue";
export default defineComponent({
  name: "Article",
  setup() {
    return;
  },
  components: {
    Search,
  },
});
</script>

<style lang="scss" scoped>
.header {
  height: 60px;
  border-bottom: 1px solid rgb(235, 235, 235);
}
.bottom {
  height: calc(100% - 60px);
}
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
.icon-liulanliang1{
  font-size: 15px !important;
}
.icon-riqi1{
  font-size: 15px !important;
}
</style>
