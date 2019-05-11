<template>
    <div>
        <div class="img-box" :style="{backgroundImage:'url('+url+')'}">

        </div>
    </div>
</template>
<script>
export default {
    computed: {
        url(){
           return this.$store.state.photoData[this.$route.params.index].src
        }
    },
}
</script>
<style scoped>
    .img-box{
        top: 1rem;
        bottom: 1rem;
        background: #000 0 center no-repeat;
        background-size: contain;
        position: absolute;
        left: 0;
        right: 0;
    }
</style>