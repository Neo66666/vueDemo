<template>
  <div class='list' ref="wrapper">
    <div>
      <h3>当前城市</h3>
      <div class="city">
        <span>{{this.$store.state.currentCity}}</span>
      </div>

      <h3>热门城市</h3>
      <div class="city">
        <span
          v-for="item in hotCities"
          @click='handleClick(item.name)'
          :key="item.id">{{item.name}}</span>
      </div>

      <div v-for="(value,key) in cities" :key="key">
        <h3 :ref="key">{{key}}</h3>
        <ul>
          <li v-for="item in value"
              :key="item.id"
              @click='handleClick(item.name)'>{{item.name}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  //引入better-scroll插件
  import BCroll from 'better-scroll'
  import {mapMutations} from 'vuex'
  export default {
    name: "SearchList",
    props:['cities','hotCities'],
    mounted() {
      this.scroll = new BCroll(this.$refs.wrapper,{click:true})
    },
    computed:{
      listenLetter(){
        return this.$store.state.letter
      }
    },
    methods:{
      ...mapMutations(['cityChange']),
      handleClick(city){
        this.cityChange(city)
        this.$router.push('/')
      }
    },
    watch:{
      listenLetter(value){
        this.scroll.scrollToElement(this.$refs[value][0])
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .list
    position: fixed
    left: 0
    right: 0
    bottom:  0
    top: 1.78rem
    overflow: hidden
    div
      h3
        line-height:.54rem
        font-size: .26rem
        color: #666
        padding-left: .2rem
        background-color: #eee
      .city
        padding-left: .15rem
        span
          display: inline-block
          width: 28%
          margin: .1rem
          padding: .15rem .2rem
          text-align: center
          border-radius: .05rem
          box-sizing: border-box
          border: .01rem solid #ccc
      ul
        li
          padding-left: .2rem
          line-height: .8rem
</style>
