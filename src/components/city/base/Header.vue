<template>
  <div class='header'>
    <router-link tag="i" to="/" class="iconfont icon-fanhui"></router-link>
    <h2 class="header-title">城市选择</h2>
  </div>
</template>

<script>
  export default {
    name: "CityHeader"
  }
</script>

<style lang="stylus" scoped>
  .header
    display: flex
    line-height .86rem
    color #fff
    background-color: #00bcd4
    .iconfont
      margin-left .3rem
    .header-title
      flex 1
      margin-left 3rem

</style>
