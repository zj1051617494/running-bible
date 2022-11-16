<template>
  <div>
    <el-row class="top-title">题库搜索</el-row>
    <el-row>
      <el-col :span="20">
        <el-input
          v-model="form.content"
          placeholder="请输入搜索内容"
          class="serch-input"
        ></el-input>
      </el-col>
      <el-col :span="3" :offset="1">
        <el-button type="primary" @click="search">搜索</el-button>
      </el-col>
    </el-row>
    <el-divider content-position="left">查询结果</el-divider>
    <div class="ques-list" v-if="!emptyRes">
      <div class="ques-wrap" v-for="(item, i) in quesList" :key="i">
        <el-row>
          <span class="content">{{ item.content }}</span>
        </el-row>
        <el-row>
          <span class="answer">{{ item.answer }}</span>
        </el-row>
      </div>
    </div>
    <div class="ques-list empty-res" v-else>无相关题目</div>
  </div>
</template>
<script>
import { isEmpty } from "lodash";
import request from "@/common/request.js";
export default {
  data() {
    return {
      form: {
        content: "",
      },
      emptyRes: true,
      quesList: [],
    };
  },
  methods: {
    search() {
      if (isEmpty(this.form.content)) {
        return;
      }
      request
        .request("/rb-question-bank/query-qb-list", this.form)
        .then((res) => {
          console.log(res);
          if (isEmpty(res.data)) {
            this.emptyRes = true;
            this.quesList = [];
            return;
          }
          this.emptyRes = false;
          this.quesList = res.data;
        });
    },
  },
};
</script>
<style scoped>
.top-title {
  height: 25px;
  line-height: 25px;
  text-align: center;
  background: rgb(64, 158, 255);
  margin-bottom: 10px;
}
.ques-list {
  margin-top: 2vh;
  height: 83vh;
  overflow-y: auto;
  padding: 10px 5px;
}
.ques-wrap {
  border-top: 1px solid gray;
  margin-bottom: 10px;
}
.empty-res {
  line-height: 83vh;
  text-align: center;
}
.content {
  color: blue;
}
.search-input {
  -webkit-appearance: none;
}
</style>
