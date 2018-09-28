<template>
  <div>
    <div class="banner" @click="handleGalleryShow">
      <img class="banner-img" :src="data.bannerImg" />
      <div class="banner-info">
        <div class="banner-title">{{data.sightName}}</div>
        <div class="banner-num">
          <span class='iconfont banner-icon'>&#xe691;</span>
          {{imgnum}}
        </div>
      </div>
    </div>
    <common-gallery
      :imgs="data.gallaryImgs"
      v-show="galleryShow"
      @close="handleGalleryShow"
    ></common-gallery>
  </div>
</template>

<script>
import CommonGallery from 'common/gallery/Gallery'
export default{
  name: 'DetailBanner',
  props: {
    data: Object
  },
  computed: {
    imgnum () {
      let len = 0
      if (this.data.gallaryImgs) {
        len = this.data.gallaryImgs.length
      } else {
        len = 0
      }
      return len
    }
  },
  data () {
    return {
      galleryShow: false
    }
  },
  methods: {
    handleGalleryShow () {
      this.galleryShow = !this.galleryShow
    }
  },
  components: {
    CommonGallery
  }
}
</script>

<style scoped lang="stylus">
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      position: absolute
      display: flex
      left: 0
      right: 0
      bottom: 0
      background-image: linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8))
      .banner-title
        flex: 1
        line-height: .6rem
        font-size: .32rem
        padding-left: .2rem
        color: #fff
      .banner-num
        height: .32rem
        line-height: .32rem
        padding: 0 .4rem
        margin-top: .14rem
        border-radius: .2rem
        background: rgba(0,0,0,0.8)
        font-size: .24rem
        color: #fff
        .banner-icon
          font-size: .24rem
</style>
