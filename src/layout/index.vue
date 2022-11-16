<template>
  <el-row class="wrap">
    <el-col class="icon-wrap" :span="8">
      <i
        :class="['el-icon-search', choosenView === 0 ? 'choosen' : '']"
        @click="chooseView(0)"
      ></i>
    </el-col>
    <el-col class="icon-wrap" :span="8">
      <i
        :class="['el-icon-tickets', choosenView === 1 ? 'choosen' : '']"
        @click="chooseView(1)"
      ></i>
    </el-col>
    <el-col class="icon-wrap" :span="8">
      <i
        :class="['el-icon-set-up', choosenView === 2 ? 'choosen' : '']"
        @click="chooseView(2)"
      ></i>
    </el-col>
  </el-row>
</template>
<script>
export default {
  name: "Layout",
  data() {
    return {
      choosenView: 0,
      routes: [{ name: "question" }, { name: "pics" }, { name: "calc" }],
    };
  },
  methods: {
    chooseView(i) {
      if (this.choosenView !== i) {
        this.choosenView = i;
        this.$router.push({
          name: this.routes[i].name,
        });
      }
    },
  },
};
</script>
<style scoped>
.wrap {
  width: 100vw;
  height: 6vh;
  position: absolute;
  bottom: 0;
  left: 0;
  background: #cecece;
}
.icon-wrap {
  margin-top: calc(3vh - 12.5px);
  height: 100%;
  display: flex;
  justify-content: center;
}
i {
  font-size: 25px;
}
.choosen {
  color: rgb(64, 158, 255);
}
</style>
