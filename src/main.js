import Vue from 'vue'
import app from '@/modules/Main/app.vue'
import ElementUI from 'element-ui';
import router from "@/routers/index"
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from "vue-router";
import store from "@/stores/index.js"
import _ from 'lodash';

Vue.use(ElementUI, { size: 'small', zIndex: 3000 })
Vue.use(VueRouter)
Vue.prototype.$_ = _ ;
Vue.config.productionTip = false

new Vue({
  render: h => h(app),
  router,
  store
}).$mount('#app')
