<template>
  <div
    class="container relative flex justify-center items-center"
    :style="{width:imgWidth + 'px',height:imgHeight + 'px'}"
    :class="{active:animateScale,'bg-gray-700':!flag}"
  >
    <!-- {{props.width}{{height}}} -->

    <img v-show="flag" :src="url" alt @load="onLoading" />
    <!-- <div v-show="!flag" class="spinner"></div> -->
    <div class="spinner absolute" v-show="!flag">
      <div class="rect1"></div>
      <div class="rect2"></div>
      <div class="rect3"></div>
      <div class="rect4"></div>
      <div class="rect5"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'App',
  props: {
    width: {
      type: Number,
      default: 90
    },
    height: {
      type: Number,
      default: 90
    },
    url: {
      type: String,
      require: true
    },
    scale: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    console.log(props.url)
    let src = ref(props.url)
    let imgWidth = ref(props.width)
    let imgHeight = ref(props.height)
    let animateScale = ref(props.scale)
    let flag = ref(false)
    function onLoading(): void {
      flag.value = true
    }
    return {
      src,
      imgWidth,
      imgHeight,
      flag,
      onLoading,
      animateScale
    }
  }
})
</script>

<style lang="scss" scoped>
.container {
  border-radius: 10px;
  overflow: hidden;
}

.active:hover img {
  transform: scale(1.3);
}
img {
  width: 100%;
  object-fit: cover;
  transition: 0.5s;
}
.spinner {
  // margin: 100px auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 50px;
  //   text-align: center;
  display: flex;
  justify-content: space-around;
  font-size: 10px;
}

.spinner > div {
  background: rgba(25, 190, 231, 0.7);
  border-radius: 1px;
  //   border: 1px solid rgba(255, 255, 255, 0.18);
  height: 100%;
  width: 6px;
  display: inline-block;
  -webkit-animation: stretchdelay 1.2s infinite ease-in-out;
  animation: stretchdelay 1.2s infinite ease-in-out;
}

.spinner .rect2 {
  -webkit-animation-delay: -1.1s;
  animation-delay: -1.1s;
}

.spinner .rect3 {
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
}

.spinner .rect4 {
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
}

.spinner .rect5 {
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
}

@-webkit-keyframes stretchdelay {
  0%,
  40%,
  100% {
    -webkit-transform: scaleY(0.4);
  }
  20% {
    -webkit-transform: scaleY(1);
  }
}

@keyframes stretchdelay {
  0%,
  40%,
  100% {
    transform: scaleY(0.4);
    -webkit-transform: scaleY(0.4);
  }
  20% {
    transform: scaleY(1);
    -webkit-transform: scaleY(1);
  }
}
</style>
