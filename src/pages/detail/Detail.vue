<template>
  <div>
    <detail-banner :data="data"></detail-banner>
    <detail-header :sightName="sightName"></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'
export default{
  name: 'Detail',
  data () {
    return {
      list: [],
      data: {},
      sightName: ''
    }
  },
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  mounted () {
    this.getInfo()
  },
  methods: {
    getInfo () {
      // axios.get('/api/detail.json?id=' + this.$route.params.id)
      axios.get('/api/detail.json', {
        params: this.$route.params.id
      })
        .then(this.getInfoSucc)
    },
    getInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.list = data.categoryList
        this.data = data
        this.sightName = data.sightName
      }
    }
  }
}
</script>

<style scoped lang="stylus">
  .content
    height: 50rem
</style>
