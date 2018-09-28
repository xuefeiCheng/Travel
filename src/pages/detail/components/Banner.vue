<template>
  <div>
    <div class="banner" @click="handleGalleryShow">
      <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1707/a3/a3924161475dee37a3.img.jpg_600x330_67fe57ba.jpg" />
      <div class="banner-info">
        <div class="banner-title">青岛海昌极地海洋世界(AAAA景区)</div>
        <div class="banner-num">
          <span class='iconfont banner-icon'>&#xe691;</span>
          119
        </div>
      </div>
    </div>
    <common-gallery
      :imgs="imges"
      v-show="galleryShow"
      @close="handleGalleryShow"
    ></common-gallery>
  </div>
</template>

<script>
import CommonGallery from 'common/gallery/Gallery'
export default{
  name: 'DetailBanner',
  data () {
    return {
      galleryShow: false,
      imges: ['http://img1.qunarzz.com/sight/p0/1707/cf/cf12a7d0e1b1bfe9a3.img.jpg_r_800x800_04f4fac7.jpg', 'http://img1.qunarzz.com/sight/p0/1707/a6/a626f82baf012026a3.img.jpg_r_800x800_a4945191.jpg']
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
