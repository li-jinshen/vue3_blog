<template>
  <div class="container flex flex-wrap justify-around mt-4">
    <div
      class="rectangle p-2 flex items-center mb-6 rounded-lg duration-700"
      v-for="(item,index) in list"
      :key="index"
      @click="openAddress(item.href)"
    >
      <div class="rectangle_left rounded-lg">
        <!-- <img :src="item.icon" alt /> -->
        <ImageItem :url="item.icon" width="90" height="90"></ImageItem>
      </div>
      <div class="rectangle_right">
        <p class="rectangle_title text-gray-600 text-xl text-left">{{item.name}}</p>
        <p class="rectangle_msg text-gray-500 text-base text-left mt-2">{{item.desc}}</p>
      </div>
    </div>
  </div>
</template>
    
    <script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Tool',
  setup() {
    let list = [
      {
        icon: 'https://z3.ax1x.com/2021/08/15/fcQ6yQ.png',
        name: 'QtScrcpy',
        href: 'https://gitee.com/Barryda/QtScrcpy#https://gitee.com/Barryda/QtScrcpy/releases',
        desc: '手机实时投屏软件，摸鱼神器'
      },
      {
        icon: 'https://z3.ax1x.com/2021/08/15/fcQBJf.png',
        name: '一个木函工具箱',
        href: 'https://web.woobx.cn/',
        desc: '快捷应用合集的软件工具'
      },
      {
        icon: 'https://z3.ax1x.com/2021/08/15/fcQ2es.png',
        name: 'Typora',
        href: 'https://www.typora.io/',
        desc: '世界上最漂亮的写作App'
      },
      {
        icon: 'https://z3.ax1x.com/2021/08/15/fcQyQg.png',
        name: 'faststone capture',
        href: 'https://pan.baidu.com/s/15UhKC8-t7vwKnYtPreAfBQ',
        desc: '好用的截图、录屏软件（提取码：sl9y）'
      },
      {
        icon: 'https://z3.ax1x.com/2021/08/15/fcQDW8.png',
        name: '稿定设计',
        href: 'https://ps.gaoding.com/#/',
        desc: '在线ps'
      },
      {
        icon: 'https://z3.ax1x.com/2021/08/15/fcQsSS.png',
        name: 'Audio Extractor',
        href: 'https://audio-extractor.net/cn/',
        desc: '音频提取'
      },
      {
        icon: 'https://z3.ax1x.com/2021/08/15/fcQRwn.png',
        name: 'tinypng',
        href: 'https://tinypng.com/',
        desc: '图片压缩'
      },
      {
        icon: 'https://z3.ax1x.com/2021/08/15/fcQcLj.png',
        name: 'Apowersoft',
        href: 'https://www.apowersoft.cn/',
        desc: '音视频的录制,转换,编辑'
      },
      {
        icon: 'https://z3.ax1x.com/2021/08/15/fcQ0FP.png',
        name: 'docsmall',
        href: 'https://docsmall.com/',
        desc: '在线压缩工具'
      }
    ]
    function openAddress(href: string): void {
      window.open(href)
    }
    return {
      list,
      openAddress
    }
  }
})
</script>
<style lang="scss" scoped>
.container::after {
  content: '';
  width: 45%;
}
</style>
    