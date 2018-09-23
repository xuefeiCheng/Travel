<template>
  <div>
    <div class="title">热门推荐</div>
    <ul>
      <li
        class="item border-bottom"
        v-for="item of recommendList"
        :key="item.id"
      >
        <img class="item-img" :src="item.imgUrl" />
        <div class="item-info">
          <p class="item-title">{{item.itemTitle}}</p>
          <p class="item-desc">{{item.itemDesc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1707/a3/a3924161475dee37a3.img.jpg_200x200_5ba00364.jpg',
        itemTitle: '青岛海昌极地海洋世界',
        itemDesc: '龙马精神与自然山水和温泉养生文化相结合'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/201302/05/90f3de9e0f7ab800c8d65eac.jpg_200x200_b1122e44.jpg',
        itemTitle: '奥帆中心',
        itemDesc: '龙马精神与自然山水和温泉养生文化相结合'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/201302/05/90f3de9e0f7ab800c8d65eac.jpg_200x200_b1122e44.jpg',
        itemTitle: '青岛海昌极地海洋世界',
        itemDesc: '龙马精神与自然山水和温泉养生文化相结合'
      }]
    }
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
