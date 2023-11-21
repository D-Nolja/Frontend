// import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { httpStatusCode } from "@/utils/http-status.js";
import { ref } from "vue";
import {
  login,
  join,
  modify,
  // searchUserList,
  searchUserDetail,
  // deleteUser,
  uploadProfile,
} from "@/api/auth.js";
import axios from "axios";

export const useUserStore = defineStore("userStore", () => {
  const isLogin = ref(false);
  const userInfo = ref({ username: "", email: "", img: "" });
  const profileImg = ref("");
  const modifiedUserInfo = ref({ username: "", img: "" });

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
          console.log(accessToken);

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

  const getUserInfo = async () => {
    await searchUserDetail(
      (response) => {
        let { data } = response;
        userInfo.value = data.info;
        console.log("getUserInfo ", userInfo.value);
      },
      (error) => {
        console.log("유저 정보 조회 error : ", error);
      }
    );
  };

  const userLogout = () => {
    isLogin.value = false;
    modifiedUserInfo.value = null;
    userInfo.value = null;
    sessionStorage.clear();

    console.log("logout info ", userInfo.value);
    console.log("isLogin value", isLogin.value);
  };

  const checkInitialLoginState = () => {
    const accessToken = sessionStorage.getItem("accessToken");
    console.log("accessToken 있어요");
    if (accessToken) {
      isLogin.value = true;
      console.log("isLogin ", isLogin.value);
      // 필요하다면 여기에서 사용자 정보를 다시 로드
      getUserInfo();
    }
  };

  const modifyUserInfo = async () => {
    console.log("store-modify  : ", modifiedUserInfo.value);
    await modify(
      modifiedUserInfo.value,
      (response) => {
        const { data } = response;

        if (data.code == "0000") {
          userInfo.value.img = profileImg.value;
        }

        searchUserDetail(
          (response) => {
            let { data } = response;

            userInfo.value = data.info;
          },
          (error) => {
            console.log("유저 정보 조회 error : ", error);
          }
        );
      },
      (error) => {
        console.log("회원 정보 수정 에러 : ", error);
      }
    );
  };

  const sendProfile = async (file) => {
    let formData = new FormData();
    formData.append("image", file);

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
        const { data } = response;
        profileImg.value = data.info.url; // db 전달할 때는 img
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
    modifyUserInfo,
    profileImg,
    modifiedUserInfo,
    checkInitialLoginState,
  };
});
