<template>
  <div class="contents-container">
    <ReviewWriteAll />
    <ReviewPlaces />
  </div>
</template>

<script setup>
import ReviewPlaces from "./ReviewWritePlaces.vue";
import ReviewWriteAll from "./ReviewWriteAll.vue";
</script>

<style scoped>
.contents-container {
  min-height: 70vh;
  width: 100%;
  align-items: center;
  margin: 90px auto;
}
</style>
