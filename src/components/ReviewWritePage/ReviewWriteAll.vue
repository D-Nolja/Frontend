<template>
  <div id="review-all-container">
    <div id="review-all-txt-container">
      <div id="review-all-txt-title-container">
        <input
          type="text"
          id="review-all-txt-title"
          placeholder="제목을 입력하세요"
          v-model="reviewTitle"
        />

        <input
          type="date"
          id="review-all-txt-date"
          placeholder="날짜를 입력하세요"
        />
      </div>
      <input
        type="file"
        name=""
        id="review-all-file"
        accept="image/*"
        @change="uploadFile"
      />
      <textarea
        id="review-all-txt"
        rows="10"
        placeholder="내용을 입력하세요"
        v-model="reviewContents"
      ></textarea>
    </div>
  </div>
</template>

<!-- 스타일 및 스크립트 부분은 동일하게 유지 -->

<script setup>
import { usePlanStore } from "@/stores/plan.js";
import { useReviewStore } from "@/stores/review";
import { storeToRefs } from "pinia";
import { onMounted, ref, watch, watchEffect } from "vue";
import { uploadReviewImg } from "@/api/review.js";
const planStore = usePlanStore();
const reviewStore = useReviewStore();

const { writtenReview } = storeToRefs(reviewStore);
const { thePlan } = storeToRefs(planStore);
const fileImgSrc = ref(null);
const reviewTitle = ref("");
const reviewContents = ref("");

onMounted(() => {
  writtenReview.value.reviewTitle = "";
  writtenReview.value.mainImg = "";
  writtenReview.value.mainContents = "";
});

watch(reviewTitle, (newTitle) => {
  if (writtenReview.value) {
    writtenReview.value.reviewTitle = newTitle;
  }
});

watch(reviewContents, (newContents) => {
  if (writtenReview.value) {
    writtenReview.value.mainContents = newContents;
  }
});

// var mainImg = "";
// watchEffect(() => {
//   console.log("thePlan", thePlan.value);

//   if (fileImgSrc.value) {
//     // writtenReview.value.mainImg = reviewImg.value;
//     writtenReview.value.mainImg = mainImg;
//     console.log("writtenReview.value.mainImg", writtenReview.value);
//   }
// });

var reviewImg = "";

// const handleFileChange = async (event, item) => {
//   const file = event.target.files[0];
//   if (file && file.type.startsWith("image/")) {
//     try {
//       const imageUrl = await sendReviewImg(file); // Wait for the image URL
//       item.imageSrc = imageUrl; // Set the image URL
//       console.log("imgggg", item);
//     } catch (error) {
//       console.error("Error uploading file: ", error);
//     }
//   }
// };

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
    const imgSrc = await sendReviewImg(file);
    console.log("imgSrc", imgSrc);
    writtenReview.value.mainImg = imgSrc;
    fileImgSrc.value = URL.createObjectURL(file);
    console.log("writtenReview.value", writtenReview.value);
  }
};

const sendReviewImg = (file) => {
  return new Promise((resolve, reject) => {
    let formData = new FormData();
    formData.append("image", file);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    uploadReviewImg(
      formData,
      config,
      (response) => {
        const { data } = response;
        reviewImg = data.info.url; // Update reviewImg
        resolve(reviewImg); // Resolve with the URL
      },
      (error) => {
        console.error("Review image upload error: ", error.message);
        reject(error); // Reject on error
      }
    );
  });
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
