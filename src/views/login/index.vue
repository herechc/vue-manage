<template>
  <div class="login_page fillcontain">
    <transition name="form-fade" mode="in-out" >
      <section class="form_contianer" v-show="showLogin">
        <div class="manage_tip">
          <p>buyone后台管理系统</p>
        </div>
        <el-form :model="listQuery" ref="loginForm">
          <el-form-item prop="name">
            <el-input placeholder="用户名" v-model="listQuery.name"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" placeholder="密码" v-model="listQuery.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" class="submit_btn" @click="login">登陆</el-button>
          </el-form-item>
        </el-form>
        <el-button type="text" @click="goSignupPage">注册</el-button>
      </section>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data() {
      return {
        listQuery: {
          name: '',
          password: ''
        },
        showLogin: false
      }
    },
    mounted() {
      this.showLogin = true
    },
    methods: {
      goSignupPage() {
        this.$router.push({path: '/signup'})
      },
      login() {
        this.$store.dispatch('Login', this.listQuery).then(_ => {
          console.log('登录')
          this.$router.push({path: '/'})
        }).catch(error => {
          console.log(error)
          this.$message.error(error.message)
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~styles/mixin';
  .login_page {
    background-color: #324057;
  }
  .manage_tip {
    position: absolute;
    width: 100%;
    top: -100px;
    left: 0;
    p {
      font-size: 34px;
      color: #fff;
    }
  }
  
  .form_contianer {
    @include wh(320px, 210px);
    @include ctp(320px, 210px);
    padding: 25px;
    border-radius: 5px;
    text-align: center;
    background-color: #fff;
    .submit_btn {
      width: 100%;
      font-size: 16px;
    }
  }
  
  .tip {
    font-size: 12px;
    color: red;
  }
  
  .form-fade-enter-active,
  .form-fade-leave-active {
    transition: all 1s;
  }
  
  .form-fade-enter,
  .form-fade-leave-active {
    transform: translate3d(0, -50px, 0);
    opacity: 0;
  }
</style>
