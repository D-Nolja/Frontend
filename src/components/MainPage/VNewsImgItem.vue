<template>
  <div id="news-card-container"></div>
</template>

<script setup></script>

<style scoped>
#news-card-container {
  width: 30vw;
  height: 300px;
  margin: 20px 0 0px 20px;
  padding: 40px 30px;
  border-radius: 15px;
  background: #f8f8f8;
  box-shadow: 0px 5.6px 140px 0px rgba(175, 173, 181, 0.1);
  background-image: url("../../assets/img/dang.png");
  background-size: cover;
  background-position: center;
  position: relative; /* 가상 요소의 위치 기준점 설정 */
}
#news-card-container::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.15); /* 흰색 반투명 오버레이 */
  border-radius: 15px; /* 컨테이너의 border-radius와 일치 */
}
</style>
