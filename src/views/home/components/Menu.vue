<template>
  <div class="container h-full">
    <ul>
      <li
        class="
          flex
          justify-center
          duration-500
          hover:bg-primary
          hover:text-white
        "
        v-for="item in menu"
        :key="item.title"
      >
        <span class="flex justify-start items-center">
          <span
            class="text-gray-500 duration-500 mr-1"
            :class="item.icon"
            :style="{ fontSize: item.size + 'px' }"
          ></span>
          <span class="text-gray-500 duration-500">{{ item.title }}</span>
        </span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
export default defineComponent({
  name: "App",
  setup() {
    let menu = reactive([
      { title: "技术文章", icon: "iconfont icon-blog", size: 18, href: "" },
      {
        title: "音乐网站",
        icon: "iconfont icon-icon-test",
        size: 18,
        href: "",
      },
      { title: "前端工具库", icon: "iconfont icon-_fuzhi", size: 18, href: "" },
      {
        title: "浏览器插件",
        icon: "iconfont icon-chajian2",
        size: 16,
        href: "",
      },
      {
        title: "资源网站",
        icon: "iconfont icon-ziyuan2",
        size: 16,
        href: "",
      },
      {
        title: "实用工具",
        icon: "iconfont icon-gongjuxiang",
        size: 18,
        href: "",
      },
      {
        title: "友情链接",
        icon: "iconfont icon-youqinglianjie",
        size: 18,
        href: "",
      },

      { title: "友情链接", icon: "", href: "" },
      { title: "友情链接", icon: "", href: "" },
      { title: "友情链接", icon: "", href: "" },
    ]);
    return { menu };
  },
});
</script>

<style lang="scss" scoped>
.container {
  overflow-y: scroll;
  user-select: none;
  &::-webkit-scrollbar {
    display: none;
  }
}
li {
  height: 50px;
  line-height: 50px;
  transition: 1000ms;
  & > span {
    width: 60%;
    transition: 1000ms;
  }
  &:hover {
    cursor: pointer;
    // background: rgb(136, 158, 201);
    color: white;
    span {
      color: white;
    }
  }
}
</style>
