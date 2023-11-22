<script setup>
import VButtonSubmit from "../Common/VButtonSubmit.vue";
import VInput from "../Common/VInput.vue";
import { ref } from "vue";
import { useUserStore } from "../../stores/user";

const userStore = useUserStore();
const { userJoin } = userStore;

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
  } catch (error) {
    console.log("VJoinBox 회원가입 실패");
  }
};
</script>

<template>
  <div class="join-contents-container">
    <form>
      <p class="join-title">회원가입</p>
      <div id="profile-container">
        <div id="img-upload-container">
          <label for="image-upload">
            <input
              type="file"
              name="image-upload"
              id="image-upload"
              accept="image/*"
            />
            <!-- accept : 이미지 파일만 사용할 수 있도록 제한-->
            <img src="@/assets/img/upload.svg" alt="" id="image-upload-svg" />
          </label>
        </div>
      </div>

      <label for="username">
        <p>닉네임</p>
        <VInput
          txt="Enter your nickname"
          id="username"
          v-model="joinUser.username"
        />
      </label>
      <label for="email">
        <p>이메일</p>
        <VInput txt="Enter your email" id="email" v-model="joinUser.email" />
      </label>
      <label for="password">
        <p>비밀번호</p>
        <VInput txt="Password" id="password" v-model="joinUser.password" />
      </label>
      <VButtonSubmit
        txt="완료"
        color="white"
        class="submitBtn"
        @click.prevent="join"
      />
    </form>
  </div>
</template>

<style scoped>
.join-contents-container {
  width: 23.0625rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px auto;
  padding-top: 120px;
  -ms-overflow-style: none;
  height: 90vh;
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
}

#image-upload-svg {
  position: absolute;
  top: 27.7%;
  left: 50%;
  transform: translate(-50%, -50%);
}

input {
  width: 23.0625rem;
  height: 3.875rem;
  flex-shrink: 0;
  border-radius: 0.5rem;
  background-color: #f8f8f8;
  border: none;
  padding: 15px;
  margin-bottom: 20px;
}

input::placeholder {
  color: #d9d9d9;
}

.submitBtn {
  margin: 10px;
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
