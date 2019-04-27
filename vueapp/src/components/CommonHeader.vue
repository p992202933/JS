<template>
    <div class="header">
        <div>
        <span class="header-btn">首页</span>
        <span class="header-title">电影</span>
        </div>
    </div>
</template>
<script>
    
export default {
    
}
</script>
<style  scoped>
       .header{
          height: 1rem; 
          background: red;
          width: 100%;
          color: white;
          position: fixed;
          top: 0px;
          line-height: 1rem;
       }
       .header-title{
           position: absolute;
           left: 50%;
           top: 50%;
           transform: translate(-50%,-50%)
           
       }
</style>