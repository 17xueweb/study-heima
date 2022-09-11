<template>
  <div id="app">
    <el-card class="login-card">
      <!-- 放置表单 -->
      <el-form ref="loginForm" :model="loginForm" :rules="loginRules" style="margin-top: 50px;">
        <!-- 表单项 -->
        <el-form-item prop="mobile">
          <!-- 输入框 -->
          <el-input placeholder="请输入您的手机号" v-model="loginForm.mobile"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input placeholder="请输入您的密码" v-model="loginForm.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="login" style="width: 100%;" type="primary">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    const checkMobile = function(rule, value, callback) {
      // 校验的是value
      // 第三位必须是9
      value.charAt(2) === '9' ? callback() : callback(new Error('手机号第三位必须是9'))
    }
    return {
      loginForm: {
        // 检验的字段
        mobile: '',
        password: ''
      },
      // 校验规则
      // { key: value}
      loginRules: {
        mobile: [
          { required: true, message: '手机号不能为空', trigger: 'blur'},
          { message: '手机号格式不正确',
            pattern: /^1[3-9]\d{9}$/,
            trigger: 'blur'
          },// 校验手机号 
          {
            trigger: 'blur',
            validator: checkMobile
          }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur'},
          {
            message: '密码长度为6-16位',
            min: 6, 
            max: 16,
            trigger: 'blur'
          }
        ]
      }
    }
  },
  components: {
  },
  methods: {
    login() {
      // this.$refs.loginForm.validate(isOk => {
      //   if(isOk) {
      //     // 表示检验通过
      //     console.log('检验通过') // 去做接下来的业务
      //   }
      // })

      // .then是成功校验  .catch 是失败校验
      this.$refs.loginForm.validate().then(() => {
        console.log('成功');
      }).catch(() => {
        console.log('失败');
      })
    }
  }
}
</script>

<style>
  #app {
    width: 100%;
    height: 100vh;
    background-color: pink;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .login-card {
    width: 440px;
    height: 300px;
  }
</style>
