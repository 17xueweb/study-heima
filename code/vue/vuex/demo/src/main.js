import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.use(Vuex) // 注册Vuex的功能 Vue.use的方法实际上是调用了 Vuex中的一个install的方法

const store = new Vuex.Store({
  // 实例化Vuex的构造参数 state mutations actions
  state: {
    // 存储的状态
    count: 0,
    list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
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
  },
  // 异步动作
  // 从后端获取一个数据 更新到state的count中
  actions: {
    // 方法
    // actions 方法依然有参数
    // 第一个参数 执行上下文对象
    // context 相当于 组件中的 this.$store (store的运行实例)
    getAsyncCount(context, params) {
      // 异步请求
      // 模拟异步请求
      setTimeout(function() {
        // 获取得到一个值
        context.commit('addCount', params)
      }, 1000)
    }
  },
  getters: {
    // 放置的所有的vuex的计算属性
    // state 指的是就是 当前store中的state
    // filterList: function(state) {
    //   return state.list.filter(item => item > 5)
    // }

    // 下面这种代码形式更常见
    filterList: state => state.list.filter(item => item > 5),
    token: state => state.user.token,
    name: state => state.setting.name
  },
  modules: {
    // 放置子模块的属性
    user: {
      namespaced: true,
      state: {
        token: '12345'
      },
      mutations: {
        updateToken(state) {
          state.token = '67890'

        }
      }
    },
    setting: {
      state: {
        name: 'Vuex实例'
      }
    }
  }

}) // 实例化一个Vuex

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
