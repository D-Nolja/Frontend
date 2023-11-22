<template>
  <div id="date-picker-container">
    <div ref="wrapperRef">
      <a-space>
        <a-range-picker
          v-model:value="dateRange"
          :open="true"
          :size="large"
          :disabledDate="disabledDate"
        />
      </a-space>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";

const dateRange = ref([]);
const maxRange = 4; // 최대 선택 가능 일수
const wrapperRef = ref(null); // DOM 요소를 참조하기 위한 ref
const height = ref(0);
onMounted(() => {
  if (wrapperRef.value) {
    console.log("달력의 높이:", wrapperRef.value.offsetHeight);
    height.value = wrapperRef.value.offsetHeight * 100;
  }
});

watch(dateRange, (newValue) => {
  if (newValue && newValue.length === 2) {
    const startDate = newValue[0].$d;
    const endDate = newValue[1].$d;

    console.log("시작 날짜:", formatDate(startDate));
    console.log("종료 날짜:", formatDate(endDate));
  }
});

const formatDate = (value) => {
  const date = new Date(value);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");

  return `${year}/${month}/${day}`;
};

const disabledDate = (current) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (!dateRange.value[0]) {
    return current.valueOf() < today.valueOf();
  }

  const startDate = dateRange.value[0].$d;
  const endDateLimit = new Date(startDate);
  endDateLimit.setDate(startDate.getDate() + maxRange);

  return current.valueOf() > endDateLimit.valueOf();
};
</script>

<style scoped>
#date-picker-container {
  display: flex;
  justify-content: center;

  height: 320px;
}

:where(.css-dev-only-do-not-override-185kyl0) .ant-picker-dropdown {
  position: static !important;
}
::v-deep .ant-picker-panel-container {
  display: flex;
  justify-content: center;
  /* 필요한 경우 여기에 추가 스타일을 적용하세요 */
}
</style>
