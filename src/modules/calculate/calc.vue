<template>
  <div>
    <el-row class="top-title">公式计算</el-row>

    <el-row style="display: flex; justify-content: center">
      <span>计算1</span>
    </el-row>
    <el-row class="param-row">
      <el-col :span="16">
      <span>{{ form.VAR_001.lable }}</span>
      </el-col>
      <el-col :span="8">
      <el-input type="number" style="width: 120px" v-model.number="form.VAR_001.value" readonly></el-input>
      </el-col>
      
    </el-row>
    <el-row class="param-row">
      <el-col :span="16"><span>{{ form.VAR_002.lable }}</span></el-col>
      <el-col :span="8"><el-input type="number" style="width: 120px" v-model.number="form.VAR_002.value" readonly></el-input></el-col>
    </el-row>
    <el-row class="param-row">
      <el-col :span="16"><span>{{ form.VAR_003.lable }}</span></el-col>
      <el-col :span="8"><el-input type="number" style="width: 120px" v-model.number="form.VAR_003.value" ></el-input></el-col>
    </el-row>
    <el-row class="param-row">
      <el-col :span="16"><span>{{ form.VAR_004.lable }}</span></el-col>
      <el-col :span="8"><el-input type="number" style="width: 120px" v-model.number="form.VAR_004.value"></el-input></el-col>
    </el-row>
    <el-row class="param-row">
      <el-col :span="16"><span>{{ form.VAR_005.lable }}</span></el-col>
      <el-col :span="8"><el-input type="number" style="width: 120px" v-model.number="form.VAR_005.value"></el-input></el-col>
    </el-row>
    <el-row class="param-row">
      <el-col :span="16"><span>{{ form.VAR_006.lable }}</span></el-col>
      <el-col :span="8"><el-input type="number" style="width: 120px" v-model.number="form.VAR_006.value" readonly></el-input></el-col>
    </el-row>
    <el-row class="param-row">
      <el-col :span="16"><span>{{ form.VAR_007.lable }}</span></el-col>
      <el-col :span="8"><el-input type="number" style="width: 120px" v-model.number="form.VAR_007.value"></el-input></el-col>
    </el-row>
    <el-row class="param-row">
      <el-col :span="16"><span>{{ form.VAR_008.lable }}</span></el-col>
      <el-col :span="8"><el-input type="number" style="width: 120px" v-model.number="form.VAR_008.value"></el-input></el-col>
    </el-row>
    <!-- 结果1 -->
    <el-row class="result-row">
      <el-col :span="16">
        <el-button type="primary" @click="calc1">{{ form.result1.lable }}</el-button>
      </el-col>
      <el-col :span="8">
        <el-input type="number" style="width: 120px" v-model.number="form.result1.value"></el-input>
      </el-col>
    </el-row>


    <!-- 计算2 -->
    <el-row style="display: flex; justify-content: center">
      <span>计算2</span>
    </el-row>
    <el-row class="param-row">
      <el-col :span="16"><span>{{ form.VAR_009.lable }}</span></el-col>
      <el-col :span="8"><el-input type="number" style="width: 120px" v-model.number="form.VAR_009.value"></el-input></el-col>
    </el-row>
    <el-row class="param-row">
      <el-col :span="16"><span>{{ form.VAR_010.lable }}</span></el-col>
      <el-col :span="8"><el-input type="number" style="width: 120px" v-model.number="form.VAR_010.value" readonly></el-input></el-col>
    </el-row>
    <el-row class="param-row">
      <el-col :span="16"><span>{{ form.VAR_011.lable }}</span></el-col>
      <el-col :span="8"><el-input type="number" style="width: 120px" v-model.number="form.VAR_011.value" readonly></el-input></el-col>
    </el-row>

    <!-- 结果2 -->
    <el-row class="result-row">
      <el-col :span="16">
        <el-button type="primary" @click="calc2">{{ form.result2.lable }}</el-button>
      </el-col>
      <el-col :span="8">
        <el-input type="number" style="width: 120px" v-model.number="form.result2.value"></el-input>
      </el-col>
    </el-row>

    <!-- 计算3 -->
    <el-row style="display: flex; justify-content: center">
      <span>计算3</span>
    </el-row>
    <!-- 结果3 -->
    <el-row class="result-row">
      <el-col :span="16">
        <el-button type="primary" @click="calc3">{{ form.result3.lable }}</el-button>
      </el-col>
      <el-col :span="8">
        <el-input type="number" style="width: 120px" v-model.number="form.result3.value"></el-input>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import _ from 'lodash';
export default {
  name: "calc",
  data() {
    return {  
      form: {
        VAR_001:{
          lable:"T0给定大气绝对温度",
          value:293
        },
        VAR_002:{
          lable:"P0给定大气绝对压力",
          value:0.1
        },
        VAR_003:{
          lable:"t试验连续时间",
          value:undefined
        },
        VAR_004:{
          lable:"p1开始氢压",
          value:undefined
        },
        VAR_005:{
          lable:"p2结束氢压",
          value:undefined
        },
        VAR_006:{
          lable: "B当地绝对压力",
          value:0.0986
        },
        VAR_007:{
          lable:"t1试验开始平均温度",
          value:undefined
        },
        VAR_008:{
          lable:"t2试验结束平均温度",
          value:undefined
        },

        // 计算2
        VAR_009:{
          lable:"P氢压MPA",
          value:undefined
        },
        VAR_010:{
          lable:"q氢测密封油回油量",
          value:9.4
        },
        VAR_011:{
          lable:"V0溶解率",
          value:0.1134
        },


        result1:{
          lable:"L1(M3/d)总泄露量",
          value:undefined,
        },
        result2:{
          lable:"Qh溶解量",
          value:undefined,
        },
        result3:{
          lable:"L2((M3/d))计算泄漏量",
          value:undefined,
        },

      },
    };
  },
  methods: {
    calc1() {   
      // 计算1
      let params = [this.form.VAR_003.value,this.form.VAR_004.value,this.form.VAR_005.value,this.form.VAR_007.value,this.form.VAR_008.value]
      console.log(params)
      if(this.$_.some(params,(param)=> {
        return param === null|| param === ''||param === undefined;
      })){
        this.$message.warning("条件不能为空！")
      }else {
        // 计算1规则
        let step1 = 115 * this.form.VAR_001.value / this.form.VAR_002.value * 24 / this.form.VAR_003.value 
        console.log(step1,"这是结果1",typeof step1)

        let step2 = ((this.form.VAR_004.value + this.form.VAR_006.value)/(this.form.VAR_007.value+273) - (this.form.VAR_005.value+this.form.VAR_006.value)/(this.form.VAR_008.value+273))
        console.log(step2,"这是结果2",typeof step2)

        this.form.result1.value = step1 * step2
      }
    },

    calc2(){
      // 计算2
      if(this.form.VAR_009.value === undefined) {
        this.$message.warning("条件不能为空！")
      }else {
        this.form.result2.value = 1.44 * this.form.VAR_009.value * 10.2 * this.form.VAR_010.value * this.form.VAR_011.value * 0.7
        console.log(this.form.result2.value)
      }
    },

    calc3() {
      // 计算3
      if(this.$_.some([this.form.result1.value,this.form.result2.value],(value) =>{
        return this.$_.isNil(value)
      })) {
        this.$message.warning("条件不能为空！")
      }else {
        this.form.result3.value = this.form.result1.value - this.form.result2.value;
      }
      
    }
  },  
  mounted() {},  
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

.result-row {
  margin:15px 0;
}
</style>
