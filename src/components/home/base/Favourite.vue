<template>
    <div class='favourite'>
      <h2 class="title">猜你喜欢</h2>
      <ul class="ul">
        <router-link
          class="fav"
          v-for="(item,index) in recommendList"
          tag="li"
          :to="{name:'attractionslink',params:{id:item.id}}"
          :key="index">
          <img :src="item.imgUrl" class="fav-img" alt="">
          <div class="fav-info">
            <h4>{{item.title}}</h4>
            <span class="star star-one">
              <i class="iconfont icon-star" v-for="star in 5"></i>
            </span>
            <span class="star star-two" :style="item.score|star" >
              <i class="iconfont icon-star" v-for="star in 5"></i>
            </span>
            <span class="fav-text">{{item.comment}}条评论</span>
            <p class="item-price">{{item.price|price}}</p>
          </div>
        </router-link>
      </ul>
    </div>
</template>

<script>
    export default {
      name: "HomeFavourite",
      props:['recommendList'],
      filters:{
        price(value){
          return `￥${value}元`
        },
        star(value){
          return `width:${value/5*80/50}rem`
        },
      },
    }
</script>

<style lang='stylus' scoped>
  .favourite
    .title
      margin-top: .2rem
      line-height: .8rem
      background: #ddd
      text-align: center
      font-size: .32rem
    .fav
      display:flex
      height: 2.2rem
      padding:.2rem
      border-bottom:.04rem solid #f000ff
      .fav-img
        width:2rem
        height:2rem
      .fav-info
        flex:1
        position:relative
        padding: .1rem
        margin-left:.1rem
        min-width: 0rem;
        h4
          line-height:.6rem
          font-size:.3rem
          margin-bottom .3rem
        .star-one
          position absolute
          left .1rem
          color #ddd
        .star-two
          position absolute
          left .1rem
          color:#ff8300
          overflow hidden
        .fav-text
          padding-left 2.8rem
        .item-price
          margin-top .4rem
          font-size .3rem
          font-weight bolder
          color:#ff992f
</style>
