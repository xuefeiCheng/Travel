<template>
  <div class='header'>
    <div class='header-left'>
      <div class='iconfont back-icon'>&#xe624;</div>
    </div>
    <div class='header-input'>
      <span class='iconfont'>&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <div class='header-right'>
      城市
      <span class='iconfont arrow-icon'>&#xe64a;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- 设计稿给的是2x尺寸 1rem=html font-size 50px-->
<!-- 高度为86px 1倍图高度应为43px 43/50=86/100=0.86rem-->
<style scoped lang="stylus">
  /* @import '~@/assets/styles/varibles.styl' */
  @import '~styles/varibles.styl'
  .header
    display: flex
    height: .86rem
    background: $bgColor
    color: #fff
    line-height: .86rem
    .header-left
      width: .64rem
      float: left
      .back-icon
        font-size: .4rem
        text-align: center
    .header-input
      flex: 1
      height: .64rem
      line-height: .64rem
      margin-top: .12rem
      margin-left: .2rem
      padding-left: .2rem
      background: #fff
      border-radius: .1rem
      color: #ccc
    .header-right
      width: 1.24rem
      float: right
      text-align: center
      .arrow-icon
        font-size: .24rem
        margin-left: -.04rem
</style>
