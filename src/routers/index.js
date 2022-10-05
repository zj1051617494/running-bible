import VueRouter from "vue-router";
import Layout from "@/layout"

const routes = [
  {
    path: "/login",
    name: "login",
    component:()=> import("@/modules/Login/loginPage.vue")
  },
  {
    path: "/",
    redirect:"/login" 
  },
  {
    path: "/",
    component: Layout,
    
  }
]


const router = new VueRouter({
  routes,
  mode: "history"
})

export default router
