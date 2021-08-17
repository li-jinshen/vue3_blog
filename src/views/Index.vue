<template>
  <div class="index w-full h-full">
    <!-- <Loading></Loading> -->
    <div class="top"></div>
    <div class="bottom flex justify-center items-center p-2">
      <div class="flex justify-between items-center w-full h-full">
        <div class="left h-full" style="width: 250px"></div>
        <div class="right h-full" style="width: calc(100% - 260px)">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Index",
  setup() {
    return;
  },
});
</script>

<style lang="scss" scoped>
.index {
  background: #ebeef5;
  min-height: 600px;
  min-width: 990px;
  // background: url("https://pic.rmb.bdstatic.com/bjh/f30968641a6433f315533c027f345baa.jpeg") no-repeat;
  // background-size: cover;
  .top,
  .left,
  .right {
    background: rgba(255, 255, 255, 0.4);
    box-shadow: 0 1px 5px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(13.5px);
    -webkit-backdrop-filter: blur(16.5px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.18);
  }
  .top {
    height: 60px;
    width: 100%;
  }
  .bottom {
    width: 100%;
    margin-top: 10px;
    height: calc(100% - 70px);
    & > div {
      width: 100%;
      max-width: 1200px;
    }
  }
}
</style>
