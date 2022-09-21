import Vue from "vue";
import  Vuex  from "vuex";
import account from "./public/account.store";
Vue.use(Vuex);

const modules = {
}
modules.account = account;
const store = new Vuex.Store({
  modules,
  devtools: true
})

export default store