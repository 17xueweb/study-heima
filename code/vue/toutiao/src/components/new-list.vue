<template>
  <div class="list">
    <div class="article_item" v-for="item in currentList" :key="item.art_id">
      <h3 class="van-ellipsis">{{ item.title }}</h3>
      <div class="img_box" v-if="item.cover.type === 1">
        <img :src="item.cover.images[0]" class="w100" />
      </div>
      <div class="img_box" v-else-if="item.cover.type === 3">
        <img :src="item.cover.images[0]" class="w33" />
        <img :src="item.cover.images[1]" class="w33" />
        <img :src="item.cover.images[2]" class="w33" />
      </div>
      <!---->
      <div class="info_box">
        <span>{{ item.aut_name }}</span>
        <span>{{ item.comm_count }}</span>
        <span>{{ item.pubdate }}</span>
      </div>
    </div>
  </div>
</template>

<script>
// 引入当前激活的分类id
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['currentCatagtory', 'currentList'])
  },
  watch: {
    currentCatagtory(newValue) {
      // newValue 是当前最新的激活id
      this.$store.dispatch('newlist/getNewList', newValue)
    }
  }
}
</script>
<style>
</style>
