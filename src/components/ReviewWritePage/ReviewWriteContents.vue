<template>
  <div class="contents-container">
    <div id="notice">
      <p>안녕하세요! 제주도에서 멋진 시간을 보내셨나요?</p>
      <p>
        여러분의 소중한 여행 경험을 다른 반려견 동반 여행자들과 공유하고
        싶습니다. 여행 후기를 작성해 주세요!
      </p>
    </div>
    <ReviewWriteAll />
    <ReviewPlaces />
  </div>
</template>

<script setup>
import ReviewPlaces from "./ReviewWritePlaces.vue";
import ReviewWriteAll from "./ReviewWriteAll.vue";





</script>

<style scoped>
.contents-container {
  min-height: 70vh;
  width: 100%;
  align-items: center;
  margin: 90px auto;
}

#notice {
  margin: 30px 0;
  width: 60vw;
  background-color: #8ab4ff;
  height: 70px;
  border-radius: 10px;
  color: #fff;
  padding: 10px;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: 500;
  line-height: 20px;
}
</style>
