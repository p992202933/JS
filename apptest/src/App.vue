<template>
  <div id="app">
    <div id="nav">
      <Commonhead></Commonhead>
      <div id="content">
        <router-view></router-view>
      </div>
      <Commonfoot :menu="menu" :selectMenu='selectMenu' @change="fn"></Commonfoot>
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
      menu:[{
        name: '电影',
        path: '/movie',
        bg: '#f44'
      },{
        name: '音乐',
        path: '/music',
        bg: '#f33'
      },{
        name: '图书',
        path: '/book',
        bg: '#f55'
      },{
        name: '相片',
        path: '/photo',
        bg: '#f66'
      },
      ],
      selectMenu:{
        name:'电影',
        path:'/movie',
        bg: '#f44'
      }

    }
  },
  methods: {
    fn(index){
      this.selectMenu = this.menu[index];
    }
  },
  components:{
    Commonhead,
    Commonfoot
  },
  created() {
    this.menu.forEach((obj,index) => {
      if(obj.path == this.$route.path) {
        this.selectMenu = menu.obj;
      }
    });
  },
}
</script>
<style scoped>
#content {
  margin: 1rem 0;
}
</style>
