<template>
    <div>
        <img :src="obj.bg" v-for="(obj, index) in musicList" :key="index" class="music-photo" @click="goList()">
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        data() {
            return {
                musicList:[]
            }
        },
        created() {
            axios.get('/data/musiclist.json')
            .then((result)=>{
                this.musicList = result.data.albums;
                console.log(this.musicList)
            })
        },
        methods: {
            goList(){
                this.$router.push('/musiclist')
            }
        },
    }
</script>

<style scoped>
.music-photo{
    width: 50%;
}
</style>