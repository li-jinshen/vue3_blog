<template>
  <div class="container flex justify-center items-center">
    <div class="input_box rounded">
      <input
        type="text"
        placeholder="请输入关键字搜索文章"
        class="w-full h-full text-center text-gray-500"
        v-model="keyword"
      />
    </div>
    <transition name="search">
      <div class="absolute result_box rounded p-3" v-show="show">
        <div class="item p-2 w-full flex justify-start" v-for="item in 10" :key="item">
          <div class="sort duration-500 text-left" style="fontSize:17px">{{item}}</div>
          <div class="item_content">
            <p
              class="text-left duration-500 text-gray-800 title"
              style="fontSize:17px"
            >开发uni-app即时聊天按时发撒地方啊沙发上大</p>
            <p class="flex items-center mt-1">
              <span class="text-gray-400 flex items-center w-1/2">
                <i class="iconfont icon-riqi1 pr-1" style="fontSize:14px"></i>
                2020-12-12
              </span>
              <span class="text-gray-400 flex items-center w-1/2">
                <i class="iconfont icon-liulanliang1 pr-1"></i>
                200
              </span>
              <!-- <span class="text-gray-400 flex items-center">
                <i class="iconfont icon-leixing1 pr-1"></i>
                uni-app
              </span>-->
            </p>
          </div>
        </div>
        <!-- <div class="flex justify-center items-center h-full">
          <div>
            <img src="../../assets/images/svg/null-food.svg" style="width:150px" alt />
            <p class="text-gray-500 text-sm mt-2">暂无数据</p>
          </div>
        </div>-->
      </div>
    </transition>
  </div>
</template>
  
  <script lang="ts">
import { defineComponent, Ref, ref, watch } from 'vue'
export default defineComponent({
  name: 'Search',
  setup() {
    let show: Ref<boolean> = ref(false)
    let keyword: Ref<string> = ref('')
    function changeShow(): void {
      show.value = !show.value
    }
    watch(keyword, (newVal) => {
      if (newVal !== '') {
        show.value = true
      } else {
        show.value = false
      }
    })
    return {
      keyword,
      show,
      changeShow
    }
  }
})
</script>
  
  <style lang="scss" scoped>
.container {
  height: 60px;
  position: relative;
  width: 100%;
}
.input_box {
  width: 300px;
  height: 36px;
  background: rgba(255, 255, 255, 0.25);
  // box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  // border-bottom: 1px solid #e0e0e0;
  input {
    font-size: 15px;
  }
}
.result_box {
  position: absolute;
  height: 280px;
  width: 400px;
  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  top: 60px;
  overflow-y: scroll;
  .item {
    transition: 0.5s;
    .sort {
      width: 40px;
    }
    .title {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .item_content {
      width: calc(100% - 40px);
    }
    p {
      span {
        font-size: 14px;
      }
    }
  }
  & .item:not(:last-child) {
    border-bottom: 1px solid #ccc;
  }
  .item:hover {
    border-radius: 10px;
    cursor: pointer;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.3);
    border-bottom: 1px solid white;
  }
  .item:hover .sort {
    color: #889ec9;
  }
  .item:hover .title {
    color: #889ec9;
  }
}

.search-enter-active,
.search-leave-active {
  transition: all 0.6s ease;
}
.search-enter-to,
.search-leave-from {
  opacity: 1;
}
.search-enter-from,
.search-leave-to {
  transform: translateY(40px);
  opacity: 0;
}
</style>
  