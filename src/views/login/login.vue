
<template>
    <div class="login-container">
      <!-- '.native' 修饰符在vue3中被弃用 使用 .enter 代替 -->
      <!-- status-icon -->
        <el-form  
          ref="loginForm" 
          :model="loginForm" 
          :rules="loginRules"
          
          class="login-form" 
          @keyup.enter="handleLogin"
        >
            <div class="title-container">
              <div class="title">样本信息管理系统</div>
            </div>
            <!-- <div> {{ $store.state.count }} </div> -->
            <!-- prop = "username" 绑定校验规则 -->
            <!-- prop 需要与 v-model 同名 -->
            <el-form-item prop="username1">
              <!-- ref="username" -->
              <el-input
                placeholder="用户名"
                v-model="loginForm.username1"
                name="username"
                type="text"
                tabindex="1"
                auto-complete="off"
              />
            </el-form-item>
            <el-form-item prop="password">
              <!-- ref="password" -->
              <el-input
                placeholder="密码"
                v-model="loginForm.password"
                name="password"
                type="password"
                tabindex="2"
                auto-complete="off"
              />
            </el-form-item>
            <el-row>
              <el-col :span="12">
                <el-form-item prop="captcha">
                   <!-- ref="captcha" -->
                  <el-input
                    placeholder="验证码"
                    v-model="loginForm.captcha"
                    name="captcha"
                    type="text"
                    tabindex="3"
                    auto-complete="off"
                  />
                </el-form-item>
              </el-col>
              <el-col :span="12"><img :src="captchaImage" @click="reloadCaptcha()"></el-col>
            </el-row>
            <el-button @click="handleLogin()">登录</el-button>
            <el-button @click="reset()">重置</el-button>
        </el-form>
    </div>
</template>

<script>
import { getCaptchaImage } from '@/api/user';

export default {
  name: 'login',
  data(){
    const validatorUsername = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请输入用户名'))
      }else {
        callback()
      }
    }
    const validatorPassword = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请输入密码'))
      }else {
        callback()
      }
    }
    const validatorCaptcha = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请输入验证码'))
      }else {
        callback()
      }
    }
    return {
      captchaImage: '',
      loginForm: {
        username1: '',
        password: '',
        captcha: ''
      },
      loginRules: {
        username1: [{trigger: 'blur', validator: validatorUsername}],
        password: [{trigger: 'blur', validator: validatorPassword}],
        captcha: [{trigger: 'blur', validator: validatorCaptcha}]
      }
    }
  },
  mounted() {
    this.getCaptchaImg();
  },
  methods: {
    async getCaptchaImg() {
      const res =  await getCaptchaImage();
      this.captchaImage = res.data.data.image
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.$router.push({path: '/index'})
        }
      })
    },
    reset() {
      this.$refs.loginForm.resetFields()
    }
  }
}
</script>

<style>
.login-container{position:relative;width: 100%; height: 100%;min-height: 300px;background-image: url('../../assets/images/login_bg.png');background-size:cover;background-position:center;}
.title{color: white;}
.login-form{position:absolute; top: 50%; left:50%; transform: translate(-50%, -50%); margin: 0 auto;width: 450px; }
</style>