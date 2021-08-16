<template>
  <div class="container h-full flex justify-center items-center">
    <div>
      <div class="top p-2 flex justify-between items-center">
        <div class="avatars rounded">
          <img src="@/assets/images/avatars.png" alt />
        </div>
        <div class="dsc">
          <p class="font-bold text-2xl text-left">深</p>
          <p class="text-left my-2 text-sm">前端工程师</p>
          <p class="text-left text-sm">90后</p>
        </div>
      </div>
      <div class="other flex justify-center items-center relative z-50">
        <div class="text-gray-500 msg_box">
          罗曼罗兰说过的 这个世界上只有一种真正的英雄主义，那就是
          认清生活的真相，并且仍然热爱它
        </div>
        <div class="absolute hover_box">
          罗曼罗兰说过的 这个世界上只有一种真正的英雄主义，那就是
          认清生活的真相，并且仍然热爱它
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "App",
  setup() {
    return;
  },
});
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
}
.msg_box {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box; //作为弹性伸缩盒子模型显示。
  -webkit-box-orient: vertical; //设置伸缩盒子的子元素排列方式--从上到下垂直排列
  -webkit-line-clamp: 2; //显示的行
}
.hover_box {
  font-size: 14px;
  padding: 0 4px;
  height: 36px;
  left: 42px;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  z-index: 999;
  width: 200px;
  white-space: inherit;
  min-height: 100px;
}

.hover_box:after {
  content: "";
  position: absolute;
  left: -13px;
  top: 10px;
  width: 0;
  height: 0;
  border-top: 6px solid transparent;
  border-right: 6px solid rgba(255, 255, 255, 0.7);
  border-left: 6px solid transparent;
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
  transform: translateX(40px);
  opacity: 0;
}
</style>
