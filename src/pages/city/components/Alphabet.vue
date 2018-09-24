<template>
  <ul class="list">
    <li class="item">a</li>
    <li class="item">b</li>
    <li class="item">c</li>
    <li class="item">d</li>
    <li class="item">e</li>
    <li class="item">f</li>
    <li class="item">g</li>
    <li class="item">h</li>
    <li class="item">i</li>
    <li class="item">j</li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet'
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
