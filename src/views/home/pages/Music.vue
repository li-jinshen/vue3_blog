<template>
  <div class="music pt-4 flex items-center flex-wrap">
    <div
      class="square flex justify-center items-center mb-6"
      v-for="(item, index) in list"
      :music="item"
      :key="index"
    >
      <div>
        <a :href="item.href" target="_blank">
          <div class="square_icon rounded-lg">
            <img :src="item.icon" alt />
          </div>
          <div class="square_text mt-2 text-gray-500">{{ item.name }}</div>
        </a>
      </div>
    </div>
    <!-- <div class="items flex items-center px-3 py-2 mb-2" v-for="item in 5" :key="item">
      <div class="img_box rounded overflow-hidden">
        <img src="../../../assets/images/avatars.png" alt />
      </div>
      <div class="ml-2 right_box">myFress Mp3</div>
    </div>
    <div class="items flex items-center px-3 py-2 mb-2" v-for="item in 5" :key="item">
      <div class="img_box rounded overflow-hidden">
        <img src="../../../assets/images/avatars.png" alt />
      </div>
      <div class="pl-2 right_box">myFress Mp3alsdkjf lj appear-class=""</div>
    </div>-->
  </div>
</template>
  
  <script lang="ts">
import { defineComponent, reactive } from 'vue'

interface musicList {
  icon: string
  name: string
  href: string
}

export default defineComponent({
  name: 'Music',
  setup() {
    let list: musicList[] = reactive([
      {
        // icon: require('assets/images/music/myfree.png'),
        icon: 'https://z3.ax1x.com/2021/08/14/f6X8iT.png',
        name: 'MYFREEMP3',
        href: 'http://tool.liumingye.cn/music/?page=searchPage'
        // href: 'https://imgtu.com/i/f6OhPU'
      },
      {
        // icon: require('assets/images/music/cichang.png'),
        icon: 'https://z3.ax1x.com/2021/08/14/f6X1oV.png',
        name: '音乐磁场',
        href: 'https://www.hifini.com'
      },
      {
        // icon: require('assets/images/music/lastfm.png'),
        icon: 'https://z3.ax1x.com/2021/08/14/f6XGJU.png',
        name: 'Last.Fm',
        href: 'https://www.last.fm'
      },
      {
        // icon: require('assets/images/music/luowang.png'),
        icon: 'https://z3.ax1x.com/2021/08/14/f6XKLn.png',
        name: '落网',
        href: 'https://www.indie.cn'
      },
      {
        // icon: require('assets/images/music/streetvoice.png'),
        icon: 'https://z3.ax1x.com/2021/08/14/f6XYz4.png',
        name: 'streetVoice',
        // href: 'https://streetvoice.cn'
        href: 'https://imgtu.com/i/f6OW5T'
      },
      {
        // icon: require('assets/images/music/maitian.png'),
        icon: 'https://z3.ax1x.com/2021/08/14/f6Xld0.png',
        name: '麦田音乐',
        href: 'https://www.mtyyw.com'
      },
      {
        // icon: require('assets/images/music/shenlin.png'),
        icon: 'https://z3.ax1x.com/2021/08/14/f6XJWF.png',
        name: '影音森林',
        href: 'http://www.549.tv/#'
      },
      {
        // icon: require('assets/images/music/zhangku.jpeg'),
        icon: 'https://z3.ax1x.com/2021/08/14/f6XNQJ.jpg',
        name: '掌酷',
        href: 'https://www.zkdh.net/'
      }
    ])
    return {
      list
    }
  }
})
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
.items:hover {
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
  