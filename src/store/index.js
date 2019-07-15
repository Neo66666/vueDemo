import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    letter:'',
    currentCity:localStorage.getItem('currentCity')||'长沙',
  },
  mutations:{
    changeLetter(state,value){
      state.letter = value
    },
    cityChange(state,value){
      state.currentCity = value
      localStorage.setItem('currentCity',value)
    },
  },
})
















