<template>
  <div>
    <el-row>
      <el-col :span="20">
        <el-input v-model="form.param" placeholder="请输入搜索内容"></el-input>
      </el-col>
      <el-col :span="3" :offset="1">
        <el-button type="primary" @click="search">搜索</el-button>
      </el-col>
    </el-row>
    <div class="ques-list">
      <div class="ques-wrap" v-for='(item,i) in quesList' :key="i">
        <el-row>
          <span>{{item.ques}}</span>
        </el-row>
        <el-row>
          <span>{{item.answer}}</span>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
import request from "@/common/request.js";
export default {
  data() {
    return {
      form:{
        param:""
      },

      quesList: [
        { ques:"这是问题1的题干",answer:"这是问题一的答案"},
      ]
    }
  },
  methods: {
    search() {
      request.request("/rb-question-bank/query-qb-list",this.form).then((res) => {
        console.log(res)
      })
    }
  }
}
</script>
<style scoped>
.ques-list {
  margin-top: 2vh;
  height:83vh;
  overflow-y: auto;
  padding: 10px 5px;
}
.ques-wrap {
  border: 1px solid black;
}
</style>