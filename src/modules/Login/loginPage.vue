<template>
  <div class="login-wrap">
    <div class="login-form">
      <el-row class="form-row" style="height: 10vh">
        <span style='font-size: 25px; font-weight: 600;'>运行宝典</span>
      </el-row>
      <el-form v-model="form">
        <el-row class='form-row'>
          <el-input v-model="form.account" placeholder="请输入账号" style="width:12vw; margin: 15px"></el-input>
        </el-row>
        <el-row class="form-row">
          <el-input v-model="form.password" placeholder="请输入密码" type="password" style="width: 12vw; margin: 15px"></el-input>
        </el-row>
        <el-row class="form-row" style="margin-top: 15px">
            <el-button type="primary" style="display: inline">登录</el-button>
            <el-button type="info" style="display: inline">注册</el-button>
        </el-row>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: 'login',
      form:{
        account: "",
        password: ""
      }
    }
  },
  methods:{
    login() {
      console.log("登录")
    }
  }
}
</script>

<style scoped>
.login-wrap {
  width: 75vw;
  height: 55vh;
  background: url("../../assets/img/bg.jpg") center no-repeat;
  background-size: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-form{
  width: 35vw;
  height: 35vh;
  background: #cecece;
  opacity: 0.9;
  border-radius: 50px;
}
.form-row {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>