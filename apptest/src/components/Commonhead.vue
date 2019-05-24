<template>
    <div class="header">
        <div>
        <span class="header-title">首页</span>
        <span class="header-name">电影</span>
        </div>
    </div>
</template>
<script>
export default {
    
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
        top: 0;
    }
    .header-name{
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        position: absolute;
    }
    
</style>