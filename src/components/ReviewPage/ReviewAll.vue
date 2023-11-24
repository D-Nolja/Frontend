<template>
  <div id="review-all-container">
    <div id="review-all-img-container">
      <img :src="reviewDetail.mainImg" alt="" srcset="" id="review-all-img" />
    </div>
    <div id="review-all-txt-container">
      <div id="review-all-txt-title-container">
        <p id="review-all-txt-title">{{ reviewDetail.title }}</p>
        <p id="review-all-txt-date">
          {{ reviewDetail.start }}~{{ reviewDetail.end }}
        </p>
      </div>
      <p id="review-all-txt">
        {{ reviewDetail.mainContent }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { useReviewStore } from "@/stores/review.js";
import { storeToRefs } from "pinia";
const reviewStore = useReviewStore();
const { reviewDetail } = storeToRefs(reviewStore);

console.log("reviewDetail", reviewDetail.value);
</script>

<style scoped>
#review-all-container {
  width: 60vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px 0;
}
#review-all-img-container {
  width: 100vw;
  border-radius: 5px;
  margin: 20px 0;
}

#review-all-img {
  width: 60vw;
  border-radius: 5px;
}

#review-all-txt-title-container {
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
}
#review-all-txt-title {
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5rem; /* 85.714% */
}

#review-all-txt-date {
  font-size: 0.9rem;
  font-style: normal;
  font-weight: 300;
  line-height: 1.5rem; /* 85.714% */

  color: #b9b9b9;
}

#review-all-txt {
  line-height: 1.3rem;
}
</style>
