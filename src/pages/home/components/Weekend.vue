<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li
        class="item border-bottom"
        v-for="item of list"
        :key="item.id"
      >
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  }
}
</script>

<style scoped lang="stylus">
  @import '~styles/mixins.styl'
  .title
    text-indent: .2rem
    background-color: #eee
    line-height: .8rem
  .item
    overflow: hidden
    .item-img-wrapper
      height: 0
      padding-bottom: 37.1%
      .item-img
        width:100%
    .item-info
      padding: .1rem
      .item-title
        height: .54rem
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      .item-desc
        height: .4rem
        line-height: .4rem
        color: #ccc
        ellipsis()
</style>
