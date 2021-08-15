<template>
  <div class="container flex flex-wrap justify-around mt-4">
    <div
      class="rectangle p-2 flex items-center mb-6 rounded-lg duration-700"
      v-for="(item,index) in resousrcesList"
      :key="index"
      @click="openAddress(item.href)"
    >
      <div class="rectangle_left rounded-lg">
        <img :src="item.icon" alt />
      </div>
      <div class="rectangle_right">
        <p class="rectangle_title text-gray-600 text-xl text-left">{{item.name}}</p>
        <p class="rectangle_msg text-gray-500 text-base text-left mt-2">{{item.desc}}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
interface Resources {
  icon: string
  name: string
  href: string
  desc?: string
}
export default defineComponent({
  name: 'Resources',
  setup() {
    let resousrcesList: Resources[] = reactive([
      {
        // icon: require('assets/images/resources/pexels.png'),
        icon: 'https://z3.ax1x.com/2021/08/14/f6jSYT.png',
        name: 'pexles',
        href: 'https://www.pexels.com/zh-cn/',
        desc: '一个免费高清素材下载网站'
      },
      {
        // icon: require('assets/images/resources/chuangke.png'),
        icon: 'https://z3.ax1x.com/2021/08/14/f6XHSg.png',
        name: '创客贴',
        href: 'https://www.ckt.cn',
        desc: '一提供了商务、教育、美食、科技、人像、风景等类型的图片，每一张的质量都非常高，相信总有一款适合你'
      },
      {
        // icon: require('assets/images/resources/unspl.png'),
        icon: 'https://z3.ax1x.com/2021/08/14/f6jPl4.png',
        name: 'Unsplash',
        href: 'https://unsplash.com/',
        desc: '图片的像素全部都在5K以上，而且还提供了海量的高清矢量素材，主要类别包括人物、生活、自然类素材'
      },
      {
        // icon: require('assets/images/resources/stocksnap.png'),
        icon: 'https://z3.ax1x.com/2021/08/14/f6XzkV.png',
        name: 'Stocksnap',
        href: 'https://stocksnap.io/',
        desc: '其图片全部由摄影师精挑细选，不会有任何的质量问题'
      },
      {
        // icon: require('assets/images/resources/streetwill.png'),
        icon: 'https://z3.ax1x.com/2021/08/14/f6jpfU.png',
        name: 'streetwill',
        href: 'http://streetwill.co/',
        desc: '这个网站的颜值实在是太爆表啦，页面设计得特别精致，简直是设计师的最爱'
      },
      {
        // icon: require('assets/images/resources/tuguaishou.png'),
        icon: 'https://z3.ax1x.com/2021/08/14/f6jCpF.png',
        name: '图怪兽',
        href: 'https://818ps.com/',
        desc: '图怪兽作图神器,是一个在线ps图片编辑器,它相当于ps精简版软件,可提供微信编辑器功能,在线ps照片处理,拼图,图片制作,在线设计,平面设计,海报设计,在线图片处理等功能'
      },
      {
        // icon: require('assets/images/resources/png.png'),
        icon: 'https://z3.ax1x.com/2021/08/14/f6XvT0.png',
        name: 'png素材网',
        href: 'https://pngss.com/',
        desc: 'PNG素材网是一个免费的高清透明PNG素材资源分享网站,众多网友为您提供海量的PNG免抠素材'
      },
      {
        // icon: require('assets/images/resources/huaban.png'),
        icon: 'https://z3.ax1x.com/2021/08/14/f6Xqyj.png',
        name: '花瓣网',
        href: 'https://huaban.com/',
        desc: '设计师寻找灵感的天堂!图片素材领导者,帮你采集、发现网络上你喜欢的事物'
      },
      {
        // icon: require('assets/images/resources/bian.png'),
        icon: 'https://z3.ax1x.com/2021/08/14/f6XXmn.png',
        name: '彼岸图网',
        href: 'https://pic.netbian.com/',
        desc: ' 高级搜索 4k,4k壁纸,5k壁纸,8k壁纸'
      },
      {
        // icon: require('assets/images/resources/ali.png'),
        icon: 'https://z3.ax1x.com/2021/08/14/f6XblQ.png',
        name: '阿里字体图标',
        href: 'https://www.iconfont.cn/',
        desc: ' 国内功能很强大且图标内容很丰富的矢量图标库,提供矢量图标下载、在线存储、格式转换等功能'
      },
      {
        // icon: require('assets/images/resources/iconmaster.png'),
        icon: 'https://z3.ax1x.com/2021/08/14/f6Xjwq.png',
        name: 'iconmonstr',
        href: 'https://iconmonstr.com/',
        desc: ' 一个朴实、朴素的图标素材网站，该网站的图标素材提供的格式分为PNG、SVG格式'
      }
    ])
    function openAddress(href: string): void {
      window.open(href)
    }
    return {
      resousrcesList,
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
