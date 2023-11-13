<template>
  <div class="review-card-container">
    <user-review-item></user-review-item>
  <user-review-item></user-review-item>
  <user-review-item></user-review-item>
  <user-review-item></user-review-item>
</div>
 
</template>

<script setup>
import UserReviewItem from './Item/UserReviewItem.vue';
</script>

<style scoped>
.review-card-container{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>