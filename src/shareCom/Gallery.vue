<template>
  <div class='gallery'>
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="(img,index) in imgs" :key="index">
        <img class="gallery-img" :src="img" alt="" @click="handleOpen">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: "ComGallery",
    props:['imgs'],//接受一个数组数据
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination',
            type:'fraction',
          }
        },
      }
    },
    methods:{
      handleOpen(){
        this.$emit('close')
      }
    },
  }
</script>

<style lang="stylus" scoped>
  .gallery>>>.swiper-container
    width 100%
    margin-top 3rem
  .gallery
    position fixed
    top 0
    bottom 0
    left 0
    right 0
    z-index 10
    background-color: #000
    .gallery-img
      width 100%
    .swiper-pagination
      bottom 0
      color #ffffff
</style>
