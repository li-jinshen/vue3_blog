<template>
  <div class="container">
    <div class="header w-full flex justify-center items-center">
      <Search />
    </div>
    <div class="bottom"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent} from "vue";
import Search from "@/components/search/Search.vue";
export default defineComponent({
  name: "Article",
  setup() {
   return 
  },
  components: {
    Search,
  },
});
</script>

<style lang="scss" scoped>
.header {
  height: 60px;
  border-bottom: 1px solid rgb(235, 235, 235);
  
}
</style>
