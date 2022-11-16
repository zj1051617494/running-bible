<template>
  <div id="app" ref="app">
    <div class="main-container" v-if="$route.meta.keepAlive">
      <div class="content-area">
        <router-view />
      </div>
      <layout />
    </div>
    <router-view v-if="!$route.meta.keepAlive" />
  </div>
</template>
<script>
import layout from "@/layout/index.vue";
export default {
  components: {
    layout,
  },
};
</script>
<style scoped>
.main-container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
.content-area {
  width: 90%;
  height: 94vh;
  padding: 15px;
}
</style>
<style>
.el-scrollbar__bar {
  opacity: 1 !important;
}
</style>