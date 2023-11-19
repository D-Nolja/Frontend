<script setup>
import VInput from "../Common/VInput.vue";
import VButtonSubmit from "../Common/VButtonSubmit.vue";
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { useUserStore } from "@/stores/user.js";
import { useHeaderStateStore } from "@/stores/headerState.js";

const router = useRouter();
// 스토어 인스턴스 생성
const headerStateStore = useHeaderStateStore();
const { changeHeaderState } = headerStateStore;

const userStore = useUserStore();
const { isLogin } = storeToRefs(userStore);
const { userLogin, getUserInfo } = userStore;

const loginUser = ref({
  password: "",
  email: "",
});

const login = async () => {
  try {
    await userLogin(loginUser.value);
    // let token = sessionStorage.getItem("accessToken");

    if (isLogin.value) {
      changeHeaderState();
      router.push({ name: "home" });
      // getUserInfo(token);
    } else {
      loginUser.value.password = "";
      loginUser.value.email = "";
    }
  } catch (error) {
    console.error("VLoginBox :", error);
  }
};
</script>

<template>
  <div class="contents-container">
    <form @submit.prevent="login">
      <p id="loginBox-title">Sign In</p>
      <VInput txt="Enter email or user name" v-model="loginUser.email" />
      <VInput txt="Password" v-model="loginUser.password" />

      <div id="fp-box">
        <p id="fp-text">Forgot password?</p>
      </div>
      <VButtonSubmit txt="Login" @click.prevent="login" />
      <p id="continue-text">or continue with</p>

      <div id="icons">
        <img
          src="../../assets/img/loginIcon/kakao.svg"
          alt="kakaoIcon"
          srcset=""
        />
        <img
          src="../../assets/img/loginIcon/naver.svg"
          alt="naverIcon"
          srcset=""
        />
        <img
          src="../../assets/img/loginIcon/google.svg"
          alt="googleIcon"
          srcset=""
        />
      </div>
    </form>
  </div>
</template>

<style scoped>
.contents-container {
  height: 70vh;
  width: 23.0625rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 80px auto;
  padding-top: 80px;

  -ms-overflow-style: none;
}

.contents-container::-webkit-scrollbar {
  display: none;
}
#loginBox-title {
  color: #333;
  font-family: Poppins;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 20px !important;
  text-align: center;
}

input {
  width: 23.0625rem;
  height: 3.875rem;
  flex-shrink: 0;
  border-radius: 0.5rem;
  background-color: #e6efff;
  border: none;
  padding: 15px;
  margin-bottom: 20px;
}

input::placeholder {
  /*  text style  */
  color: #8ab4ff;
  font-family: Poppins;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

input:not(#login-btn):focus {
  border: 1.5px solid #9cbcf5;
  outline: none;
  box-shadow: 0 0 5px #9cbcf5;
}

#fp-text {
  color: #b0b0b0;
  font-family: Poppins;
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

#fp-box {
  display: flex;
  width: 100%;
  justify-content: end;
  padding-right: 10px;
}

#continue-text {
  color: #b5b5b5;
  font-family: Poppins;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-align: center;
}

#login-btn {
  border-radius: 0.5625rem;
  background: #8ab4ff;
  box-shadow: 0px 4px 61px 0px rgba(138, 180, 255, 0.4);

  color: #fff;
  font-family: Poppins;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 30px 0;
}

#login-btn {
  /* Existing styles... */
  transition: transform 0.1s ease, background-color 0.2s ease; /* Smooth transition for transform and background-color */
}

#login-btn:active {
  transform: scale(
    0.95
  ); /* Slightly reduce the scale to give a pressed effect */
  background-color: #729fdd; /* Optional: Change color to indicate it's active/pressed */
}

#icons {
  margin: 20px 0;
  text-align: center;
}

#icons img {
  margin: 8px;
}

#icons img {
  /* 기존 스타일... */
  transition: transform 0.3s ease; /* 부드러운 변환 효과 */
}

#icons img:active {
  transform: scale(1.15); /* 클릭 시 이미지 크기를 10% 증가 */
}
</style>
