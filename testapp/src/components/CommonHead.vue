<template>
    <div>
        <div class="title">
            <span class="title-1">首页</span>
            <span class="title-2">电影</span>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .title{
        top: 0;
        width: 100%;
        height: 1rem;
        background: red;
        line-height: 1rem;
        color: white;
        position: fixed;
    }
    .title-2{
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        position: absolute;
    }
</style>