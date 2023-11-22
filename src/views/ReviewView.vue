<script setup>
import TheHeader from "@/components/layout/TheHeader.vue";
import TheFooter from "@/components/layout/TheFooter.vue";
import ReviewContents from "@/components/ReviewPage/ReviewContents.vue";
</script>

<template>
  <div class="contents-container">
    <the-header></the-header>
    <ReviewContents />
    <the-footer></the-footer>
  </div>
</template>

<style scoped>
.contents-container {
  display: flex;
  flex-direction: column;
}
</style>
