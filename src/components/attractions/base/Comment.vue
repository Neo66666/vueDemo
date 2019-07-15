<template>
  <div class='comment border-bottom'>
    <h3 class="border-bottom">用户评论</h3>
    <div class="content" v-for="item in commentInfo">
      <p>{{item.desc}}</p>
      <ul class="imgs" @click="handleOpen(item)">
        <li v-for="(img,index) in item.imgs">
          <img :src='img' alt="" v-if="index<6">
        </li>
      </ul>
      <span>共{{item.imgs.length}}张</span>
    </div>
<!--    <com-gallery @close="handleClose" v-if="isShow" :imgs="imgs"></com-gallery>-->
    <com-animation>
      <com-gallery @close="handleClose" v-if="isShow" :imgs="imgs"></com-gallery>
    </com-animation>
  </div>
</template>

<script>
  import ComGallery from '../../../shareCom/Gallery'
  import ComAnimation from '../../../shareCom/Animation'
  export default {
    name: "AttComment",
    props:['commentInfo'],
    data(){
      return {
        isShow:false,
        imgs:[],
      }
    },
    methods:{
      handleOpen(item){
        this.isShow = true
        this.imgs = item.imgs
      },
      handleClose(){
        this.isShow = false
      }
    },
    components:{
      ComGallery,
      ComAnimation,
    },
  }
</script>

<style lang="stylus" scoped>
  .comment
    margin-top .2rem
    padding 0 .2rem 20px
    background-color: #fff
    h3
      line-height .8rem
      font-size .3rem
      padding-left .3rem
    .content
      position relative
      p
        padding .2rem 0
        line-height .4rem
      .imgs
        overflow hidden
        li
          float left
          width 33%
          img
            width 100%
      span
        position absolute
        right .1rem
        bottom .3rem
        font-size .28rem
        color #fff
        padding 0 .05rem
        background-color: rgba(0,0,0,0.5)



</style>
