<script setup>
import QnaList from "./QnaList.vue";
</script>

<template>
  <div class="contents-container">
    <p class="qna-container">QNA</p>
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
</style>
