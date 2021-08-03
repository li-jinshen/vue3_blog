<template>
  <div class="home w-full h-full relative">
    <TabsList></TabsList>
    <div class="box flex items-center absolute top-1/2 left-1/2">
      <div class="left">
        <div class="info rounded">
          <info></info>
        </div>
        <div class="menu rounded">
          <Menu></Menu>
        </div>
      </div>
      <div class="right rounded">
        <Content></Content>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Info from './home/components/Info.vue'
import Content from './home/components/Content.vue'
import Menu from './home/components/Menu.vue'
import TabsList from './home/components/TabList.vue'
export default defineComponent({
  name: 'home',
  setup() {
    return
  },
  components: {
    Info,
    Content,
    Menu,
    TabsList
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
    transform: translate(-50%, -50%);
    .left {
      & > div {
        width: 200px;
        background: rgba(255, 255, 255, 0.4);
        box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
        backdrop-filter: blur(13.5px);
        -webkit-backdrop-filter: blur(16.5px);
        border: 1px solid rgba(255, 255, 255, 0.18);
      }
      .info {
        height: 180px;
      }
      .menu {
        height: 410px;
        margin-top: 10px;
      }
    }
    .right {
      width: 790px;
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