import Vue from 'vue'
import Vuex from 'vuex'
import catagtory from './modules/catagtory'
import newlist from './modules/newlist'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
    // 建立对于子模块的快捷访问
    catagtory: state => state.catagtory.catagtory, // 建立对于 catagtory 下的 catagtory属性的快捷访问
    currentCatagtory: state => state.catagtory.currentCatagtory,
    currentList: state => state.newlist.allData[state.catagtory.currentCatagtory] || []
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    catagtory,
    newlist
  }
})
