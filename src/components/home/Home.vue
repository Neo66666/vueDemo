<template>
  <div class='home'>
    <home-header></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-nav :iconList="iconList"></home-nav>
    <home-favourite :recommendList="recommendList"></home-favourite>
    <home-weekend :weekendList="weekendList"></home-weekend>
  </div>
</template>

<script>
  import HomeHeader from './base/Header'
  import HomeSwiper from './base/Swiper'
  import HomeNav from './base/Nav'
  import HomeFavourite from './base/Favourite'
  import HomeWeekend from './base/weekend'

  import {getHome} from "../../api";

  export default {
    name: "Home",
    data(){
      return {
        iconList:[],
        recommendList:[],
        swiperList:[],
        weekendList:[],
      }
    },
    components:{
      HomeHeader,
      HomeSwiper,
      HomeNav,
      HomeFavourite,
      HomeWeekend
    },
    created() {
      this.getData()
    },
    methods:{
      async getData(){
        let {iconList,recommendList,swiperList,weekendList} = await getHome()
        this.iconList = iconList
        this.recommendList = recommendList
        this.swiperList = swiperList
        this.weekendList = weekendList
      },
    },
  }
</script>

<style lang="stylus" scoped>
  .content
    position absolute
    top .88rem
</style>
