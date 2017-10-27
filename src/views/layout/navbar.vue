<template>
  <div class="navbar-container">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: item.path }" v-for="item in breadlist" :key="item.key">{{item.name || item}}</el-breadcrumb-item>
    </el-breadcrumb>
    <el-dropdown class="avatar-container">
      <div class="avatar-wrapper">
        <img src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80" alt="">
        <i class="el-icon-caret-bottom"></i>
      </div>
      <el-dropdown-menu class="user-dropdown" slot="dropdown">
        <router-link to="/">
          <el-dropdown-item>首页</el-dropdown-item>
        </router-link>
        <el-dropdown-item>
          <span @click="logout">退出登录</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
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
      },
      logout() {
        this.$store.dispatch('LogOut').then(_ => {
          location.reload()// 为了重新实例化vue-router对象 避免bug
        })
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
.avatar-container{
  margin-right:15px;
  .avatar-wrapper{
    cursor:pointer;
    img{
      width:40px;
      height:40px;
    }
  }
}
</style>

