import Vue from 'vue'
import App from './App.vue'
import store from './store'
import '@/styles/index.css' // 引入样式

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
