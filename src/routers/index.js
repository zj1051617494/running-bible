import VueRouter from "vue-router";
import Layout from "@/layout"

const routes = [
  {
    path: "/login",
    name: "login",
    component:()=> import("@/modules/Login/loginPage.vue"),
    meta: {
      keepAlive: false
    }
  },
  {
    path: "/",
    redirect:"/home" 
  },
  {
    path: "/home",
    name:"home",
    component: ()=> import("@/modules/Main/app.vue"),
    meta: {
      keepAlive: true
    }
  },
  {
    path:"/question",
    name:"question",
    component: ()=> import("@/modules/QuestionSearch/questionSearch.vue"),
    meta: {
      keepAlive: true
    }
  }
]


const router = new VueRouter({
  routes,
  mode: "history"
})

export default router
