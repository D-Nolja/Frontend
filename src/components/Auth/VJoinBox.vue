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
    userJoin(joinUser.value);
  } catch (error) {
    console.log("VJoinBox 회원가입 실패");
  }
};
</script>

<template>
  <div class="join-contents-container">
    <form>
      <p>회원가입</p>
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
  margin: 0 auto;
  padding-top: 120px;
  -ms-overflow-style: none;
  height: 85vh;
}

.contents-container::-webkit-scrollbar {
  display: none;
}

#img-upload-container {
  height: 7rem;
  width: 7rem;
  border-radius: 50%;
  background-color: #f8f8f8;
  stroke-width: 1px;
  stroke: #eaeaea;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25) inset;
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
  top: 20%;
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
</style>
