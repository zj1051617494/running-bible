<template>
  <div>
    <el-row class="top-title">环境温度下对应的转机温度</el-row>
    <el-row>
      <el-form :model="form" ref="form">
        <el-form-item label="环境温度：" prop="temp">
          <el-select
            v-model="form.temp"
            class="select-input"
            @change="queryImg"
            :disabled="loading"
          >
            <el-option
              v-for="(item, i) in tempOptionsList"
              :key="i"
              :value="item.value"
              >{{ item.label }}</el-option
            >
          </el-select>
          ℃
        </el-form-item>
      </el-form>
    </el-row>
    <el-divider content-position="left">查询结果</el-divider>
    <div class="img-container" v-loading="loading">
      <el-row
        v-for="(item, i) in imgSrcList"
        :key="i"
        style="margin-bottom: 15px"
      >
        <span class="img-name">{{ item.img_name }}</span>：
        <img :src="item.img_src" alt="" style="width: 100%" />
      </el-row>
    </div>
  </div>
</template>
<script>
import { isEmpty } from "lodash";
import request from "@/common/request.js";
export default {
  name: "pics",
  data() {
    return {
      form: {
        temp: "",
      },
      loading:false,
      tempOptionsList: [
        { label: "35", value: "t1" },
        { label: "40", value: "40" },
        { label: "45", value: "45" },
        { label: "50", value: "50" },
      ],

      imgSrcList: [
      ],
    };
  },
  methods: {
    queryImg() {
      this.loading = true;
      request.request("/image/loading-img-list",{}, this.form).then((res) => {
        if (isEmpty(res.data)) {
          this.imgSrcList = [];
          this.loading = false
          return;
        }
        this.imgSrcList = res.data;
        this.loading = false
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
.select-input {
  width: 100px;
}
.img-name {
  color: rgb(64, 158, 255);
}
.img-container {
  width: 100%;
  height: 70vh;
  overflow-y: auto;
}
</style>
