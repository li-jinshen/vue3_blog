<template>
  <div class="container flex justify-center items-center">
    <div class="input_box rounded">
      <input
        type="text"
        placeholder="请输入关键字搜索文章"
        class="w-full h-full text-center text-gray-500"
        v-model="keyword"
      />
    </div>
    <transition name="search">
      <div class="absolute result_box rounded" v-if="show">我是搜索页面</div>
    </transition>
  </div>
</template>
  
  <script lang="ts">
import { defineComponent, Ref, ref, watch } from "vue";
export default defineComponent({
  name: "Search",
  setup() {
    let show: Ref<boolean> = ref(false);
    let keyword: Ref<string> = ref("");
    function changeShow(): void {
      show.value = !show.value;
    }
    watch(keyword, (newVal, oldVal) => {
      if (newVal !== "") {
        show.value = true;
      } else {
        show.value = false;
      }
    });
    return {
      keyword,
      show,
      changeShow,
    };
  },
});
</script>
  
  <style lang="scss" scoped>
.container {
  height: 60px;
  position: relative;
  width: 100%;
}
.input_box {
  width: 300px;
  height: 36px;
  background: rgba(255, 255, 255, 0.25);
  // box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  // border-bottom: 1px solid #e0e0e0;
  input {
    font-size: 15px;
  }
}
.result_box {
  position: absolute;
  height: 100px;
  width: 400px;
  background: rgba(255, 255, 255, 0.6);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  top: 60px;
  //   left: 50%;
  //   transform: translateX(-50%);
}
/* 设置进入和离开动画 */
/* 设置持续时间和动画函数 */
// .search-leave-active,
// .search-enter-active {
//   top: 60px;
//   opacity: 1;
//   transition: all 1s ease;
// }
/**
    * 动画开始之前,和动画完成之后的元素位置
    */
// .search-enter,
// .search-leave-to {
//   top: 100px;
//   opacity: 0;
// }
//search
.search-enter-active,
.search-leave-active {
  transition: all 0.6s ease;
}
.search-enter-to,
.search-leave-from {
  opacity: 1;
}
.search-enter-from,
.search-leave-to {
  transform: translateY(40px);
  opacity: 0;
}
</style>
  