import { createRouter, createWebHistory } from "vue-router";

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
      path: "/plan/view/:day",
      name: "planView",
      component: () => import("@/views/PlanShowView.vue"),
    },
    {
      path: "/qna",
      name: "qna",
      component: () => import("@/views/QnaView.vue"),
    },
    {
      path: "/join",
      name: "join",
      component: () => import("@/views/JoinView.vue"),
    },
  ],
});

export default router;
