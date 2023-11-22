<template>
  <div class="contents-container">
    <ReviewAll />
    <ReviewPlaces />
  </div>
</template>

<script setup>
import ReviewPlaces from "./ReviewPlaces.vue";
import ReviewAll from "./ReviewAll.vue";
</script>

<style scoped>
.contents-container {
  min-height: 70vh;
  width: 100%;
  align-items: center;
  margin: 90px auto;
}
</style>
