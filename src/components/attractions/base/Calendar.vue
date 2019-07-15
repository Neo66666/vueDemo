<template>
  <div class='calendar'>
    <ul class="header">
      <li>门票</li>
      <li>一日游</li>
    </ul>
    <div class="content" v-for="(item,index) in calendarInfo" :key="index">
      <h3 class="border-bottom">{{item.calendarInfo.title}}</h3>
      <div @click="handleClick(value)" class="border-bottom info" v-for="(value,i) in item.calendarInfo.result" :key="i">
        <div class="show">
          <div class="left">
            <h4>{{value.subtitle}}</h4>
          </div>
          <div class="right">
            <span>￥{{value.price}}<i class="iconfont icon-jiantouxiangxia"></i></span>
          </div>
        </div>
        <div class="hidden" v-show="value.isShow">
          <com-booking @click="bookClick(value)" v-for="(v,n) in value.recommendInfo" :key="n" :item="v"></com-booking>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ComBooking from '../../../shareCom/Booking'
  export default {
    name: "Calendar",
    props:['calendarInfo'],
    components:{
      ComBooking,
    },
    methods:{
      handleClick(value){
        value.isShow = !value.isShow
      },
      bookClick(){
        value.isShow = !value.isShow
      }
    },
  }
</script>

<style lang="stylus" scoped>
  .calendar
    margin-top .2rem
    background-color: #fff
    .header
      display flex
      li
        width 50%
        height 1rem
        line-height 1rem
        text-align center
        font-size .3rem
    .content
      padding 0 .2rem
      border-bottom .2rem solid #f5f5f5
      h3
        font-size .32rem
        line-height 1rem
      .info
        .show
          display flex
          margin-bottom 20px
          .left
            width 70%
            color #616161
            h4
              line-height .6rem
              font-size .28rem
          .right
            width 30%
            padding .3rem 0 0 .7rem
            box-sizing border-box
            span
              color #ff9852
              font-size .35rem
              font-weight 600
              i
                color #bbb
                font-size .24rem
</style>
