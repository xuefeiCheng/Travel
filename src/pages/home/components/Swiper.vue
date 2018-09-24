<template>
  <swiper :options="swiperOption" class='wrapper' v-if="showSwiper">
    <swiper-slide v-for='item of list' :key='item.id'>
      <img class='swiper-img' :src='item.imgUrl'/>
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 3000
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style scoped lang="stylus">
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff !important
  .wrapper
    width: 100%
    height: 0
    overflow: hidden
    padding-bottom: 31.25%
    background: #ccc
    .swiper-img
      width: 100%
</style>
