<template>
  <div class="container w-full h-full">
    <div class="content_box w-full">
      <router-view></router-view>
    </div>
    <footer class="flex justify-center items-center">
      <div class="flex justify-center items-center">
        <span class="text-sm text-gray-500">版本：v2.0.0</span>
        <span class="text-sm text-gray-500 ml-8">总访问量：1200</span>
        <span class="text-sm text-gray-500 ml-8">粤ICP备19141395号</span>
        <a
          class="ml-8 flex items-center"
          href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44162402000025"
        >
          <img src="@/assets/images/gongan.png" alt />
          <span class="ml-1 text-sm text-gray-500">粤公网安备44162402000025号</span>
        </a>
      </div>
    </footer>
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
.container {
  user-select: none;
}
.content_box {
  height: calc(100% - 40px);
  overflow-y: scroll;
  padding-left: 10px;
}
footer {
  height: 40px;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(6.5px);
  -webkit-backdrop-filter: blur(6.5px);
  border: 1px solid rgba(255, 255, 255, 0.18);
}
</style>
