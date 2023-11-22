<template>
  <div id="review-places-container">
    <ReviewPlaceCard v-for="mapId in mapIdAll" :key="mapId" :mapId="mapId" />
  </div>
</template>

<script setup>
import ReviewPlaceCard from "./ReviewPlaceCard.vue";

const temp = [1, 2, 3, 4];
const mapIdAll = [];
temp.map((item) => {
  console.log("map" + item);
  mapIdAll.push("map" + item);
});
</script>

<style scoped>
#review-places-container {
  width: 60vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
