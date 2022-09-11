<template>
  <ul class="catagtory">
    <li @click="$store.commit('catagtory/updateCurrentCatagtory', item.id)" :class="{ select: item.id === currentCatagtory}" v-for="item in catagtory" :key="item.id">{{ item.name }}</li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    created() {
      // 调用子模块的action
      this.$store.dispatch('catagtory/getCatagtory')
    },
    computed: {
        ...mapGetters(['catagtory', 'currentCatagtory'])
    }
}
</script>
<style></style>
