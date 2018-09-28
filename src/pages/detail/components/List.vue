<template>
  <div>
    <div
      class="item-title border-bottom"
      v-for="(item, index) of list"
      :key="index"
    >
      <span class="item-title-icon"></span>
      {{item.title}}
      <div
        class="item-children"
        v-if="item.children"
      >
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>

<style scoped lang="stylus">
  .item-title
    line-height: .8rem
    padding: 0 .2rem
    font-size: .32rem
    .item-title-icon
      display: inline-block
      position: relative
      top: .06rem
      left: .1rem
      width: .36rem
      height: .36rem
      background: url(https://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
      margin-right: .1rem
      background-size: .4rem 3rem
</style>
