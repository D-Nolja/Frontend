<template>
  <div class="main-card3-container">
    <div id="news-container">
      <div id="news-title-container">
        <div id="news-sub">
          <p>알림마당</p>
          <img src="../../assets/img/line.svg" alt="line" />
        </div>
        <div id="news-title">
          <p>댕놀자의</p>
          <p>새로운 여행 소식을</p>
          <p>만나보세요</p>
        </div>
      </div>

      <div id="news-items-container">
        <VNewsItem
          v-for="newsItem in newsItems"
          :key="newsItem.title"
          :item="newsItem"
        />
        <VNewsImgItem />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useNewsStore } from "@/stores/news.js";
import { storeToRefs } from "pinia";
import VNewsItem from "./VNewsItem.vue";
import VNewsImgItem from "./VNewsImgItem.vue";
const newsStore = useNewsStore();
const { newsItems } = storeToRefs(newsStore);
</script>

<style scoped>
.main-card3-container {
  background-color: #fff;
  margin: 70px 0 50px 0;
  width: 92vw;
  border-radius: 1.9375rem;
}

#news-container {
  display: flex;
  flex-direction: row;
}

#news-title-container {
  width: 40vw;
}

#news-sub {
  margin-left: 10px;
  display: flex;
  margin: 20px 0;
}

#news-sub p {
  margin-right: 10px;
  color: #333;

  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 54px */
  letter-spacing: -0.72px;
}

#news-title {
  color: #333;
  font-family: Pretendard;
  font-size: 42px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 105px */
  letter-spacing: -1.4px;
}
#news-items-container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row-reverse;
}
</style>
