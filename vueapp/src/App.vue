<template>
  <div id="app">
  <common-header></common-header>
  <div>
    <router-view></router-view>
  </div>
  <common-footer></common-footer>
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
        menu:[{
          name: '电影',
          path: '/movie',
          background: red
        },{
          name: '音乐',
          path: '/music',
          background: red
        },{
          name: '图书',
          path: '/books',
          background: red
        },{
          name: '图片',
          path: '/picture',
          background: red
        },{
          name: '讨论',
          path: '/talk',
          background: red
        },
        ]
      }
    }
}
</script>
<style  scoped>

</style>
