import Vue from 'vue'
import App from './App.vue'
import EelmentUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(EelmentUI) // 注册element的组件及功能
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
