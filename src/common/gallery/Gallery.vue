<template>
  <div class="container" @click="handleGalleryShow">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <swiper-slide
          v-for="(img,index) of imgs"
          :key="index"
        >
          <img class='gallery-img' :src='img'/>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default{
  name: 'CommonGallery',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observer: true,
        observeParents: true
      }
    }
  },
  methods: {
    handleGalleryShow () {
      this.$emit('close')
    }
  }
}
</script>

<style scoped lang="stylus">
  .container >>> .swiper-container
    overflow: inherit
  .container
    display: flex
    flex-direction: column
    justify-content: center
    z-index: 99
    position: fixed
    top: 0
    left: 0
    right: 0
    bottom: 0
    background: #000
    .wrapper
      background: #666
      height: 0
      width: 100%
      padding-bottom: 100%
      .gallery-img
        width: 100%
      .swiper-pagination-fraction
        color: #fff
        bottom: -1rem
</style>
