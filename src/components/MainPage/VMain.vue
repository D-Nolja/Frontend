<template>
  <div class="contents-container">
    <VHero id="main-hero" data-aos="fade-up" data-aos-duration="1500" />
    <div class="main-card1-container">
      <VMainCard
        v-for="(cardTxt, index) in mainCardTxt"
        :key="cardTxt.title"
        :cardTxt="cardTxt"
        data-aos="fade-up"
        :data-aos-delay="index * 300"
        data-aos-easing="linear"
        data-aos-duration="300"
      />
    </div>
    <VBanner data-aos="slide-up" data-aos-duration="1000" />

    <VNews
      data-aos="fade-left"
      data-aos-easing="linear"
      data-aos-duration="2000"
      class="news"
    />
  </div>
</template>

<script setup>
import VHero from "./VHero.vue";
import VMainCard from "./VMainCard.vue";
import VBanner from "./VBanner.vue";
import VNews from "./VNews.vue";
const mainCardTxt = [
  {
    iconSrc: "/mainCardIcon/mc_icon1.svg",
    title: "Pick-up Date",
    txt: "당신과 꼬리 흔드는 친구가 즐길 수 있는 완벽한 시간을 알려주세요",
  },
  {
    iconSrc: "/mainCardIcon/mc_icon2.svg",
    title: "Choose Location",
    txt: "해변 산책로부터 반려견이 뛰어놀 수 있는 공원까지, 당신과 반려견을 위한 특별한 장소를 선택해 보세요",
  },
  {
    iconSrc: "/mainCardIcon/mc_icon3.svg",
    title: "Book your Places",
    txt: "모든 준비가 끝났어요. 여행 일정을 확인하고, 꿈에 그리던 여행을 예약하세요. ",
  },
];
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
  margin: 50px 0 60px 0;
}
</style>
