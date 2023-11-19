// import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { httpStatusCode } from "@/utils/http-status.js";
import { ref } from "vue";
import {
  login,
  logout,
  join,
  // modify,
  // searchUserList,
  // searchUserDetail,
  // deleteUser,
} from "@/api/auth.js";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const useUserStore = defineStore("userStore", () => {
  const isLogin = ref(false);

  const userJoin = async (joinUser) => {
    console.log("joinUser : ", joinUser);
    await join(
      joinUser,
      (response) => {
        let { data } = response;
        console.log("join 성공 ", data);
      },
      (error) => {
        console.log("회원가입 실패");
        console.log(error);
      }
    );
  };

  const userLogin = async (loginUser) => {
    console.log("loginUser store : ", loginUser);
    await login(
      loginUser,
      (response) => {
        if (response.status === httpStatusCode.OK) {
          // 1. 로그인 성공했으면
          let { data } = response;
          let accessToken = data.info.accessToken;
          let refreshToken = data.info.refreshToken;

          // 2. accessToken, refreshToken sessionStorage 에 저장
          sessionStorage.setItem("accessToken", accessToken);
          sessionStorage.setItem("refreshToken", refreshToken);

          isLogin.value = true;
        }
      },
      (error) => {
        if (axios.isAxiosError(error) && error.response) {
          isLogin.value = false;
          console.log("에러 ! ", error.response);
          let { data } = error.response;
          console.log(data);
          if (data.code == 9999) {
            console.log(data.msg);
            alert(data.msg);
          }
        }
      }
    );
  };

  const getUserInfo = (token) => {
    let decodeToken = jwtDecode(token);
    console.log("decodeToken ", decodeToken);
    let userEmail = decodeToken.email;
    console.log("userEmail ", userEmail);
  };

  const userLogout = async () => {
    await logout(
      () => {
        isLogin.value = false;
        // loginUser null 로 만들어야 하는데 지금 store에 유저 정보가 없네...?
      },
      (error) => {
        console.log("에러 ! ", error);
        if (axios.isAxiosError(error) && error.response) {
          console.log("Response data:", error.response.data);
          console.log("Response headers:", error.response.headers);
        } else {
          console.error("Unexpected error:", error);
        }
      }
    );
  };

  return { isLogin, userLogin, userLogout, getUserInfo, userJoin };
});
