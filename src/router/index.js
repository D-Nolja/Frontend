import { createRouter, createWebHistory } from "vue-router";
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/MainView.vue"),
    },
    {
      path: "/mypage",
      name: "myPage",
      component: () => import("@/views/MyPageView.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/LoginView.vue"),
    },
    {
      path: "/plan/:day",
      name: "plan",
      component: () => import("@/views/PlanView.vue"),
    },
    {
      path: "/qna",
      name: "qna",
      component: () => import("@/views/QnaView.vue"),
    },
  ],
});

export default router;
