<template>
  <div class="son-home">
    <div id="echarts" ref="echarts"></div>
  </div>
</template>
<script>
export default {
  name: 'SonHome',
  data () {
    return {
      chart: null
    }
  },
  methods: {
    echarts () {
      this.chart = this.$echarts.init(this.$refs.echarts)
      this.chart.setOption({
        title: {
          text: '某站点用户访问来源',
          subtext: '纯属虚构',
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
              {value: 335, name: '直接访问'},
              {value: 310, name: '邮件营销'},
              {value: 234, name: '联盟广告'},
              {value: 135, name: '视频广告'},
              {value: 1548, name: '搜索引擎'}
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      })
    },
    getData () {
      this.$axios.get('/123').then((item) => {
        console.log(item)
      })
    }
  },
  mounted () {
    this.echarts()
  },
  created () {
    this.getData()
  }
}
</script>
<style lang="scss">
.son-home{
  #echarts{
    width: 500px;
    height: 500px;
  }
}
</style>
