
<template>
  <router-view></router-view>
</template>


  <script lang="ts">
import { defineComponent, onMounted } from 'vue'
declare let returnCitySN: any
export default defineComponent({
  name: 'Article',
  setup() {
    onMounted(() => {
      console.log(returnCitySN)
      console.log(
        'IP地址:' +
          returnCitySN['cip'] +
          ', CID:' +
          returnCitySN['cid'] +
          ', 地区:' +
          returnCitySN['cname']
      )
    })
    return
  }
})
</script>
    

<style lang="scss">
@import url('https://at.alicdn.com/t/font_2715113_rixcs9k7c4j.css');
html,
body {
  height: 100vh;
  width: 100vw;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
