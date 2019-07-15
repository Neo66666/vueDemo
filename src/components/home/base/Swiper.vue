<template>
  <swiper :options="swiperOption" class="swiper">
    <!-- slides -->
    <swiper-slide v-for="(item,index) in swiperList" :key="index" v-if="isShow">
      <img class="swiper-img" :src="item.imgUrl" alt="">
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
  export default {
    name: 'HomeSwiper',
    props:['swiperList'],
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination',
          },
          loop:true,
          autoplay:true,
        },
      }
    },
    computed:{
      isShow(){
        return this.swiperList.length>0
      },
    },
  }
</script>

<style lang="stylus" scoped>
  .swiper-pagination>>>span
    background-color: #fff
  .swiper
    width: 100%
    height: 120px
    .swiper-wrapper
      .swiper-slide
        img
          width: 100%
</style>
