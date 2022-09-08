<template>
  <div id="app">
    <!-- 原始形式应用 -->
    <div>1. 原始形式获取state状态：{{ $store.state.count}}</div>
    <div>2. 计算属性状态：{{ count }}</div>
    <div>3. 辅助函数mapState  ：{{ count }}</div>

    <child-a/>

  </div>
</template>

<script>
import { mapState } from 'vuex';
import ChildA from './components/child-a.vue'
export default {
  name: 'App',
  components: {
    ChildA
  },
  computed: {
    // count() {
    //   return this.$store.state.count
    // },
    ...mapState(['count'])
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
