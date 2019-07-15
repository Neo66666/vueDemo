<template>
  <div class="banner">
    <img :src="bannerImg" alt="" @click="handleOpen">
    <div class="content">
      <span>{{sightName}}</span>
      <p><i class="iconfont icon-tupian"></i><span>{{gallaryImgs.length}}</span></p>
    </div>
    <com-animation>
      <com-gallery @close="handleClose" v-if="isShow" :imgs="gallaryImgs"></com-gallery>
    </com-animation>
  </div>
</template>

<script>
  import ComGallery from '../../../shareCom/Gallery'
  import ComAnimation from '../../../shareCom/Animation'
  export default {
    name: "AttBanner",
    props:['bannerImg','sightName','gallaryImgs'],
    data(){
      return {
        isShow:false
      }
    },
    components:{
      ComGallery,
      ComAnimation
    },
    methods:{
      handleOpen(){
        this.isShow = true
      },
      handleClose(){
        this.isShow = false
      }
    },
  }
</script>

<style lang="stylus" scoped>
  .banner
    position relative
    img
      width: 100%
    .content
      position: absolute
      display flex
      bottom: 0
      left: 0
      width 100%
      height .6rem
      color #fff
      line-height .6rem
      span
        font-size .32rem
        padding-left .2rem
      p
        position absolute
        right: 0
        height .36rem
        width 1rem
        margin .12rem .12rem 0 0
        padding-left .2rem
        line-height .36rem
        border-radius .2rem
        background-color: #000
</style>
