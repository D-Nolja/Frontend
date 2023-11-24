<template>
  <div id="date-picker-container">
    <div ref="wrapperRef">
      <a-space>
        <a-range-picker
          v-model:value="dateRange"
          :size="large"
          :open="isOpen"
          :disabledDate="disabledDate"
        />
        <div class="openBtn-container">
          <VButtonSubmit @click="toggleOpen" id="openBtn" :txt="선택" />
        </div>
      </a-space>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";
import { usePlaceStore } from "@/stores/place.js";
import { storeToRefs } from "pinia";
import VButtonSubmit from "../Common/VButtonSubmit.vue";
const placeStore = usePlaceStore();
const { selectPlanOptions } = storeToRefs(placeStore);
const dateRange = ref([]);
const maxRange = 4; // 최대 선택 가능 일수
const wrapperRef = ref(null); // DOM 요소를 참조하기 위한 ref
const height = ref(0);
const isOpen = ref(false); // Define open state
onMounted(() => {
  // if (wrapperRef.value) {
  //   console.log("달력의 높이:", wrapperRef.value.offsetHeight);
  //   height.value = wrapperRef.value.offsetHeight * 100;
  // }
  console.log("selectPlanOptions.value", selectPlanOptions.value.start);
});

const toggleOpen = () => {
  isOpen.value = !isOpen.value;
};

let startDate = "";
let endDate = "";
watch(dateRange, (newValue) => {
  if (newValue && newValue.length === 2) {
    startDate = newValue[0].$d;
    endDate = newValue[1].$d;

    console.log("시작 날짜:", formatDate(startDate));
    console.log("종료 날짜:", formatDate(endDate));

    console.log("selectPlanOptions.value", selectPlanOptions.value.start);

    selectPlanOptions.value.start = formatDate(startDate);
    selectPlanOptions.value.end = formatDate(endDate);
  }
});

// watch(startDate, () => {
//   selectPlanOptions.value.start = startDate.value;
// });

// watch(endDate, () => {
//   selectPlanOptions.value.end = endDate.value;
// });

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

  return current.valueOf() < endDateLimit.valueOf();
};
</script>

<style scoped>
#openBtn {
  height: 30px;
  margin: 0;
}

.openBtn-container {
  display: flex;
  align-items: center;
}
/* #date-picker-container {
  display: flex;
  justify-content: center;
  height: 320px;
} */

/* :where(.css-dev-only-do-not-override-185kyl0) .ant-picker-dropdown {
  position: static !important;
}
::v-deep .ant-picker-panel-container {
  display: flex;
  justify-content: center;
} */
</style>
