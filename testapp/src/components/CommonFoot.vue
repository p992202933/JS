<template>

    <div class="main">
        <ul class="main-list">
            <li v-for="(obj, index) in menu" :key="index" >
                <router-link :to="obj.path">{{obj.name}}</router-link>
            </li>
        </ul>
    </div>
</template>
<script>

export default {
    props:['menu']
}
</script>
<style scoped>
    .main{
        background: red;
        bottom: 0;
        width: 100%;
        height: 1rem;
        line-height: 1rem;
        position: fixed;
        }
        .main-list{
            display: flex;
        }
        .main-list li{
            flex: 1;
            text-align: center;
        }
        .main-list li a{
            color: aliceblue;
            outline: none;
        }
        .main-list li a.router-link-active{
            color: black;
        }
</style>