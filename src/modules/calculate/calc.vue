<template>
  <div>
    <el-row class="top-title">公式计算</el-row>
    <el-row class="param-row">
      <span>T0给定大气绝对温度</span>
      <el-input style="width: 120px" v-model="form.T0给定大气绝对温度"></el-input>
    </el-row>
  </div>
</template>
<script>
import request from '@/common/request';
export default {
  name: "calc",
  data() {
    return {
      form: {
        //计算1
        "T0给定大气绝对温度": "",
        "P0给定大气绝对压力": "",
        "t试验连续时间": "",
        "p1开始氢压":"",
        "p2结束氢压":"",
        "B当地绝对压力":"",
        "t1试验开始平均温度":"",
        "t2试验结束平均温度":"",
        // 计算2
        "P氢压MPA":"",
        "q氢测密封油回油量":"",
        "V0溶解率":"",

      },

      "L1(M3/d)总泄露量":"",
      "Qh溶解量":"",
      "result3":"",
    };
  },
  mounted() {
    request.request("/variable/query-variable-list",{
      
    }).then((res) =>{
      console.log(res)
    })
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

.param-row {
  display: flex;
  /* flex-direction: r; */
  justify-content: space-between;
}
</style>
