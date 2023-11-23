<template>
  <div id="review-all-container">
    <div id="review-all-txt-container">
      <div id="review-all-txt-title-container">
        <input type="text" id="review-all-txt-title" placeholder="제목을 입력하세요" v-model="writtenReview.value.reviewTitle" />

        <input type="date" id="review-all-txt-date" placeholder="날짜를 입력하세요" />
      </div>
      <input type="file" name="" id="review-all-file" accept="image/*" @change="uploadFile" />
      <textarea id="review-all-txt" rows="10" placeholder="내용을 입력하세요"
        v-model="writtenReview.value.mainContents"></textarea>
    </div>
  </div>
</template>

<!-- 스타일 및 스크립트 부분은 동일하게 유지 -->

<script setup>
import { usePlanStore } from '@/stores/plan.js';
import { useReviewStore } from "@/stores/review";
import { storeToRefs } from "pinia";
import { watch, ref } from "vue";

const planStore = usePlanStore();
const reviewStore = useReviewStore();
const { writtenReview } = storeToRefs(reviewStore);
const { thePlan } = storeToRefs(planStore);
watch(() => {
  console.log("thePlan", thePlan.value);
  writtenReview.value.mainImg = fileImgSrc.value;
})

const fileImgSrc = ref(null);
const uploadFile = async (e) => {
  let file = e.target.files[0];
  // console.log("file : ", file.name);
  let fileName = file.name;
  if (
    fileName.endsWith(".png") ||
    fileName.endsWith(".jpg") ||
    fileName.endsWith(".jpeg")
  ) {
    console.log("fileImgSrc : ", fileImgSrc);
    fileImgSrc.value = URL.createObjectURL(file);
  }
};
</script>

<style scoped>
#review-all-container {
  width: 60vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px 0;
  background-color: #f9f9f9;
  /* 배경색 추가 */
  padding: 20px;
  /* 패딩 추가 */
  border-radius: 8px;
  /* 테두리 둥글게 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  /* 그림자 효과 */
}

#review-all-file {
  margin-bottom: 10px;
  border: none !important;
}

#review-all-txt-title-container {
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
}

#review-all-txt-title {
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5rem;
  /* 85.714% */
  width: 100%;
}

#review-all-txt-title ::placeholder {
  font-size: 1rem;
  font-weight: 400;
}

#review-all-txt-date {
  font-size: 0.9rem;
  font-style: normal;
  font-weight: 300;
  line-height: 1.5rem;
  /* 85.714% */

  color: #b9b9b9;
}

#review-all-txt {
  line-height: 1.3rem;
  width: 100%;
}

#review-all-container input {
  padding: 5px;
  border-radius: 3px;
  border: 1px solid #e0e0e0;
  color: #333;
}

#review-all-container textarea {
  padding: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 3px;
  color: #333;
}

#review-all-container input:focus,
#review-all-container textarea:focus {
  border: 1px solid #729fdd !important;
  outline: none;
}
</style>
