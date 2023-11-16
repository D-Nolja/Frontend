<template>
  <table>
    <tr>
      <th>No</th>
      <th>제목</th>
      <th>작성자</th>
      <th>작성일</th>
    </tr>
    <QnaListItem />
    <QnaListItem />
    <QnaListItem />
  </table>
</template>

<script setup>
import QnaListItem from "./QnaListItem.vue";
</script>

<style scoped>
table {
  width: 60%;
  border-collapse: collapse;
  margin: 20px auto; /* 가운데 정렬 */
}

th,
td {
  padding: 10px; /* 셀 내부 여백 */
  text-align: center; /* 텍스트 가운데 정렬 */
}

th {
  background-color: #fcfcfc; /* 헤더 배경 색상 */
  color: #333; /* 헤더 텍스트 색상 */
  font-weight: bold; /* 헤더 폰트 두께 */
  border-bottom: 1px solid #eee;
}
</style>
