<template>
  <swiper :options="swiperOption" class="swiper">
    <!-- slides -->
    <swiper-slide v-for="(item,index) in fillterImg" :key="index">
      <div class="item" v-for="(img,num) in item" :key="num">
        <img class="item-img" :src="img.imgUrl" alt="">
        <span class="item-dec">{{img.desc}}</span>
      </div>
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
  export default {
    name: 'HomeNav',
    props:['iconList'],
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          }
        },
      }
    },
    computed:{
      fillterImg(){
        let imgs = []
        this.iconList.forEach((item,index)=>{
          let page = Math.floor(index/8)
          if(!imgs[page]){
            imgs[page] = []
          }
          imgs[page].push(item)
        })
        return imgs
      }
    },
  }
</script>

<style lang="stylus" scoped>
  .swiper>>>.swiper-slide
    display: flex
    flex-wrap: wrap
.swiper
  height:3.7rem
  .item
    display: flex
    flex-direction:column
    align-items:center
    width: 25%
    height: 50%
    .item-img
      width: 1.1rem
      margin-top:.2rem
</style>
