<script setup>

import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { useHeaderStateStore } from "@/stores/headerState.js";
import { useUserStore } from "@/stores/user.js";

const headerStateStore = useHeaderStateStore();
const { headerItemList } = storeToRefs(headerStateStore);
const { changeHeaderState } = headerStateStore;

const userStore = useUserStore();
const { userLogout, getUserInfo } = userStore;

const router = useRouter();



const moveMain = () => {
  router.push({ name: "home" });
};
const movePlan = () => {
  console.log("plan!");
  router.push("plan/all");
};
const logout = async () => {
  try {
    console.log("로그아웃");
    await userLogout();
    changeHeaderState();
    // router.push({ name: "login" });
  } catch (error) {
    console.log("logout failed", error);
  }
};

const moveQna = () => {
  router.push({ name: "qna" });
};
const moveLogin = () => {
  router.push({ name: "login" });
};
const moveJoin = () => {
  router.push({ name: "join" });
};
const moveMyPage = () => {
  try {
    getUserInfo();
    router.push({ name: "myPage" });
  } catch (error) {
    console.log("userInfo를 불러오지 못했어");
  }
};

const clickMethods = {
  moveQna,
  moveLogin,
  moveJoin,
  logout,
  movePlan,
  moveMyPage,
};

const handleClick = (clickName) => {
  if (clickMethods[clickName]) {
    clickMethods[clickName]();
  }
};
</script>

<template>
  <div class="nav-container">
    <div class="nav-contents-container">
      <div @click="moveMain">
        <img src="../../assets/img/avatar.svg" alt="" srcset="" />
      </div>
      <div class="nav-btn-container">
        <template v-for="item in headerItemList" :key="item.routerName">
          <div v-if="item.show" @click="handleClick(item.clickName)">
            {{ item.name }}
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 마우스 호버 및 포커스 상태를 위한 스타일 */
.nav-btn-container div:hover,
.nav-btn-container div:focus {
  color: #666; /* 호버 또는 포커스 시 색상 변경 */
  cursor: pointer;
}

/* 클릭 이벤트를 위한 액티브 클래스 */
.nav-btn-container div:active {
  transform: scale(0.95); /* 클릭 시 약간 축소 효과 */
  color: #4a4a4a; /* 클릭 시 색상 변경 */
  transition: transform 0.1s, color 0.1s; /* 부드러운 전환 효과 */
}

.nav-container {
  box-sizing: border-box;

  width: 100vw;
  height: 80px;
  /* padding: 0px 30px; */

  color: #333;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 35.695px; /* 157.143% */

  background: #fff;
  /* box-shadow: 0px -1.6225px 0px 0px #F0F0F0 inset; */
  position: fixed;
  z-index: 100;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.05); /* 더 세밀하고 부드러운 그림자 효과 */
  border-bottom: 1px solid #eaeaea; /* 하단 경계선 유지 */
  background: linear-gradient(
    to right,
    #fefefe,
    #fff
  ); /* 그라디언트 배경 유지 */
}

.nav-contents-container {
  height: 100%;
  width: 92vw;
  display: flex;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 2px;
}
.nav-btn-container {
  display: flex;
  align-items: center;
  margin-right: 10px;
}

.nav-btn-container div {
  margin: 0 0 0 30px;
  text-shadow: 0 1px 1px rgba(95, 95, 95, 0.1); /* 더 미묘한 텍스트 그림자 효과 */
  font-size: 16px;
}
</style>
