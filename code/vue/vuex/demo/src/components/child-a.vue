<template>
    <div>
        <button @click="test">+1(原始形式)</button>
        <!-- vue中方法的默认第一个参数是 事件参数对象 -->
        <!-- 事件参数对象 $event -->
        <!-- 100就是传递的载荷 -->
        <button @click="addCount(100)">+100(辅助函数形式)</button>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex';
    export default {
        methods: {
            // 原始方式调用
            test() {
                // 调用mutations方法 提交mutations
                // commit(mutations名称)
                // commit的第二个参数就是要传递的载荷 payload 就是传入的参数
                this.$store.commit('addCount', 5)
            },
            ...mapMutations(['addCount']) // 此时组件方法中拥有一个对应的addCount方法
        }
    }
</script>

<style>

</style>