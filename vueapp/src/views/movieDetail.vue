<template>
    <div>
        {{$route.params.id}}
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            movie:{}
        }
    },

    created() {
        axios.get('https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/subject'+this.$route.params.id)
    },
}
 
</script>
<style scoped>
    
</style>