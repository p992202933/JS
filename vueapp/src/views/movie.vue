<template>
    <div class="movie-container">
        <ul>
            <li class="movie-list" v-for="(obj, index) in movieList" :key="index">
                <img class="movie-img" :src="obj.images.medium">
                <div class="movie-text">
                    <h4>{{ obj.title }}</h4>
                    <p>
                        <span v-for="(cast,index) in obj.casts" :key="index">{{cast.name}}</span>
                    </p>
                    <p>
                        已观看：66666
                    </p>
                    <p>
                        年份：2019
                    </p>
                    <p>
                        类型：奇幻
                    </p>
                </div>
            </li>
        </ul>
        <div class="loading" v-show="isShow">
            <img src="@/assets/imgs/loading.gif">
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                movieList:[],
                isShow: true
            }
        },
        created() {
           axios.get('https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/in_theaters?city=广州&start=0&count=10')
           //axios.get('/data/movie0.json')
            .then((result) => {
                
                this.movieList = result.data.subjects;
                console.log(this.movieList);
            }
            )},
    }
</script>

<style scoped>
 .movie-container{
     padding: 0 0.2rem ;
 }
 .movie-img{
     width: 100px;
     height: 150px;
     margin-right: 0.2rem;
 }
 .movie-list{
     color: black;
     display: flex;
     border-bottom: 1px black solid;
     padding: 0.2rem 0;
 }
 .movie-text{
     flex: 1;
 }
 .loading{
     left: 50%;
     top: 50%;
     transform: translate(-50%,-50%);
     position: fixed;
     background: rgba(0,0,0,0.5);
 }
</style>