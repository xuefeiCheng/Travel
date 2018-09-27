<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area border-topbottom">
        <div class="title">当前城市</div>
        <ul class="button-list">
          <li class="button-wrapper">
            <span class="button active">{{this.city}}</span>
          </li>
        </ul>
      </div>
      <div class="area border-topbottom">
        <div class="title">热门城市</div>
        <ul class="button-list">
          <li
            class="button-wrapper"
            v-for="hotcity of hotCities"
            :key="hotcity.id"
            @click="handleCityClick(hotcity.name)"
          >
            <span class="button">{{hotcity.name}}</span>
          </li>
        </ul>
      </div>
      <div
       class="area border-topbottom"
       v-for="(city, key) of cities"
       :key="key"
       :ref="key"
      >
        <div class="title">{{key}}</div>
        <ul class="item-list">
          <li
            v-for="innerC of city"
            :key="innerC.id"
            class="item border-bottom"
            @click="handleCityClick(innerC.name)"
          >
            {{innerC.name}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapState } from 'vuex'
export default {
  name: 'CityList',
  props: {
    hotCities: Array,
    cities: Object,
    letter: String
  },
  computed: {
    ...mapState(['city'])
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  },
  watch: {
    letter () {
      // console.log(this.$refs[this.letter][0])
      // better-scroll提供一个方法,可以跳转到指定元素位置
      // 必须为dom元素
      this.scroll.scrollToElement(this.$refs[this.letter][0])
    }
  },
  methods: {
    handleCityClick (city) {
    // 一般异步操作 使用dispatch 调用action
      // this.$store.dispatch('changeCity', city)
      this.$store.commit('changeCity', city)
      this.$router.push('/')
    }
  }
}
</script>

<style scoped lang="stylus">
  @import '~styles/variables.styl'
  .border-topbottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc
  .border-bottom
    &:before
      border-color: #ccc
  .active
    border-color:$bgColor !important
    color: $bgColor
  .list
  /* 设置 绝对定位 空出上面其他组件的高度，是本组件 高度为首屏剩余高度，不可拖拽，使用插件实现滚动，而不是依赖 浏览器默认的滚动条*/
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    .title
      height: .54rem
      line-height: .54rem
      background: #eee
      color: #666
      font-size: .26rem
      padding-left: .2rem
    .button-list
      padding: .1rem .6rem .1rem .1rem
      overflow: hidden
      .button-wrapper
        float: left
        width: 33.3%
        .button
          display: block
          text-align: center
          border: .02rem solid #ccc
          padding: .1rem 0
          border-radius: .06rem
          margin: .1rem
    .item-list
      .item
        padding-left: .2rem
        line-height: .76rem
        color: #666
</style>
