<template>
  <div>
    <div class="search">
      <input
        class="search-input"
        type="text"
        placeholder="输入城市名或拼音"
        v-model="keyword"
      />
    </div>
    <div class="search-list" ref="search" v-show='keyword'>
      <ul>
        <li
          class="search-item border-bottom"
          v-for="item of list"
          :key="item.id"
        >
          {{item.name}}
        </li>
        <li class="search-item border-bottom" v-show='hasData'>未查询到有效数控</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CitySearch',
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  props: {
    cities: Object
  },
  computed: {
    hasData () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.search)
  }
}
</script>

<style scoped lang="stylus">
  @import '~styles/variables.styl'
  .search
    height: .72rem
    background-color: $bgColor
    padding: 0 .1rem
    .search-input
      box-sizing: border-box
      width: 100%
      text-align: center
      color: #666
      border-radius: .06rem
      height: .62rem
      line-height: .62rem
      padding: 0 .1rem
  .search-list
    overflow: hidden
    position: absolute
    z-index: 1
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    background: #ccc
    .search-item
      line-height: .62rem
      color: #666
      background: #fff
      padding-left: .2rem
</style>
