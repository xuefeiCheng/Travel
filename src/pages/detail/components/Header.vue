<template>
  <div class="header">
    <router-link
      tag="div"
      to="/"
      class="abs"
      v-show="isShow"
    >
      <div class='iconfont abs-back'>&#xe624;</div>
    </router-link>
    <div
      class="fixed"
      v-show="!isShow"
      :style="opacityStyle"
    >
      {{sightName}}
      <router-link to="/">
        <div class='iconfont fixed-back'>&#xe624;</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default{
  name: 'DetailHeader',
  props: {
    sightName: String
  },
  data () {
    return {
      isShow: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.getScrollTop)
  },
  deactivated () {
    // 对全局事件 的解绑
    window.removeEventListener('scroll', this.getScrollTop)
  },
  methods: {
    getScrollTop () {
      // console.log('hhh')
      // 浏览器兼容
      const top = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.isShow = false
        this.opacityStyle = { opacity }
      } else {
        this.isShow = true
      }
    }
  }
}
</script>

<style scoped lang="stylus">
  @import '~styles/variables.styl'
  .abs
    position: absolute
    top: .2rem
    left: .2rem
    width: .8rem
    height: .8rem
    line-height: .8rem
    text-align: center
    border-radius: .4rem
    background: rgba(0, 0, 0, 0.8)
    .abs-back
      color: #fff
  .fixed
    z-index: 2
    position: fixed
    top: 0
    left: 0
    right: 0
    bottom: 0
    height: $headerHeight
    line-height: $headerHeight
    color: #fff
    background: $bgColor
    text-align: center
    font-size: .32rem
    .fixed-back
      position: absolute
      top: 0
      left: 0
      font-size: .4rem
      width: .64rem
      text-align: center
      color: #fff
</style>
