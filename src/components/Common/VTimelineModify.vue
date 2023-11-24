<template>
  <a-timeline>
    <a-timeline-item v-for="rd in item.reviewDetails" :key="rd.reviewId">
      <div id="place-name-with-write">
        <p id="place-name">{{ rd.name }}</p>
        <img
          src="../../assets/img/write.svg"
          alt=""
          srcset=""
          id="write-icon"
          @click="toggle(item)"
        />
      </div>
      <p v-if="item.review">{{ rd.content }}</p>
      <template v-if="!item.showDiv">
        <img
          v-if="item.imageSrc"
          :src="item.imageSrc"
          alt="Review Image"
          id="preImage"
      /></template>

      <!-- 리뷰 표시 -->
      <div v-if="item.showDiv">
        <div id="upload-container">
          <input type="file" @change="handleFileChange($event, item)" />
          <img
            v-if="item.imageSrc"
            :src="item.imageSrc"
            alt="Uploaded Image"
            id="preImage"
          />
        </div>

        <textarea
          id="review-all-txt"
          rows="10"
          placeholder="내용을 입력하세요"
          v-model="rd.content"
        ></textarea>
        <div id="finish-btn-container">
          <VButtonSubmit
            txt="임시저장"
            id="finish-btn"
            @click="submitReview(item)"
          />
        </div>
      </div>
    </a-timeline-item>
  </a-timeline>
</template>

<script setup>
import VButtonSubmit from "@/components/Common/VButtonSubmit.vue";
import { useReviewStore } from "@/stores/review";
import { storeToRefs } from "pinia";
import { ref, watch } from "vue";
import { uploadReviewImg } from "@/api/review.js";
const reviewStore = useReviewStore();
const { writtenReview } = storeToRefs(reviewStore);
const { saveReviewTempNow } = reviewStore;
// const { sendProfile } = userStore;
const timelineItems = ref([
  { id: 1, name: "혜인식탁", showDiv: false },
  { id: 2, name: "형민식탁", showDiv: false },
  { id: 3, name: "예은식탁", showDiv: false },
]);

const props = defineProps({
  item: Object,
});

console.log("item", props.item);
watch(() => {
  console.log("timelinewrite item", props.item.dailyPlan);
  timelineItems.value = props.item.dailyPlan;
});
function toggle(item) {
  item.showDiv = !item.showDiv;
}

function submitReview(item) {
  item.review = item.tempReview; // 리뷰 저장

  let param = {
    reviewId: item.reviewId,
    img: reviewImg,
    contents: item.review,
  };

  console.log("param", param);

  saveReviewTempNow(param);

  writtenReview.value.reviews.push(param);
  item.showDiv = false; // 입력 창 숨기기
}

var reviewImg = "";
const handleFileChange = async (event, item) => {
  const file = event.target.files[0];
  if (file && file.type.startsWith("image/")) {
    try {
      const imageUrl = await sendReviewImg(file); // Wait for the image URL
      item.imageSrc = imageUrl; // Set the image URL
      console.log("imgggg", item);
    } catch (error) {
      console.error("Error uploading file: ", error);
    }
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
<style>
#place-name-with-write {
  display: flex;
}

#write-icon {
  margin-left: 7px;
}

#place-name {
  font-size: 16px;
  font-weight: 500;
}

#place-img {
  width: 100vw;
  border-radius: 5px;
}

#place-img img {
  width: 25vw;
  height: 25vh;
  border-radius: 5px;
}

#upload-container {
  display: flex;
  flex-direction: column;
}

#preImage {
  width: 50%;
}

#finish-btn-container {
  width: 100%;
  text-align: end;
}

#finish-btn {
  margin: 5px 0;
}

textarea {
  padding: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 3px;
  color: #333;
  width: 100%;
}

input:focus,
textarea:focus {
  border: 1px solid #729fdd !important;
  outline: none;
}
</style>
