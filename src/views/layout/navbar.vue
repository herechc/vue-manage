<template>
  <div class="navbar-container">
    <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: item.path }" v-for="item in breadlist" :key="item.key">{{item.name || item}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script>
  export default {
    name: 'navbar',
    data () {
      return {
        breadlist: null
      }
    },
    mounted () {
      this.getBreadCrumb()
    },
    methods: {
      getBreadCrumb () {
        let matched = this.$route.matched.map(item => item.name)
        if (matched.length > 0 && matched[0] !== '首页') {
          this.breadlist = [{ name: '首页', path: '/' }].concat(matched)
        }
      }
    },
    watch: {
      $route () {
        this.getBreadCrumb()
      }
    }
  }
</script>
<style lang="scss" scpoed>
.navbar-container{
  display: flex;
  height:60px;
  justify-content:space-between;
  background:#EFF2F7;
  align-items:center;
  padding-left:20px;
}
</style>

