<template>
  <div>
    <div class="title">热门推荐</div>
    <ul>
      <router-link
        tag="li"
        class="item border-bottom"
        v-for="item of list"
        :key="item.id"
        :to="'/detail/' + item.id"
      >
        <img class="item-img" :src="item.imgUrl" />
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  }
}
</script>

<style scoped lang="stylus">
  @import '~styles/mixins.styl'
  .title
    margin-top: .2rem
    text-indent: .2rem
    background-color: #eee
    line-height: .8rem
  .item
    display: flex
    overflow: hidden
    height: 1.9rem
    .item-img
      height: 1.9rem
      width: 1.9rem
      padding: .1rem
    .item-info
      flex: 1
      padding: .1rem
      min-width: 0
      .item-title
        height: .64rem
        line-height: .64rem
        font-size: .32rem
        ellipsis()
      .item-desc
        height: .42rem
        line-height: .42rem
        color: #ccc
        ellipsis()
      .item-button
        line-height: .44rem
        margin-top: .16rem
        padding:0 .2rem
        border-radius: .06rem
        background-color: #ff9300
</style>
