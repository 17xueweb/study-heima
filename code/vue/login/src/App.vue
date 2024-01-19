<template>
  <div id="app">
    <el-card class="login-card">
      <!-- 放置表单 -->
      <el-form
        ref="loginForm"
        :model="loginForm"
        :rules="loginRules"
        style="margin-top: 50px"
      >
        <!-- 表单项 -->
        <el-form-item prop="mobile">
          <!-- 输入框 -->
          <el-input
            placeholder="请输入您的手机号"
            v-model="loginForm.mobile"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            placeholder="请输入您的密码"
            v-model="loginForm.password"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="login" style="width: 100%" type="primary"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
      <el-button type="primary" @click="test">测试async </el-button>
      <el-button type="primary" @click="test1">测试async1</el-button>
      <el-button type="primary" @click="getCatch">捕获异常</el-button>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    const checkMobile = function (rule, value, callback) {
      // 校验的是value
      // 第三位必须是9
      value.charAt(2) === "9"
        ? callback()
        : callback(new Error("手机号第三位必须是9"));
    };
    return {
      loginForm: {
        // 检验的字段
        mobile: "",
        password: "",
      },
      // 校验规则
      // { key: value}
      loginRules: {
        mobile: [
          { required: true, message: "手机号不能为空", trigger: "blur" },
          {
            message: "手机号格式不正确",
            pattern: /^1[3-9]\d{9}$/,
            trigger: "blur",
          }, // 校验手机号
          {
            trigger: "blur",
            validator: checkMobile,
          },
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          {
            message: "密码长度为6-16位",
            min: 6,
            max: 16,
            trigger: "blur",
          },
        ],
      },
    };
  },
  components: {},
  methods: {
    login() {
      // this.$refs.loginForm.validate(isOk => {
      //   if(isOk) {
      //     // 表示检验通过
      //     console.log('检验通过') // 去做接下来的业务
      //   }
      // })

      // .then是成功校验  .catch 是失败校验
      this.$refs.loginForm
        .validate()
        .then(() => {
          console.log("成功");
        })
        .catch(() => {
          console.log("失败");
        });
    },
    // async 表示该函数为异步函数
    async test() {
      // await 后面跟上promise对象， 总是会等到promise对象 resolve结束之后 接收它的结果 执行下面的逻辑
      // await 必须和async配合使用 必须在await的父级函数的位置 标记一个async
      const result = await new Promise(function (resolve) {
        // 5秒之后执行resolve
        setTimeout(function () {
          resolve(100);
        }, 5000); // 换成50000000000都会等待，一直等待会造成页面整个线程死锁，因为js是单线程，所以必须将函数标记为async（异步的），不会阻塞别的方法执行
      });

      alert(result);
    },
    // 需求：如果需要先弹出100，再弹出1234，那么就在this.test()前加上await 进行强制等待
    //      - 如果去掉await 肯定是先弹出1234 再弹出100
    async test1() {
      await this.test(); // 标记async的方法是 异步方法
      // 异步方法不会阻塞其他逻辑执行,1234可以执行
      alert(1234); // 先执行1234 再执行100 因为test()方法被标记为异步方法
    },
    async getCatch() {
      // promise可以通过catch捕获异常 await 只会等到resolve 不会等到reject，需要用到try catch
      try {
        const result = await new Promise(function (resolve, reject) {
          reject("失败了");
        });
        alert(result);
      } catch (error) {
        alert(error);
      }
    },
  },
};
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
