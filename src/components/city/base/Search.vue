<template>
  <div class='search'>
    <input class="search-input"
           type="text"
           v-model="keyword"
           placeholder="请输入城市名和拼音">
    <div class="search-list" ref="wrapper" v-show="isShow">
      <ul>
        <li v-for="city in filterCities" :key="city.id">{{city.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import BCroll from 'better-scroll'
  export default {
    name: "CitySearch",
    props:['cities'],
    data(){
      return {
        keyword:''
      }
    },
    computed:{
      filterCities(){
        let newCities = []
        for (let key in this.cities) {
          this.cities[key].forEach((item,index)=>{
            if( item.name.includes(this.keyword)||item.spell.includes(this.keyword) ){
              newCities.push(item)
            }
          })
        }
        return newCities
      },
      isShow(){
        return this.keyword
      },
    },
    mounted() {
      this.scorll = new BCroll(this.$refs.wrapper)
    }
  }
</script>

<style lang="stylus" scoped>
  .search
    position: relative
    height .72rem
    padding .1rem
    background-color: #00bcd4
    .search-input
      width 100%
      height 100%
      text-align center
      border-radius .1rem
    .search-list
      position: fixed
      top: 1.78rem
      bottom: 0
      left: 0
      right: 0
      overflow: hidden
      background-color: #ccc
      z-index: 10
      ul
        li
          padding-left: .2rem
          background-color: #fff
          line-height: .8rem

</style>
