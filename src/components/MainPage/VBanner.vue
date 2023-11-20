<template>
  <a
    v-for="banner in banners"
    :key="banner.title"
    :href="banner.link"
    target="_blank"
    rel="noopener noreferrer"
    class="main-card2-container"
    :style="getBackgroundStyle(banner.img)"
  ></a>
</template>

<script setup>
import { useNewsStore } from "@/stores/news.js";
import { storeToRefs } from "pinia";
const newsStore = useNewsStore();
const { banners } = storeToRefs(newsStore);
const { getNewsInfo } = newsStore;

getNewsInfo();

function getBackgroundStyle(imageUrl) {
  return {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: "cover", // 또는 필요에 따라 다른 스타일 설정
    backgroundPosition: "top",
  };
}
</script>

<style scoped>
.main-card2-container {
  width: 92vw;
  height: 405px;

  border-radius: 1.9375rem;
}
</style>
