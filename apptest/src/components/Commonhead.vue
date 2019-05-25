<template>
    <div class="header" :style="{backgroune:selectMenu.bg}">
        <div>
        <span class="header-title">首页</span>
        <span class="header-name" >{{selectMenu.name}}</span>
        </div>
    </div>
</template>
<script>
export default {
    props:['selectMenu']
}
</script>
<style scoped>
    .header{
        width: 100%;
        background: red;
        height: 1rem;
        position: fixed;
        line-height: 1rem;
        color: aliceblue;
        top: 0px;
    }
    .header-name{
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        position: absolute;
    }
    
</style>