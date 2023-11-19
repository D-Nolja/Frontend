<script setup>
import VButtonSubmit from "../Common/VButtonSubmit.vue";
import VInput from "../Common/VInput.vue";
import { useUserStore } from "@/stores/user.js";
import { ref } from "vue";
import { storeToRefs } from "pinia";
const userStore = useUserStore();
const { userInfo } = storeToRefs(userStore);
const { sendProfile } = userStore;
console.log(userInfo.value);

const isEditable = ref(true);
const fileImgSrc = ref(null);
const changeEiditStatus = () => {
  isEditable.value = !isEditable.value;
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
  <div class="contents-container">
    <div id="img-upload-container">
      <label for="image-upload">
        <input
          type="file"
          name="image-upload"
          id="image-upload"
          accept="image/*"
          @change="uploadFile"
          :disabled="isEditable"
        />
        <!-- accept : 이미지 파일만 사용할 수 있도록 제한-->
        <!-- <img src="@/assets/img/upload.svg" alt="" id="image-upload-svg" /> -->
        <img :src="fileImgSrc" alt="" id="image-upload-svg" />
      </label>
    </div>
    <label for="nickname">
      <p>닉네임</p>
      <VInput
        txt="Enter email or user name"
        id="nickname"
        v-model="userInfo.username"
        :disabled="isEditable"
      />
    </label>
    <label for="email">
      <p>이메일</p>
      <VInput
        txt="Password"
        id="email"
        v-model="userInfo.email"
        disabled="true"
      />
    </label>
    <template v-if="isEditable">
      <VButtonSubmit txt="회원 탈퇴" color="white" class="submitBtn" />
      <VButtonSubmit txt="수정" class="submitBtn" @click="changeEiditStatus" />
    </template>
    <template v-else>
      <VButtonSubmit txt="완료" class="submitBtn" @click="changeEiditStatus" />
    </template>
  </div>
</template>

<style scoped>
.contents-container {
  width: 23.0625rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding-top: 40px;
  -ms-overflow-style: none;
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
