<template>
  <div class="contents-container">
    <VHero id="main-hero" data-aos="fade-up" data-aos-duration="3000" />
    <div
      class="main-card1-container"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <VMainCard data-aos="zoom-in" data-aos-duration="1500" />
      <VMainCard data-aos="zoom-in" data-aos-duration="1500" />
      <VMainCard data-aos="zoom-in" data-aos-duration="1500" />
    </div>
    <div
      class="main-card2-container"
      data-aos="fade-left"
      data-aos-duration="3000"
    >
      뭐
    </div>
    <div
      class="main-card3-container"
      data-aos="fade-right"
      data-aos-duration="3000"
    >
      넣을지
    </div>
    <div
      class="main-card4-container"
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      모르겠어요..
    </div>
  </div>
</template>

<script setup>
import VHero from "./VHero.vue";
import VMainCard from "./VMainCard.vue";
</script>

<style scoped>
.contents-container {
  min-height: 70vh;
  width: 100%;
  align-items: center;
  margin: 80px auto;
  justify-content: center;
}

.main-card1-container {
  display: flex;
  width: 92vw;
  justify-content: space-between;
  margin: 50px 0;
}

.main-card2-container,
.main-card3-container,
.main-card4-container {
  width: 92vw;
  height: 780px;
  border-radius: 1.9375rem;
  background-color: #f7f8f9;
  margin-bottom: 50px;
  color: rgb(255, 171, 179);
  font-weight: bold;
  font-size: 60px;
  text-align: center;
  line-height: 780px;
}
</style>
