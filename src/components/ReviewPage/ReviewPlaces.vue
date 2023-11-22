<template>
  <div id="review-places-container">
    <ReviewPlaceCard />
    <ReviewPlaceCard />
    <ReviewPlaceCard />
    <ReviewPlaceCard />
    <ReviewPlaceCard />
  </div>
</template>

<script setup>
import ReviewPlaceCard from "./ReviewPlaceCard.vue";
</script>

<style scoped>
#review-places-container {
  width: 60vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
