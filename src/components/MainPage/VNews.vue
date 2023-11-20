<template>
  <div class="main-card3-container">넣넣</div>
</template>

<script setup>
import { useNewsStore } from "@/stores/news.js";
import { storeToRefs } from "pinia";
const newsStore = useNewsStore();
const { newsItems } = storeToRefs(newsStore);
</script>

<style scoped>
.main-card3-container {
  margin: 50px 0;
  width: 92vw;
  border-radius: 1.9375rem;
}
</style>
