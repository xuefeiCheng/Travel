<template>
  <ul class="list">
    <li
      class="item"
      v-for="item of letters"
      :key="item"
      :ref="item"
      @click="handleLetterClick"
      @touchstart.prevent="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >
      {{item}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  data () {
    return {
      startStatus: false,
      startY: 0,
      timer: null
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  computed: {
    // 本组件只需要 字母表，故将对象 后期处理为数组
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  methods: {
    handleLetterClick (event) {
      this.$emit('change', event.target.innerText)
    },
    handleTouchStart () {
      this.startStatus = true
    },
    handleTouchMove (e) {
      // 手指触碰到结束 整个移动过程 实现 向父组件传递 letter ，同时父组件传递给list组件，实现动态滚动
      if (this.startStatus) {
      // 截流 提升性能
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const variablesY = e.touches[0].clientY - 79
          const letterIndex = Math.floor((variablesY - this.startY) / 20)
          // console.log(this.letters[letterIndex])
          if (letterIndex >= 0 && letterIndex < this.letters.length) {
            this.$emit('change', this.letters[letterIndex])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.startStatus = false
    }
  }
}
</script>

<style scoped lang="stylus">
  @import '~styles/variables.styl'
  .list
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    top: 1.58rem
    right: 0
    bottom: 0
    width: .4rem
    .item
      text-align: center
      line-height: .4rem
      color: $bgColor
</style>
