<template>
  <div id="app">
    <div id="nav">
      <common-head></common-head>
      <div id="content">
        <router-view></router-view>
      </div>
      <common-foot :menu='menu'></common-foot>
    </div>
    <router-view/>
  </div>
</template>

<script>
import CommonHead from '@/components/CommonHead.vue';
import CommonFoot from '@/components/CommonFoot.vue';
export default {
  data() {
    return {
      menu:[
        {
          name:'电影',
          path:'/movie'
        },{
          name:'图书',
          path:'/book'
        },{
          name:'音乐',
          path:'/music'
        },{
          name:'相片',
          path:'/photo'
        },
      ]
    }
  },
  components:{
    CommonHead,
    CommonFoot
  }
}

</script>
<style scoped>
 #content{
   margin: 1rem 0;
 }
</style>
