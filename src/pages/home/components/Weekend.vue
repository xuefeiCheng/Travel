<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li
        class="item border-bottom"
        v-for="item of recommendList"
        :key="item.id"
      >
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.itemTitle}}</p>
          <p class="item-desc">{{item.itemDesc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/85/708da4ab8dba17.jpg_r_640x214_d3d8cfa5.jpg',
        itemTitle: '青岛海昌极地海洋世界',
        itemDesc: '龙马精神与自然山水和温泉养生文化相结合'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/85/708da4ab8dba17.jpg_r_640x214_d3d8cfa5.jpg',
        itemTitle: '奥帆中心',
        itemDesc: '龙马精神与自然山水和温泉养生文化相结合'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/85/708da4ab8dba17.jpg_r_640x214_d3d8cfa5.jpg',
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
