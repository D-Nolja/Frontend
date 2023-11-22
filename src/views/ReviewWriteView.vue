<script setup>
import TheHeader from "@/components/layout/TheHeader.vue";
import TheFooter from "@/components/layout/TheFooter.vue";
import ReviewWriteContents from "@/components/ReviewWritePage/ReviewWriteContents.vue";
</script>

<template>
  <div class="contents-container">
    <the-header></the-header>
    <ReviewWriteContents />
    <the-footer></the-footer>
  </div>
</template>

<style scoped>
.contents-container {
  display: flex;
  flex-direction: column;
}
</style>
