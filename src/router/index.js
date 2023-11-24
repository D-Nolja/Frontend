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
      path: "/qna",
      name: "qna",
      component: () => import("@/views/QnaView.vue"),
    },
    {
      path: "/join",
      name: "join",
      component: () => import("@/views/JoinView.vue"),
    },
    {
      path: "/writeReview",
      name: "reviewWrite",
      component: () => import("@/views/ReviewWriteView.vue"),
    },
    {
      path: "/review",
      name: "review",
      component: () => import("@/views/ReviewView.vue"),
    },

    {
      path: "/modifyReview",
      name: "reviewModify",
      component: () => import("@/views/ReviewModifyView.vue"),
    },
  ],
});

export default router;
