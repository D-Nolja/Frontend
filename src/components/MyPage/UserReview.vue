<template>
  <div class="review-card-container">
    <UserReviewItem v-for="item in reviewItems" :key="item.planId" :review="item" />
  </div>
</template>

<script setup>
import UserReviewItem from "../MyPage/Item/userReviewitem.vue";
import { useReviewStore } from "@/stores/review.js";
import { storeToRefs } from "pinia";
import { onMounted, watch, ref } from "vue";

const reviewStore = useReviewStore();
const { reviewList } = storeToRefs(reviewStore)
const { showReviewList } = reviewStore;

const getList = async () => {
  await showReviewList();
}

onMounted(() => {
  getList();
})

const reviewItems = ref([])
watch(reviewList, () => {
  console.log("reviewList", reviewList.value);
  reviewItems.value = reviewList.value;
})
</script>

<style scoped>
.review-card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
