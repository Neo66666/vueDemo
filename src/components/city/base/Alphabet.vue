<template>
  <div class='alphabet' ref="wrapper">
    <ul>
      <li v-for="(value,key) in cities" :key="key" @click="handleClick(key)">{{key}}</li>
    </ul>
  </div>
</template>

<script>
  import {mapMutations} from 'vuex'
  export default {
    name: "CityAlphabet",
    props:['cities'],
    methods:{
      //映射store中Mutations函数
      ...mapMutations(['changeLetter']),
      //li点击函数
      handleClick(key){
        this.changeLetter(key)
      }
    },
  }
</script>

<style lang="stylus" scoped>
  .alphabet
    position: fixed
    display: flex
    width: .4rem
    bottom: 0
    right: 0
    top: 1.78rem
    background-color: lightblue
    ul
      li
        width: .4rem
        line-height: .5rem
        text-align: center
        color: #f00
        font-weight: 600
</style>
