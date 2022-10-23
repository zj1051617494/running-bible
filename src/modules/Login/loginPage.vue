<template>
  <div class="login-wrap">
    <div class="login-form">
      <el-row class="form-row" style="height: 10vh">
        <span style='font-size: 25px; font-weight: 600;'>运行宝典</span>
      </el-row>
      <el-form v-model="form">
        <el-row class='form-row'>
          <el-input v-model="form.account" placeholder="请输入账号" class="form-input"></el-input>
        </el-row>
        <el-row class="form-row">
          <el-input v-model="form.password" placeholder="请输入密码" type="password" class="form-input"></el-input>
        </el-row>
        <el-row class="form-row" style="margin-top: 15px">
            <el-button type="primary" style="display: inline" @click="login">登录</el-button>
            <el-button type="info" style="display: inline" @click="signUp">注册</el-button>
        </el-row>
      </el-form>
      <el-dialog  :visible.sync="dialogVisible" width="30%" :modal="false" top="20px" custom-class="dialog">
        <span>请联系管理员:(微信)</span>
        <span id="wechat">xtmoon116</span>
        <el-button @click="copy">点我复制</el-button>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>
<script>
import { setLocalStorage } from "@/common/localStorage.js";
import request from "@/common/request.js";
import { mapGetters } from"vuex";
export default {
  data() {
    return {
      name: 'login',
      form:{
        account: "",
        password: ""
      },
      dialogVisible:false
    }
  },
  methods:{
    login() {
      console.log("登录")
      request.request("/run-bible-login/login",{ userName: this.form.account, password: this.form.password }).then((res) => {

        console.log(res)
        if(res.success) {
          setLocalStorage("accountToken", res.data);
          this.$store.commit("account/initAccount",{ account: this.form.account })
          console.log(this.accountInfo)
          this.$router.push("/question")
        } else {
          this.$message.warning(res.message)
        }
        
      });
      
    }, 
    signUp() {
      this.dialogVisible = true
    },
    copy(){}
  },
  computed:{
    ...mapGetters({
      accountInfo:"account/getAccountInfo"
    })
  },  
  mounted() {
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
.form-input {
  width: 12vw;
  margin: 15px
}

/* 对手机端做适配 */
@media screen and (max-width : 425px) {
  .login-wrap {
    width: 100vw;
    height: 800px;
    background: url("../../assets/img/bg.jpg") center no-repeat;
    background-size: auto;
  }
  .login-form {
    width:88vw;
    height: 35vh;
  }
  .form-input {
    width: 60vw;
  }
  .dialog {
    width: 80vw;
  }
}
</style>