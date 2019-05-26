<template>
  <div id="app">
    <div id="nav">
      
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
      
    }
  },
  comments:{
    CommonHead,
    CommonFoot
  }
}

</script>
<style scoped>

</style>
