<template>
  <div id="modal-container">
    <div>
      <p>여행 기간이 어떻게 되시나요?</p>
      <div>
        <p>여행 기간은 최대 5일까지 설정 가능합니다.</p>
        <p>[시작 날짜, 도착 날짜] 순서로 입력해주세요.</p>
      </div>
    </div>

    <div>
      <VDatePicker />
    </div>
    <div>
      <VButtonSubmit txt="선택" />
    </div>
  </div>
</template>

<script setup>
import VButtonSubmit from "@/components/Common/VButtonSubmit.vue";
import VDatePicker from "./VDatePicker.vue";
</script>

<style scoped>
.custom-range-picker {
  /* width: 100%; */
  height: 500px;
  border-radius: 5px;
}

#modal-container {
  border: 1px solid #ececec;
  width: 200px;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

#modal-container > div {
  width: 80%;
  text-align: center;
  margin-bottom: 20px;
}
</style>
