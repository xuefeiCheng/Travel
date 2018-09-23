<template>
  <div class='icons'>
    <div class='icon'>
      <div class='icon-img'>
        <img class='icon-img-content' src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"/>
      </div>
      <p class='icon-img-desc'>景点门票</p>
    </div>
    <div class='icon'>
      <div class='icon-img'>
        <img class='icon-img-content' src="http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png"/>
      </div>
      <p class='icon-img-desc'>景点门票</p>
    </div>
    <div class='icon'>
      <div class='icon-img'>
        <img class='icon-img-content' src="http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png"/>
      </div>
      <p class='icon-img-desc'>景点门票</p>
    </div>
    <div class='icon'>
      <div class='icon-img'>
        <img class='icon-img-content' src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"/>
      </div>
      <p class='icon-img-desc'>景点门票</p>
    </div>
    <div class='icon'>
      <div class='icon-img'>
        <img class='icon-img-content' src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"/>
      </div>
      <p class='icon-img-desc'>景点门票</p>
    </div>
    <div class='icon'>
      <div class='icon-img'>
        <img class='icon-img-content' src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"/>
      </div>
      <p class='icon-img-desc'>景点门票</p>
    </div>
    <div class='icon'>
      <div class='icon-img'>
        <img class='icon-img-content' src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"/>
      </div>
      <p class='icon-img-desc'>景点门票</p>
    </div>
    <div class='icon'>
      <div class='icon-img'>
        <img class='icon-img-content' src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"/>
      </div>
      <p class='icon-img-desc'>景点门票</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons'
}
</script>

<style scope lang="stylus">
@import '~styles/varibles.styl'
  .icons
    overflow: hidden
    height: 0
    padding-bottom: 50%
    .icon
      position: relative
      width: 25%
      height: 0
      padding-bottom: 25%
      float: left
      .icon-img
        position: absolute
        top: 0
        left: 0
        right: 0
        box-sizing: border-box
        padding: .1rem
        bottom: .44rem
        .icon-img-content
          display: block
          height: 100%
          margin: 0 auto
      .icon-img-desc
        position: absolute
        left: 0
        right: 0
        bottom: 0
        height: .44rem
        line-height: .44rem
        text-align: center
        color: $markTextColor
</style>
