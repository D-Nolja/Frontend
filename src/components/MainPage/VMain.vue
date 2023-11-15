<template>
    <div class="contents-container">
        <VHero id="main-hero"/>
        <div class="main-card1-container">
          <VMainCard/>
          <VMainCard/>
          <VMainCard/>
        </div>
        <div class="main-card2-container">뭐</div>
        <div class="main-card3-container">넣을지</div>
        <div class="main-card4-container">모르겠어요..</div>
    </div>
</template>

<script setup>
import VHero from './VHero.vue';
import VMainCard from './VMainCard.vue'
</script>

<style scoped>
.contents-container{
  min-height: 70vh;
  width: 100%;
  align-items: center;
  margin: 80px auto;
  justify-content: center;
}


.main-card1-container{
  display: flex;
  width: 92vw;
  justify-content: space-between;
  margin: 50px 0;

}

.main-card2-container, .main-card3-container, .main-card4-container{
  width: 92vw;
  height: 780px;
  border-radius: 1.9375rem;
  background-color: #F7F8F9;
  margin-bottom: 50px;
  

  /* delete */
  color: rgb(255, 171, 179);
  font-weight: bold;
  font-size: 60px;
  text-align: center;
  line-height: 780px;
}
</style>