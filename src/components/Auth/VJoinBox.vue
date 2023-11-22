<script setup>
import VButtonSubmit from "../Common/VButtonSubmit.vue";
import VInput from "../Common/VInput.vue";
import { ref } from "vue";
import { useUserStore } from "../../stores/user";
import { useRouter } from "vue-router";

const router = useRouter();
const userStore = useUserStore();
const { userJoin, sendProfile } = userStore;
const fileImgSrc = ref(null);

// 이메일 양식 유효성 체크
const joinUser = ref({
  username: "",
  password: "",
  email: "",
  profile: "imgurl",
});

const join = async () => {
  try {
    console.log("jb : ", joinUser.value);

    // 이메일 유효성 체크
    userJoin(joinUser.value);
    router.push({ name: "login" });
  } catch (error) {
    console.log("VJoinBox 회원가입 실패");
  }
};

const uploadFile = (e) => {
  let file = e.target.files[0];
  // console.log("file : ", file.name);
  let fileName = file.name;
  if (
    fileName.endsWith(".png") ||
    fileName.endsWith(".jpg") ||
    fileName.endsWith(".jpeg")
  ) {
    console.log("fileImgSrc : ", fileImgSrc);
    sendProfile(file);
    fileImgSrc.value = URL.createObjectURL(file);
  }
};
</script>

<template>
  <div class="join-contents-container">
    <p class="join-title">회원가입</p>
    <form class="join-form">
      <div id="profile-container">
        <div id="img-upload-container">
          <label for="image-upload">
            <input
              type="file"
              name="image-upload"
              id="image-upload"
              accept="image/*"
              @change="uploadFile"
            />
            <!-- accept : 이미지 파일만 사용할 수 있도록 제한-->
            <img
              v-if="!fileImgSrc"
              src="@/assets/img/upload.svg"
              alt=""
              id="image-upload-svg1"
            />
            <img v-else :src="fileImgSrc" alt="" id="image-upload-svg" />
          </label>
        </div>
      </div>

      <div id="name-container">
        <p>닉네임</p>
        <VInput
          txt="Enter your nickname"
          id="username"
          v-model="joinUser.username"
        />
      </div>
      <div>
        <p>이메일</p>
        <VInput txt="Enter your email" id="email" v-model="joinUser.email" />
      </div>
      <div>
        <p>비밀번호</p>
        <VInput txt="Password" id="password" v-model="joinUser.password" />
      </div>

      <VButtonSubmit
        txt="완료"
        color="default"
        class="submitBtn"
        @click.prevent="join"
      />
    </form>
  </div>
</template>

<style scoped>
.join-contents-container {
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 24rem;
  margin: 10px auto;
  padding-top: 120px;
  -ms-overflow-style: none;
  height: 93vh;
}

.join-form p {
  margin-bottom: 5px !important;
  font-size: 14px;
  color: #333;
}
.join-contents-container p {
  margin-bottom: 5px !important;
}
.contents-container::-webkit-scrollbar {
  display: none;
}

#profile-container {
  display: flex;

  width: 100%;
  justify-content: center;
  margin: 10px 0;
}
#img-upload-container {
  position: relative;
  height: 7rem;
  width: 100%;
  border-radius: 50%;
  background-color: #f8f8f8;
  stroke-width: 1px;
  stroke: #eaeaea;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25) inset;
}

#img-upload-container {
  width: 7rem;
  height: 7rem;
}

#image-upload {
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
  position: relative;
  display: none;
}

#image-upload-svg1 {
  position: absolute;
  right: 22px;
  top: 22px;
}

#image-upload-svg {
  position: absolute;
  border-radius: 50%;
  height: 7rem;
  width: 7rem;
  max-width: 100%; /* 최대 가로 크기를 컨테이너의 100%로 제한 */
  max-height: 100%; /* 최대 세로 크기를 컨테이너의 100%로 제한 */
  object-fit: cover; /* 이미지 비율 유지 */
  object-position: center;
  /* box-shadow: 0px 4px 8px 0 rgba(138, 180, 255, 0.5); 그림자 설정 */
}

#name-container {
  margin-top: 20px;
}

input {
  width: 23.0625rem;
  height: 3.875rem;
  flex-shrink: 0;
  border-radius: 0.5rem;
  background-color: #f8f8f8;
  border: none;
  padding: 15px;
  margin-bottom: 15px;
}

input::placeholder {
  color: #d9d9d9;
}

.join-title {
  color: #333;
  font-family: Poppins;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 10px !important;
  text-align: center;
}

.join-title {
  color: #333;
  font-family: Poppins;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 20px !important;
  text-align: center;
}
</style>
