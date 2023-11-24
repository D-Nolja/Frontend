<script setup>
import VButtonSubmit from "../Common/VButtonSubmit.vue";
import VInput from "../Common/VInput.vue";
import { useUserStore } from "@/stores/user.js";
import { onMounted, ref } from "vue";
import { storeToRefs } from "pinia";
const userStore = useUserStore();
const { userInfo, modifiedUserInfo, profileImg } = storeToRefs(userStore);
const { sendProfile, modifyUserInfo } = userStore;

const isEditable = ref(true);
const fileImgSrc = ref("");

onMounted(() => {
  console.log("userInfo", userInfo.value);
  fileImgSrc.value = userInfo.value.img;
});
const changeEdit = () => {
  isEditable.value = !isEditable.value;
};

const changeSaveEdit = async () => {
  isEditable.value = !isEditable.value;

  try {
    console.log("before modifiedUserInfo!! : ", modifiedUserInfo.value);
    modifiedUserInfo.value.username = userInfo.value.username;
    modifiedUserInfo.value.img = profileImg.value;
    console.log("after modifiedUserInfo!! : ", modifiedUserInfo.value);
    await modifyUserInfo();
  } catch (error) {
    console.log("회원정보 수정 에러");
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
  <div class="contents-container">
    <!-- <div id="img-upload-container">
      <label for="image-upload">
        <input
          type="file"
          name="image-upload"
          id="image-upload"
          accept="image/*"
          @change="uploadFile"
          :disabled="isEditable"
        />
        <img :src="fileImgSrc" alt="" id="image-upload-svg" />
      </label>
    </div> -->

    <div id="profile-container">
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
      <VButtonSubmit txt="수정" class="submitBtn" @click="changeEdit" />
    </template>
    <template v-else>
      <VButtonSubmit txt="완료" class="submitBtn" @click="changeSaveEdit" />
    </template>
  </div>
</template>

<style scoped>
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
  top: 50%;
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
