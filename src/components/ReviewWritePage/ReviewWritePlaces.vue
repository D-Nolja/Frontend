<template>
  <div id="review-places-container">
    <ReviewPlaceCard
      v-for="thep in thePlanValue"
      :key="thep.day"
      :item="thep"
    />
    <VButtonSubmit
      txt="저장하기"
      color="grey"
      class="save-btn"
      @click="saveReview"
    />
  </div>
</template>

<script setup>
import ReviewPlaceCard from "./ReviewWritePlaceCard.vue";
import VButtonSubmit from "@/components/Common/VButtonSubmit.vue";
import { useRouter } from "vue-router";
import { usePlanStore } from "@/stores/plan.js";
import { useReviewStore } from "@/stores/review";
import { storeToRefs } from "pinia";
import { watch, ref, onMounted } from "vue";

const planStore = usePlanStore();
const reviewStore = useReviewStore();
const { saveReviewNow } = reviewStore;
const { writtenReview } = storeToRefs(reviewStore);
const { thePlan } = storeToRefs(planStore);
const thePlanValue = ref(null);
const router = useRouter();

onMounted(() => {
  console.log("!!!", thePlan.value.planId);
  writtenReview.value.planId = thePlan.value.planId;
});

watch(() => {
  console.log("thePlan", thePlan.value);
  thePlanValue.value = thePlan.value.planDetails;
});

const saveReview = async () => {
  console.log("click");

  console.log("writtenReview saveReview", writtenReview.value);
  await saveReviewNow();
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
