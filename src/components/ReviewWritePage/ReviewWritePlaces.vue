<template>
  <div id="review-places-container">

    <ReviewPlaceCard v-for="thep in thePlanValue" :key="thep.day" :item="thep" />
    <VButtonSubmit txt="저장하기" color="grey" class="save-btn" @click="saveReview" />
  </div>
</template>

<script setup>
import ReviewPlaceCard from "./ReviewWritePlaceCard.vue";
import VButtonSubmit from "@/components/Common/VButtonSubmit.vue";
import { useRouter } from "vue-router";
import { usePlanStore } from '@/stores/plan.js';
import { useReviewStore } from "@/stores/review";
import { storeToRefs } from "pinia";
import { watch, ref } from "vue";

const planStore = usePlanStore();
const reviewStore = useReviewStore();
const { writtenReview } = storeToRefs(reviewStore);
const { thePlan } = storeToRefs(planStore);
const thePlanValue = ref(null);
const router = useRouter();

watch(() => {
  console.log("thePlan", thePlan.value);
  thePlanValue.value = thePlan.value.planDetails;
  writtenReview.value.planId = thePlanValue.value.planId;
})

const saveReview = () => {
  console.log("click");
  router.push({ name: "myPage" });
};
</script>

<style scoped>
#review-places-container {
  width: 60vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.save-btn {
  margin-top: 0;
}
</style>
