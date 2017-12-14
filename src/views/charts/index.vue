<template>
  <div class="container">
    <div class='chart-container'>
      <chart height='100%' width='100%'></chart>
    </div>
  </div>
</template>
<script>
  import chart from '@/components/charts/index'
  export default {
    name: 'charts',
    components: { chart }
  }
</script>
<style lang="scss" scoped>
.chart-container{
  height:90vh
}
</style>
