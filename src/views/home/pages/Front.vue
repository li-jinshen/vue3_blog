<template>
  <div class="container">
    <div class="top flex flex-wrap mt-4">
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
    </div>
  </div>
</template>
  
  <script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Resources',
  setup() {
    let list = [
      {
        icon: 'https://z3.ax1x.com/2021/08/15/fcreVx.png',
        name: 'B站',
        href: 'https://www.bilibili.com/'
      },
      {
        icon: 'https://z3.ax1x.com/2021/08/15/fcrlxH.png',
        name: '慕课网',
        href: 'https://www.imooc.com/'
      },
      {
        icon: 'https://z3.ax1x.com/2021/08/15/fcr3Md.png',
        name: '网易云课堂',
        href: 'https://study.163.com/'
      },
      {
        icon: 'https://z3.ax1x.com/2021/08/15/fcrQRe.png',
        name: '网易公开课',
        href: 'https://open.163.com/'
      },
      {
        icon: 'https://z3.ax1x.com/2021/08/15/fcrnIK.png',
        name: '中国大学MOOC',
        href: 'https://www.icourse163.org/'
      },
      {
        icon: 'https://z3.ax1x.com/2021/08/15/fcrma6.png',
        name: '腾讯课堂',
        href: 'https://ke.qq.com/?tuin=41ec751f'
      },
      {
        icon: 'https://z3.ax1x.com/2021/08/15/fcrKPO.png',
        name: '我要自学网',
        href: 'https://www.51zxw.net/'
      }
    ]
    return { list }
  }
})
</script>
  
  <style lang="scss" scoped>
// .top::after {
//   content: '';
//   width: 25%;
// }
</style>
  