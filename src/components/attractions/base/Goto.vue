<template>
  <div class='goto'>
    <h3 class="border-bottom">去哪儿推荐</h3>
    <com-booking v-for="(item,index) in recommendInfo" :key="index" :item="item"></com-booking>
  </div>
</template>

<script>
  import ComBooking from '../../../shareCom/Booking'
  export default {
    name: "AttGoto",
    props:['recommendInfo'],
    components:{
      ComBooking,
    },
  }
</script>

<style lang="stylus" scoped>
  .goto
    margin-top .2rem
    background-color: #fff
    padding 0 .2rem
    h3
      text-indent .5rem
      line-height 1rem
      font-size .32rem
</style>
