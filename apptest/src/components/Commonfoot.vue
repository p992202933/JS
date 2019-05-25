<template>
    <div class="footer">
        <ul class="footer-main" :style="{backgroune:selectMenu.bg}">
            <li v-for="(obj, index) in menu" :key="index" class="footer-content" @click="$emit('change',index)">
                <router-link :to="obj.path">{{ obj.name }}</router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props:['menu','selectMenu']
    
}
</script>
<style scoped>
    .footer{
        position: fixed;
        bottom: 0px;
        background: red;
        width: 100%;
        height: 1rem;
        line-height: 1rem;
    }
    .footer-main{
        display: flex;
    }
    .footer-main li{
        flex: 1;
        text-align: center;
    }
    .footer-main a{
        color: aliceblue;
        outline: none;
    }
    .footer-main a.router-link-active{
        color: black;
    }
</style>