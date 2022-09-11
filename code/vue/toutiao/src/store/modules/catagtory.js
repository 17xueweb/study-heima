import axios from 'axios'
export default {
  namespaced: true,
  state: {
    // 存放分类数组的属性
    catagtory: [],
    currentCatagtory: '' // 当前激活的分类
  },
  mutations: {
    // 我们会认为载荷是要更新的数组
    updateCatagtory(state, payload) {
        state.catagtory = payload // 赋值分类
    },
    // 更新当前激活分类
    updateCurrentCatagtory(state, payload) {
        state.currentCatagtory = payload
    }
  },
  actions: {
    async getCatagtory(context) {
      // Promise
      // axios 默认包了一层data数据结构
      const { data: { data: { channels } } } = await axios.get('http://geek.itheima.net/v1_0/user/channels')
      // 需要通过mutation 才能改state
      context.commit('updateCatagtory', channels) // 更新数组
      context.commit('updateCurrentCatagtory', channels[0].id) // 更新当前激活的id
    }
  }
  }
