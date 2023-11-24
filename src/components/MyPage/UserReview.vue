<template>
  <div class="review-card-container">
    <UserReviewItem
      v-for="item in reviewItems"
      :key="item.planId"
      :review="item"
      @click="mvReviewDetail(item.planId)"
    />
  </div>
</template>

<script setup>
import UserReviewItem from "../MyPage/Item/userReviewitem.vue";
import { useReviewStore } from "@/stores/review.js";
import { storeToRefs } from "pinia";
import { onMounted, watch, ref } from "vue";
import { useRouter } from "vue-router";
import VButtonSubmit from "../Common/VButtonSubmit.vue";

const router = useRouter();
const reviewStore = useReviewStore();
const { reviewList } = storeToRefs(reviewStore);
const { showReviewList, showReviewDetail } = reviewStore;

const getList = async () => {
  await showReviewList();
};

onMounted(() => {
  getList();
});

const reviewItems = ref([]);
watch(reviewList, () => {
  console.log("reviewList", reviewList.value);
  // getList();
  reviewItems.value = reviewList.value;
});

onMounted(() => {
  console.log("reviewItems.value", reviewItems.value);
});

const mvReviewDetail = async (pid) => {
  // 리뷰 정보 가져오기
  console.log("reviewItems.value", pid);
  await showReviewDetail(pid);
  router.push({ name: "review" });
};
</script>

<style scoped>
.review-card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
