<template>
  <div class='attractions'>
    <att-header></att-header>
    <att-banner
      :sightName="sightName" :gallaryImgs="gallaryImgs" :bannerImg="bannerImg"></att-banner>
    <att-card :cardInfo="cardInfo"></att-card>
    <att-goto :recommendInfo="recommendInfo"></att-goto>
    <att-calendar :calendarInfo="calendarInfo"></att-calendar>
    <att-comment :commentInfo="commentInfo"></att-comment>
  </div>
</template>

<script>
  //获取数据
  import {getAtt} from "../../api";
  //获取子组件
  import AttHeader from './base/Header'
  import AttBanner from './base/Banner'
  import AttCard from './base/Card'
  import AttGoto from './base/Goto'
  import AttCalendar from './base/Calendar'
  import AttComment from './base/Comment'
  export default {
    name: "Attractions",
    data(){
      return {
        bannerImg:'',
        sightName:'',
        gallaryImgs:'',
        cardInfo:{},
        recommendInfo:[],
        calendarInfo:[],
        commentInfo:[],
      }
    },
    components:{
      AttHeader,
      AttBanner,
      AttCard,
      AttGoto,
      AttCalendar,
      AttComment,
    },
    methods:{
      //数据获取
      async getData(){
        let {bannerImg,sightName,gallaryImgs,cardInfo,recommendInfo,calendarInfo,commentInfo}
        = await getAtt(this.$route.params.id)
        this.bannerImg = bannerImg
        this.sightName = sightName
        this.gallaryImgs = gallaryImgs
        this.cardInfo = cardInfo
        this.recommendInfo = recommendInfo
        this.calendarInfo = calendarInfo
        this.commentInfo = commentInfo
        console.log(await getAtt(this.$route.params.id));
      },
      //滚轮切换头部的显示隐藏
      handleScroll(){
        let scrollTop = document.documentElement.scrollTop
        // console.log(scrollTop);
      }
    },
    activated() {
      this.getData()
      // window.addEventListener('scroll',this.handleScroll)
    },
    deactivated() {
      // window.removeEventListener('scroll',this.handleScroll)
    }
  }
</script>

<style lang="stylus" scoped>
.attractions
  background-color: #000
</style>
