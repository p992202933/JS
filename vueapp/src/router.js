import Vue from 'vue'
import Router from 'vue-router'
import Movie from '@/views/movie.vue'
import Music from '@/views/music.vue'
import Book from '@/views/book.vue'
import Photo from '@/views/photo.vue'
import MusicList from '@/views/musicList.vue'
import MovieDetail from '@/views/movieDetail.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:"/movie",
      component:Movie
    }, {
      path:"/movieDetail/:id",
      component:MovieDetail
    },
    {
      path:"/music",
      component:Music
    },{
      path:"/musiclist",
      component:MusicList
    },
    {
      path:"/book",
      component:Book
    },
    {
      path:"/photo",
      component:Photo
    },
    {
      path:'/',
      redirect: "/movie"
    }

  ]
})