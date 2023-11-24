<script setup>
import TheHeader from "@/components/layout/TheHeader.vue";
import TheFooter from "@/components/layout/TheFooter.vue";
import ReviewModifyContents from "../components/ReviewModifyPage /ReviewModifyContents.vue";
</script>

<template>
  <div class="contents-container">
    <the-header></the-header>
    <ReviewModifyContents />
    <the-footer></the-footer>
  </div>
</template>

<style scoped>
.contents-container {
  display: flex;
  flex-direction: column;
}
</style>
