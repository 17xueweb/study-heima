<template>
    <div>
        <button @click="test">+1(原始形式)</button>
        <!-- vue中方法的默认第一个参数是 事件参数对象 -->
        <!-- 事件参数对象 $event -->
        <!-- 100就是传递的载荷 -->
        <button @click="addCount(100)">+100(辅助函数形式)</button>
        <button @click="test1">异步调用(原始形式)</button>
        <button @click="getAsyncCount(222)">异步调用(辅助函数)</button>
        <div>
            原始形式getters: {{ $store.getters.filterList }}
        </div>
        <div>
            辅助形式getters: {{ filterList }}
        </div>
    </div>
</template>

<script>
    import { mapMutations, mapActions, mapGetters } from 'vuex';
    export default {
        computed: {
            // 将getters中的计算属性导入到组件的计算属性中
            ...mapGetters(['filterList'])
        },
        methods: {
            // 原始方式调用
            test() {
                // 调用mutations方法 提交mutations
                // commit(mutations名称)
                // commit的第二个参数就是要传递的载荷 payload 就是传入的参数
                this.$store.commit('addCount', 5)
            },
            test1() {
                // 原始形式
                // commit 是提交mutations
                // 调用action 是dispatch
                // dispatch(action的名称)
                // 传递参数
                this.$store.dispatch('getAsyncCount', 111)
            },
            ...mapMutations(['addCount']), // 此时组件方法中拥有一个对应的addCount方法
            ...mapActions(['getAsyncCount']), // 引入异步的action
        }
    }
</script>

<style>

</style>