import VueRouter from "vue-router";

const routes = [
  {
    path: "/login",
    name: "login",
    component:()=> import("@/modules/Login/loginPage.vue")
  },
  {
    path: "/",
    redirect:"/login"
  }
]


const router = new VueRouter({
  routes,
  mode: "history"
})

export default router
