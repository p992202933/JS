<template>
  <div id="app">
  <common-header></common-header>
  <div>
    <router-view></router-view>
  </div>
  <common-footer :menu='menu'></common-footer>
  </div>
</template>
<script>
import CommonHeader from '@/components/CommonHeader.vue'
import CommonFooter from '@/components/CommonFooter.vue'
export default {
    components:{
      CommonHeader,
      CommonFooter
    },
    data(){
      return{
        menu: [
        {
          name: "电影",
          path: "/movie",
          bg: "#f00"
        },
        {
          name: "音乐",
          path: "/music",
          bg: "#00ffee"
        },
        {
          name: "图书",
          path: "/book",
          bg: "#feef00"
        },
        {
          name: "图片",
          path: "/photo",
          bg: "#fabbaa"
        }
      ],
      }
    }
}
</script>
<style  scoped>

</style>
