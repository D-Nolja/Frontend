<script setup>
import QnaList from "./QnaList.vue";
</script>

<template>
  <div class="contents-container">
    <p class="qna-container">QNA</p>
    <div class="qna-info">
      <p>
        반려견과 함께 제주도 여행을 계획하시나요? 이 게시판은 여러분의 여행을
        더욱 특별하고 즐겁게 만들기 위해 마련되었습니다. 여러분의 활발한 참여와
        소중한 의견을 기다리고 있습니다. 제주도에서 반려견과의 즐거운 추억을
        만드세요!
      </p>
    </div>
    <QnaList></QnaList>
  </div>
</template>

<style scoped>
.contents-container {
  min-height: 70vh;
  width: 100%;
  align-items: center;
  margin: 80px auto;
}

.qna-container {
  margin-top: 40px;
  font-weight: 500;
  font-size: 22px;
}

.qna-info {
  width: 70%;
  padding: 10px;
  border: 1px solid #ececec;
  border-radius: 5px;
}
</style>
