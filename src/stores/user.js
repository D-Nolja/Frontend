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
  searchUserDetail,
  // deleteUser,
  uploadProfile,
} from "@/api/auth.js";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const useUserStore = defineStore("userStore", () => {
  const isLogin = ref(false);
  const userInfo = ref({ username: "jim", email: "j@gmail.com" });

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
          console.log("로그인 에러 ! ", error.response);
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
    let userId = decodeToken.email;
    searchUserDetail(
      userId,
      (response) => {
        let { data } = response;
        console.log("data ", data);
        // userInfo.value = data;
      },
      (error) => {
        console.log("유저 정보 조회 error : ", error);
      }
    );
  };

  const userLogout = async () => {
    await logout(
      () => {
        isLogin.value = false;
        userInfo.value = null;
      },
      (error) => {
        console.log("로그아웃 에러 ! ", error);
        if (axios.isAxiosError(error) && error.response) {
          console.log("Response data:", error.response.data);
          console.log("Response headers:", error.response.headers);
        } else {
          console.error("Unexpected error:", error);
        }
      }
    );
  };

  const sendProfile = async (file) => {
    let formData = new FormData();
    formData.append("img", file);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    await uploadProfile(
      formData,
      config,
      (response) => {
        console.log("파일 업로드 성공");

        console.log("file upload : ", response);
      },
      (error) => {
        console.log("프로필 업로드 에러 : ", error.message);
      }
    );
  };

  return {
    userInfo,
    isLogin,
    userLogin,
    userLogout,
    getUserInfo,
    userJoin,
    sendProfile,
  };
});
