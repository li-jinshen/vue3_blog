<template>
  <div class="container h-full flex justify-center items-center">
    <div>
      <div class="top p-2 flex justify-between items-center">
        <div class="avatars rounded">
          <img src="@/assets/images/avatars.png" alt />
        </div>
        <div class="dsc">
          <p class="font-bold text-2xl text-left">深</p>
          <p class="text-left mt-4 text-sm">前端工程师</p>
        </div>
      </div>
      <div
        class="other flex justify-center items-center text-gray-500"
      >罗曼罗兰说过的 这个世界上只有一种真正的英雄主义，那就是 认清生活的真相，并且仍然热爱它</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'App',
  setup() {
    return
  }
})
</script>

<style lang="scss" scoped>
.avatars {
  width: 90px;
  height: 90px;
  overflow: hidden;
  image {
    height: 100%;
    width: 100%;
  }
}
.dsc {
  width: calc(100% - 100px);
}
.other {
  font-size: 13px;
  margin: 10px 10px;
  padding: 2px;
  width: 180px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box; //作为弹性伸缩盒子模型显示。
  -webkit-box-orient: vertical; //设置伸缩盒子的子元素排列方式--从上到下垂直排列
  -webkit-line-clamp: 2; //显示的行
}
</style>
