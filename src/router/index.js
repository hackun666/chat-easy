import Vue from 'vue'
import VueRouter from 'vue-router'
import Chat from "../views/Chat.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "chat",
    meta: {
      title: "Chat Easy",
    },
    component: Chat,
  },
];

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  // 自动化修改页面标签的 title
  document.title = to.meta.title;
  window.scrollTo(0, 0);
  next();
});
export default router
