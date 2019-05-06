<template>
    <div class="footer">
        <ul class="footer-list" v-for="(obj, index) in menu" :key="index">
       <li v-for="(obj, index) in menu" :key="index">
      <router-link :to="obj.path">{{ obj.name }}</router-link>
       </li>
        </ul>
    </div>
</template>
<script>
    
export default {
    props:['menu']
}
</script>
<style  scoped>
   .footer{
       height: 1rem;
       width: 100%;
       background: red;
       bottom: 0px;
       position:fixed;
       line-height: 1rem;
   }
    .footer-list {
       display: flex;
   }
   .footer-list li{
       flex: 1;
       text-align: center;
      
   }
   .footer-list a{
       color: black;
       outline: none;
   }
   .footer-list a.router-link-active{
        color:#fff;
    }
</style>