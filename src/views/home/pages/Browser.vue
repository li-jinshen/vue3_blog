<template>
  <div class="container mt-4 px-2">
    <div class="tip_box rounded flex p-2">
      <p class="flex items-start iconfont icon-iconheji-" style="font-size:25px;margin-right:10px"></p>
      <p
        class="text-left text-gray-500"
      >温馨提示：以下推荐的插件适用于Google Chrome 网络浏览器（360浏览器也可以安装，但是推荐使用Google Chrome 网络浏览器），请先下载Google Chrome 网络浏览器。下载插件和脚本时，请点击下面对应的下载地址跳转到相应的网站下载，点击下面的插件名称即可复制，复制后可在下载的网站中进行搜索，安装脚本需先下载安装Tampermonkey插件</p>
    </div>
    <div class="browser_box rounded flex justify-between items-center p-2 mt-4">
      <div class="flex justify-center items-center">
        <img src="https://www.google.cn/chrome/static/images/chrome-logo.svg" alt />
        <div class="font-bold text-xl text-gray-600">Google Chrome 网络浏览器</div>
      </div>
      <div class="btn">
        <a href="https://www.google.cn/chrome/" target="_blank" class="text-base">点击跳转下载</a>
      </div>
    </div>
    <div class="flex items-cetner justify-between mt-6">
      <div class="flex justify-center items-center title">插件</div>
      <div class="address_box flex justify-end items-center">
        <a href="https://chrome.google.com" target="_blank" class="text-gray-500">下载地址</a>
        <a href="http://www.crx4.com" target="_blank" class="px-2 text-gray-500">备用地址1</a>
        <a href="https://www.extfans.com" target="_blank" class="text-gray-500">备用地址2</a>
        <a href="http://www.crx4.com/507.html" target="_blank" class="text-gray-500 pl-4">插件安装教程</a>
      </div>
    </div>
    <!-- <div class="tip_box rounded flex p-2 mt-4">
      <p class="flex items-start iconfont icon-iconheji-" style="font-size:25px;margin-right:10px"></p>
      <p class="text-left text-gray-500"></p>
    </div>-->
    <div class="flex items-center flex-wrap mt-4">
      <div
        class="pl-1 pr-2 mb-3 plug_item text-gray-600"
        v-for="(item,index) in plug"
        :key="index"
        @click="copyToClipboard(item)"
      >{{index+1}}.{{item}}</div>
    </div>
    <div class="flex items-cetner justify-between mt-6">
      <div class="flex justify-center items-center title">脚本</div>
      <div class="address_box flex justify-end items-center">
        <a href="https://greasyfork.org/zh-CN/scripts" target="_blank" class="text-gray-500">下载地址</a>
      </div>
    </div>
    <!-- <div class="tip_box rounded flex p-2 mt-4">
      <p class="flex items-start iconfont icon-iconheji-" style="font-size:25px;margin-right:10px"></p>
      <p class="text-left text-gray-500">请点击上面的下载地址跳转到相应的网站下载对应的插件，点击下面的插件名称即可复制，复制后可在插件下载的网站中进行搜索</p>
    </div>-->
    <div class="flex items-center flex-wrap mt-4">
      <div
        class="pl-1 pr-2 mb-3 plug_item text-gray-600"
        v-for="(item,index) in script"
        :key="index"
        @click="copyToClipboard(item)"
      >{{index+1}}.{{item}}</div>
    </div>
  </div>
</template>

<script lang="ts">
import createMessage from '@/components/Message/index'
import { defineComponent, reactive } from 'vue'
export default defineComponent({
  name: 'Browser',
  setup() {
    let plug: string[] = reactive([
      'Tampermonkey',
      'Infinity 新标签页',
      '广告终结者',
      'Quick Tabs',
      '沙拉查词',
      'Wappalyzer',
      'Github 加速器',
      'JSON-handle',
      'Octotree',
      'Vue.js devtools',
      'ReactDeveloperTools',
      '二箱',
      '即刻图床'
    ])
    let script: string[] = reactive([
      '百度重定向',
      'vip解析',
      '破解助手',
      '百度网盘助手'
    ])

    // 复制文字到粘贴板
    function copyToClipboard(text: string) {
      if (text.indexOf('-') !== -1) {
        let arr = text.split('-')
        text = arr[0] + arr[1]
      }
      var textArea = document.createElement('textarea')
      textArea.style.position = 'fixed'
      textArea.style.top = '0'
      textArea.style.left = '0'
      textArea.style.width = '2em'
      textArea.style.height = '2em'
      textArea.style.padding = '0'
      textArea.style.border = 'none'
      textArea.style.outline = 'none'
      textArea.style.boxShadow = 'none'
      textArea.style.background = 'transparent'
      textArea.style.opacity = '0'
      textArea.value = text
      document.body.appendChild(textArea)
      textArea.select()
      try {
        var successful = document.execCommand('copy')
        var msg = successful
          ? '成功复制到剪贴板'
          : '该浏览器不支持点击复制到剪贴板'
        // alert(msg)
        createMessage({ type: 'default', message: msg })
      } catch (err) {
        // alert('该浏览器不支持点击复制到剪贴板')
        createMessage({
          type: 'error',
          message: '该浏览器不支持点击复制到剪贴板'
        })
      }
      textArea.remove()
    }
    return {
      plug,
      script,
      copyToClipboard
    }
  }
})
</script>

<style lang="scss" scoped>
.tip_box {
  background: #ececec;
  .icon-iconheji- {
    color: var(--primary);
  }
  p {
    font-size: 14px;
  }
}
.browser_box {
  background: rgba(255, 255, 255, 0.5);
  // box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  // border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  img {
    width: 80px;
    margin-right: 10px;
  }
  .btn {
    height: 40px;
    width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    border: 1px solid #ccc;
    transition: 0.5s;
    &:hover {
      background: var(--primary);
      color: white;
    }
  }
}
.title {
  width: 130px;
  height: 40px;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  letter-spacing: 5px;
  padding-left: 5px;
  font-weight: bold;
  border-bottom-left-radius: 20px;
  border-top-right-radius: 20px;
  box-shadow: 0 2px 6px 0 rgba(31, 38, 135, 0.37);
}
.address_box {
  a {
    text-decoration: underline;
  }
}
.plug_item {
  width: 25%;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  transition: 0.5s;
  &:hover {
    cursor: pointer;
    color: var(--primary);
  }
}
</style>
