<template>
  <div class="home w-full h-full flex justify-center items-center">
    <div class="box flex items-center">
      <div class="left">
        <div class="info rounded">
          <info></info>
        </div>
        <div class="menu rounded"></div>
      </div>
      <div class="right rounded"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Info from './home/components/Info.vue'
export default defineComponent({
  name: 'home',
  setup() {
    return
  },
  components: {
    Info
  }
})
</script>
<style lang="scss" scoped>
.home {
  background: url('https://pic.rmb.bdstatic.com/bjh/f30968641a6433f315533c027f345baa.jpeg')
    no-repeat;
  background-size: cover;
  .box {
    height: 600px;
    width: 900px;
    .left {
      width: 200px;
      & > div {
        background: rgba(255, 255, 255, 0.4);
        box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
        backdrop-filter: blur(13.5px);
        -webkit-backdrop-filter: blur(16.5px);
        border: 1px solid rgba(255, 255, 255, 0.18);
      }
      .info {
        height: 200px;
        width: 200px;
      }
      .menu {
        height: 390px;
        margin-top: 10px;
      }
    }
    .right {
      width: 690px;
      margin-left: 10px;
      height: 100%;
      background: rgba(255, 255, 255, 0.25);
      box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
      backdrop-filter: blur(13.5px);
      -webkit-backdrop-filter: blur(13.5px);
      border: 1px solid rgba(255, 255, 255, 0.18);
    }
  }
}
</style>