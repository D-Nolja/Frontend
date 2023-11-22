<template>
  <div id="review-places-container">
    <ReviewPlaceCard v-for="mapId in mapIdAll" :key="mapId" :mapId="mapId" />
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
const router = useRouter();
const temp = [1, 2, 3, 4];
const mapIdAll = [];
temp.map((item) => {
  console.log("map" + item);
  mapIdAll.push("map" + item);
});

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
