<template>
  <swiper :options="swiperOption" class='wrapper'>
    <swiper-slide v-for='item of swiperList' :key='item.id'>
      <img class='swiper-img' :src='item.imgUrl'/>
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 3000
      },
      swiperList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1609/93/21c8367ac43c4f02.jpg_750x200_2db582a3.jpg'
      },
      {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1809/f0/b39b64c33a62e002.jpg_750x200_3e961ce7.jpg'
      }]
    }
  }
}
</script>

<style scoped lang="stylus">
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff !important
  .wrapper
    width: 100%
    height: 0
    overflow: hidden
    padding-bottom: 26.7%
    background: #ccc
    .swiper-img
      width: 100%
</style>
