<script setup>
import VButtonSubmit from "../Common/VButtonSubmit.vue";
import VInput from "../Common/VInput.vue";
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
        />
        <!-- accept : 이미지 파일만 사용할 수 있도록 제한-->
        <img src="@/assets/img/upload.svg" alt="" id="image-upload-svg" />
      </label>
    </div>
    <label for="nickname">
      <p>닉네임</p>
      <VInput txt="Enter email or user name" id="nickname" />
    </label>
    <label for="email">
      <p>이메일</p>
      <VInput txt="Password" id="email" />
    </label>
    <VButtonSubmit txt="회원 탈퇴" color="white" class="submitBtn" />
    <VButtonSubmit txt="수정" class="submitBtn" />
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
