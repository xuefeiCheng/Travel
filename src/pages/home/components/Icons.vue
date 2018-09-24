<template>
  <div class='icons'>
    <swiper :options="swiperOption">
      <swiper-slide
        v-for='(page,index) of pages'
        :key='index'
      >
        <div class='icon'
          v-for='icon of page'
          :key='icon.id'
        >
          <div class='icon-img'>
            <img class='icon-img-content' :src="icon.imgUrl"/>
          </div>
          <p class='icon-img-desc'>{{icon.desc}}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: 0
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style scoped lang="stylus">
/*设置swiper之后存在的问题，滑动区域只在上半部分，故需要更改css样式*/
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
  .icons >>> .swiper-container
    height: 0
    padding-bottom: 50%
  .icons
    margin-top: .1rem
    .icon
      position: relative
      width: 25%
      height: 0
      padding-bottom: 25%
      float: left
      .icon-img
        position: absolute
        top: 0
        left: 0
        right: 0
        box-sizing: border-box
        padding: .1rem
        bottom: .44rem
        .icon-img-content
          display: block
          height: 100%
          margin: 0 auto
      .icon-img-desc
        position: absolute
        left: 0
        right: 0
        bottom: 0
        height: .44rem
        line-height: .44rem
        text-align: center
        color: $markTextColor
        padding:0 .1rem
        ellipsis()
</style>
