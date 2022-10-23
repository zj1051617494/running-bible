<template>
  <div class="wrap">
    <i class="el-icon-search"></i>
    <i class="el-icon-tickets"></i>
    <i class="el-icon-set-up"></i>
  </div>
</template>
<script>
  export default {
    name: "Layout"
  }
</script>
<style scoped>
  .wrap{
    width: 100vw;
    height: 6vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: absolute;
    bottom: 0;
    left: 0;
    background: #cecece;
  }
</style>