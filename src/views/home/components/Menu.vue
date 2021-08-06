<template>
  <div class="container h-full">
    <ul>
      <li
        class="flex justify-center hover:text-white duration-500"
        v-for="item in menu"
        :key="item.title"
        @click="goPage(item.href)"
        :class="activePath == item.href ? 'activePath' : ''"
      >
        <span class="flex justify-start items-center duration-500">
          <span
            class="duration-500 text-gray-500 mr-1"
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
import { onBeforeRouteUpdate, useRoute, useRouter } from "vue-router";
import { defineComponent, reactive, ref, Ref } from "vue";

interface MenuArray {
  title: string;
  icon: string;
  size: number;
  href: string;
}
export default defineComponent({
  name: "App",
  setup() {
    let menu: MenuArray[] = reactive([
      {
        title: "技术文章",
        icon: "iconfont icon-blog",
        size: 18,
        href: "/blog/home/article",
      },
      {
        title: "音乐网站",
        icon: "iconfont icon-icon-test",
        size: 18,
        href: "/blog/home/music",
      },
      {
        title: "前端工具库",
        icon: "iconfont icon-_fuzhi",
        size: 18,
        href: "/blog/home/front",
      },
      {
        title: "浏览器插件",
        icon: "iconfont icon-chajian2",
        size: 16,
        href: "/blog/home/plug",
      },
      {
        title: "资源网站",
        icon: "iconfont icon-ziyuan2",
        size: 16,
        href: "/blog/home/resources",
      },
      {
        title: "实用工具",
        icon: "iconfont icon-gongjuxiang",
        size: 18,
        href: "/blog/home/tool",
      },
      {
        title: "友情链接",
        icon: "iconfont icon-youqinglianjie",
        size: 18,
        href: "/blog/home/link",
      },
    ]);
    const route = useRoute();
    const router = useRouter();
    let activePath: Ref<string> = ref(route.path);

    onBeforeRouteUpdate((to: any) => {
      activePath.value = to.fullPath;
    });
    function goPage(herf: string): void {
      router.push(herf);
      // console.log(route, herf);
    }
    return { menu, goPage, activePath };
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
  // border-left: 4px solid transparent;
  height: 50px;
  line-height: 50px;
  position: relative;
  & > span {
    width: 60%;
  }
  &:hover {
    // border-left: 4px solid #8394c0;
    cursor: pointer;
    // background: rgb(136, 158, 201);
    // color: rgba(255, 255, 255, 0.6);
    span {
      // color: #8394c0;
      transform: translateX(2px);
    }
  }
}
li::after {
  position: absolute;
  bottom: 1px;
  right: 50%;
  content: "";
  height: 2px;
  width: 0px;
  transition: 0.5s;
  // background: #8394c0;
  background: rgba(107, 114, 128,.3);
}
li:hover::after {
  width: 40%;
}
li::before {
  position: absolute;
  bottom: 1px;
  left: 50%;
  content: "";
  height: 2px;
  width: 0;
  transition: 0.5s;
  // background: #8394c0;
  background: rgba(107, 114, 128,.3);
}
li:hover::before {
  width: 30%;
}
.activePath {
  background: var(--primary) !important;
  // background: rgba(136,158,201,.4);
  span {
    color: rgba(255, 255, 255, 0.6);
  }
}
</style>
