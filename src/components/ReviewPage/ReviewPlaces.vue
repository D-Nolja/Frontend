<template>
  <div id="review-places-container">
    <ReviewPlaceCard
      v-for="content in contents"
      :key="content.day"
      :item="content"
    />
    <!-- <ReviewPlaceCard v-for="mapId in mapIdAll" :key="mapId" :mapId="mapId" /> -->
  </div>
</template>

<script setup>
import ReviewPlaceCard from "./ReviewPlaceCard.vue";
import { useReviewStore } from "@/stores/review.js";
import { storeToRefs } from "pinia";
import { onMounted, ref, watch } from "vue";
const reviewStore = useReviewStore();
const { reviewDetail } = storeToRefs(reviewStore);

const contents = ref(null);
onMounted(() => {
  contents.value = reviewDetail.value.reviewList;
  console.log("contents.value", contents.value);
});
watch(reviewDetail, () => {
  console.log("contents.value", contents.value);
  console.log(reviewDetail.value.reviewList);
});
console.log("reviewDetail", reviewDetail.value);

// const temp = [1, 2, 3, 4];
// const mapIdAll = [];
// temp.map((item) => {
//   console.log("map" + item);
//   mapIdAll.push("map" + item);
// });
</script>

<style scoped>
#review-places-container {
  width: 60vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
