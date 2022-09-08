<template>
    <div>
        <!-- 用户的token和应用名称name -->
        <!-- 子模块.属性 -->
        <div>用户名称： {{ $store.state.user.token }}</div>
        <div>快捷访问： {{ token }}</div>
        <div>应用名称：{{ $store.state.setting.name}}</div>
        <div>快捷访问： {{ name }}</div>
        <button @click="updateToken">更新子模块的token</button>
        <!-- <button @click="test">调用子模块的mutations</button> -->
    </div>
</template>

<script>
    import { mapGetters, createNamespacedHelpers } from 'vuex';
    const { mapMutations } = createNamespacedHelpers('user')
    export default {
        computed: {
            ...mapGetters(['token', 'name'])
        },
        methods: {
            // updateToken() {
            //     // 采用路径形式调用
            //     this.$store.commit('user/updateToken')
            // },
            // // ...mapMutations(['user/updateToken']),
            // // 第二种方案
            // test() {
            //     this['user/updateToken']()
            // },
            ...mapMutations(['updateToken'])
        }
    }
</script>

<style lang="less" scoped>

</style>