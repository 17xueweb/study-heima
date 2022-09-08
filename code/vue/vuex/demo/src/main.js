import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.use(Vuex) // 注册Vuex的功能 Vue.use的方法实际上是调用了 Vuex中的一个install的方法

const store = new Vuex.Store({
  // 实例化Vuex的构造参数 state mutations actions
  state: {
    // 存储的状态
    count: 0
  },
  // 修改state 必须通过mutatios
  mutations: {
    // 修改state的mutations方法 
    // 每一个mutations都有对应的参数
    // 参数一：state 指的是当前vuex中的state对象
    // 参数二： payload 载荷 提交mutations方法的时候 传递的参数 它可以是任何形式的 任何类型的值
    addCount(state, payload) {
      state.count += payload
    }
  }

}) // 实例化一个Vuex

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
