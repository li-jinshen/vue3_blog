<template>
  <div class="container flex flex-wrap justify-around mt-4">
    <div
      class="square flex justify-center items-center mb-6"
      v-for="(item, index) in list"
      :music="item"
      :key="index"
    >
      <div>
        <a :href="item.href" target="_blank">
          <!-- <div class="square_icon rounded-lg">
            <img :src="item.icon" alt />
          </div>-->
          <ImageItem :url="item.icon" width="110" height="110" :scale="true"></ImageItem>
          <div class="square_text mt-2 text-gray-500">{{ item.name }}</div>
        </a>
      </div>
    </div>
  </div>
</template>
    
    <script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Search',
  setup() {
    let list = [
      {
        icon: 'https://z3.ax1x.com/2021/08/15/fcQUeA.png',
        name: '一个开始',
        href: 'https://aur.one/'
      },
      {
        icon: 'https://z3.ax1x.com/2021/08/15/fcQtLd.png',
        name: '虫部落',
        href: 'https://www.chongbuluo.com/'
      },
      {
        icon: 'https://z3.ax1x.com/2021/08/15/fcQadI.png',
        name: 'duang2.0',
        href: 'http://duang.pro/'
      },
      {
        icon: 'https://z3.ax1x.com/2021/08/15/fcQYsH.png',
        name: '汤姆聚合搜索',
        href: 'https://www.tomfind.com/'
      }
    ]
    return { list }
  }
})
</script>
    
<style lang="scss" scoped>
.container::after {
  content: '';
  width: 45%;
}
</style>
    