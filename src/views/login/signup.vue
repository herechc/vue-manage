<template>
  <div class="login_page fillcontain">
    <transition name="form-fade" mode="in-out" >
      <section class="form_contianer" v-show="showLogin">
        <div class="manage_tip">
          <p>buyone后台管理系统</p>
        </div>
        <el-form :model="listQuery" ref="loginForm">
          <el-form-item prop="username">
            <el-input placeholder="用户名" v-model="listQuery.name"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" v-model="listQuery.password" placeholder="密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" class="submit_btn" @click="signup">注册</el-button>
          </el-form-item>
        </el-form>
        
      </section>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data() {
      return {
        // 参数
        listQuery: {
          name: '',
          password: ''
        },
        // 显示控制
        showLogin: false
      }
    },
    mounted() {
      this.showLogin = true
    },
    methods: {
      signup() {
        this.$api.signup(this.listQuery).then(res => {
          const data = res.data
          if (data.code === 1) {
            this.$message({
              message: '注册成功',
              type: 'success',
              onClose: _ => {
                this.$router.push('/login')
              }
            })
          } else {
            this.$message.error(data.message)
          }
        }).catch(err => {
          this.$message.error(err.message)
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
