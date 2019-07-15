<!--订票公共组件-->
<template>
  <div class="content border-bottom">
    <div class="left">
      <h4>{{item.title}}</h4>
      <p>{{item.time}}</p>
      <span>随时退</span>
    </div>
    <div class="right">
      <span>￥{{item.price}}</span>
      <p>{{item.type}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ComBooking",
    props:['item'],//接受一个对象数据
  }
</script>

<style lang="stylus" scoped>
  .content
    display flex
    justify-content space-between
    padding .2rem 0
    .left
      width 70%
      color: #616161
      h4
        height 1.2rem
        font-size .3rem
        line-height .6rem
        overflow hidden
      p
        line-height .5rem
        font-size .28rem
      span
        display block
        line-height .4rem
        font-size .24rem
        color #00afc7
    .right
      width 30%
      box-sizing border-box
      text-align center
      padding .4rem .4rem 0
      span
        color #ff9852
        font-size .35rem
        font-weight 600
      p
        height .6rem
        line-height .6rem
        background-color: #ffab1e
        border-radius .1rem
</style>
