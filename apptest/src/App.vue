<template>
  <div id="app">
    <div id="nav">
      <Commonhead></Commonhead>
      <div id="content">
        <router-view></router-view>
      </div>
      <Commonfoot :menu="menu"></Commonfoot>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Commonhead from '@/components/Commonhead.vue';
import Commonfoot from '@/components/Commonfoot.vue'
export default {
  data() {
    return {
      meun:[{
        name: '电影',
        path: '/movie'
      },{
        name: '音乐',
        path: '/music'
      },{
        name: '图书',
        path: '/book'
      },{
        name: '相片',
        path: '/photo'
      },
      ]

    }
  },
  components:{
    Commonhead,
    Commonfoot
  }
}
</script>
<style scoped>
#content {
  margin: 1rem 0;
}
</style>
