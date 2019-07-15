<template>
  <div class='card'>
    <div class="top border-bottom">
      <div class="left">
        <h3>{{cardInfo.score}}<span>{{cardInfo.desc}}</span></h3>
        <p><span>{{cardInfo.comment}}</span><span>{{cardInfo.walkthrough}}条攻略</span></p>
        <i class="iconfont icon-jiantouyou"></i>
      </div>
      <div class="right">
        <h4>景点简介</h4>
        <p>开放时间、贴士</p>
        <i class="iconfont icon-jiantouyou"></i>
      </div>
    </div>
    <p class="bottom">{{cardInfo.address}}<i class="iconfont icon-jiantouyou"></i> </p>
  </div>
</template>

<script>
  export default {
    name: "Card",
    props:['cardInfo'],
  }
</script>

<style lang="stylus" scoped>
  .card
    padding .2rem .2rem 0
    background-color: #fff
    .top
      display flex
      .left
        position relative
        width 50%
        height 50%
        h3
          line-height .4rem
          color #ff8300
          font-size .32rem
          span
            font-size .28rem
        p
          color #9e9e9e
          font-size .24rem
          line-height .5rem
        i
          position: absolute;
          right: 0.2rem;
          bottom: 0;
          top: 0;
          width: 0.3rem;
          height: 0.3rem;
          margin: auto;
          font-size: 0.3rem;
          color: #999;
          line-height 1
      .right
        position relative
        width 50%
        height 50%
        p
          color #9e9e9e
          font-size .24rem
          line-height .5rem
        i
          position: absolute;
          right: 0.2rem;
          bottom: 0;
          top: 0;
          width: 0.3rem;
          height: 0.3rem;
          margin: auto;
          font-size: 0.3rem;
          color: #999;
          line-height 1
    .bottom
      position relative
      line-height .8rem
      i
        position: absolute;
        right: 0.2rem;
        bottom: 0;
        top: 0;
        width: 0.3rem;
        height: 0.3rem;
        margin: auto;
        font-size: 0.3rem;
        color: #999;
        line-height 1
</style>
