<template>
  <div class="header">
    <i class="iconfont icon-fanhui black"></i>
    <div class="details">
      <i class="iconfont icon-fanhui blue"></i>
      <h2>景点详情</h2>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AttHeader"
  }
</script>

<style lang="stylus" scoped>
  .header
    position: fixed
    display: flex
    left: 0
    right: 0
    top: 0
    height: 1rem
    line-height: 1rem
    .black
      display: inline-block
      position: absolute
      top: 0
      left: 0
      width: .8rem
      height: .8rem
      line-height: .8rem
      text-align: center
      background-color: #000
      color: #fff
      border-radius: 50%
    .details
      display: none
      top: 0
      left: 0
      width: 100%
      background-color: #00bcd4
      height: 100%
      .blue
        margin-left: .4rem
        color: #fff
      h2
        display: inline-block
        margin-left: 2.6rem
</style>
