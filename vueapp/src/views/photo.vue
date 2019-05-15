<template>
    <div>
        <img v-for="(obj, index) in $store.state.photoData" :key="index" :src="obj.src" @click="goDetail(index)">
    </div>
</template>

<script>
import axios from 'axios';
    export default {
       data() {
           return {
               
           }
       }, 
       created() {
           axios.get('/data/photodata.json')
           .then((result)=>{
               this.$store.commit('addPhoto',result.data.photoData)
           })
       },
       methods: {
           goDetail(index){
               this.$router.push('/photoDetail/'+index);
           }
       },
    }
</script>

<style scoped>
    img{
        width: 50%;
    }
</style>