<template>
  <div class="review-card-container">
    <UserReviewItem />
    <UserReviewItem />
  </div>
</template>

<script setup>
import UserReviewItem from "../MyPage/Item/userReviewitem.vue";
</script>

<style scoped>
.review-card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
