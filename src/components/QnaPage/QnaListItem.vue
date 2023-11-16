<template>
  <tr>
    <td>번호</td>
    <td>제목</td>
    <td>작성자</td>
    <td>작성일</td>
  </tr>
</template>

<script setup></script>

<style scoped>
th,
td {
  padding: 10px; /* 셀 내부 여백 */
  text-align: center; /* 텍스트 가운데 정렬 */
}

tr {
  padding: 10px 0;
  border-bottom: 1px solid #eee;
}
th {
  background-color: #fcfcfc; /* 헤더 배경 색상 */
  color: #333; /* 헤더 텍스트 색상 */
  font-weight: bold; /* 헤더 폰트 두께 */
  border-bottom: 1px solid #eee;
}
tr:hover {
  background-color: #f5f5f5; /* 마우스를 올렸을 때의 배경 색상 */
  color: #555; /* 마우스를 올렸을 때의 텍스트 색상 */
}
</style>
