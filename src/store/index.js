import Vue from 'vue'
import Vuex from 'vuex'
import HomeStore from './home'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    HomeStore
  }
})

export default store
