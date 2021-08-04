<template>
  <div class="music pt-6 flex items-center justify-around">
    <div class="items flex items-center px-3 py-2">
      <div class="img_box rounded overflow-hidden">
        <img src="../../../assets/images/avatars.png" alt="" />
      </div>
      <div class="ml-2 right_box">myFress Mp3</div>
    </div>
    <div class="items flex items-center px-3 py-2">
      <div class="img_box rounded overflow-hidden">
        <img src="../../../assets/images/avatars.png" alt="" />
      </div>
      <div class="pl-2 right_box">myFress Mp3alsdkjf lj appear-class=""</div>
    </div>
  </div>
</template>
  
  <script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Music",
  setup() {
    return;
  },
});
</script>
  
  <style lang="scss" scoped>
.items {
  transition: 1s;
  width: 300px;
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}
.items:hover{
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
}
.img_box {
  width: 80px;
  height: 80px;
}
.right_box {
  width: calc(100% - 80px);
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  text-align: left;
}
</style>
  