<template>

  <div id="app">
    <div>
  <router-link to="/a">A首页</router-link>
  
  <!-- <router-link :to="{name:'b',params:{name:'zzz',age: 22}}">B首页</router-link> -->
  <router-link to="/c/9527/www">C页面</router-link>
  <router-link to="/b/9999/ssss">B页面</router-link>
  
  </div>
  <transition name="fade">
    <router-view/> 
    </transition>
  </div>
</template>
 
<style>
  .fade-enter{
    opacity: 0;
  }
  .fade-enter-active{
    transition:opacity 2s ease 2s;
  }
  .fade-enter-to{
    opacity: 1;
  }
  .fade-leave{
    opacity: 1;
  }
  .fade-leave-active{
    transition:opacity 2s ease 2s;
  }
  .fade-leave-to{
    opacity: 0;
  }
</style>
