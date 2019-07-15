<template>
  <div class='weekend'>
    <h3 class="week-title">周末去哪儿</h3>
    <ul>
      <li class="item" v-for="(item,index) in weekendList" :key="index">
        <img class="item-img" :src="item.imgUrl" alt="">
        <h4 class="item-title">{{item.title}}</h4>
        <p class="item-dec">{{item.desc}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "HomeWeekend",
    props:['weekendList']
  }
</script>

<style lang="stylus" scoped>
  .weekend
    .week-title
      background-color #ddd
      line-height .8rem
      font-size: .32rem
      text-align center
    ul
      .item
        .item-img
          width 100%
        .item-title
          margin .24rem 0
          color #25a4bb
        .item-dec
          margin .2rem 0
          color #25a4bb
</style>
