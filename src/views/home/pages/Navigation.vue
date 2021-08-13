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
          <p class="rectangle_msg text-gray-500 text-base text-left mt-2">{{item.type}}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent,reactive } from 'vue'
  interface Resources {
    icon: string
    name: string
    href: string
    type: string
  }
  export default defineComponent({
    name: 'Navigation',
    setup() {
      let resousrcesList: Resources[] = reactive([
        {
          icon: require('assets/images/navigation/xueba.png'),
          name: '学吧导航',
          href: 'https://www.xue8nav.com/',
          type:"多类型"
        },
        {
          icon: require('assets/images/navigation/catdog.png'),
          name: '阿猫阿狗导航',
          href: 'https://dh.woshipm.com/',
          type:"多类型"
        },
        {
          icon: require('assets/images/navigation/addog.png'),
          name: 'AD dog',
          href: 'https://www.addog.vip/',
          type:"多类型"
        },
        {
          icon: require('assets/images/navigation/chuangzaoshi.png'),
          name: '创造狮',
          href: 'http://chuangzaoshi.com/',
          type:"设计、编程、素材"
        },
       
        {
          icon: require('assets/images/navigation/shuxiangjia.png'),
          name: '书享家',
          href: 'http://shuxiangjia.cn/#',
          type:"书籍"
        },
        {
          icon: require('assets/images/navigation/keba.png'),
          name: '科塔学术',
          href: 'https://www.sciping.com/',
          type:"书籍"
        },
        {
          icon: require('assets/images/navigation/longmao.png'),
          name: '龙猫导航',
          href: 'https://ailongmiao.com/web/',
          type:"编程类"
        },
        {
          icon: require('assets/images/navigation/youshe.png'),
          name: '优设导航',
          href: 'https://hao.uisdc.com/',
          type:"设计类"
        },
        {
          icon: require('assets/images/navigation/seeseed.png'),
          name: 'Seedeed',
          href: 'https://www.seeseed.com/',
          type:"设计类"
        },
        {
          icon: require('assets/images/navigation/hippter.png'),
          name: 'HiPPTER',
          href: 'http://www.hippter.com/',
          type:"PPT"
        },
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
  