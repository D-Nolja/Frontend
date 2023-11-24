<template>
  <div
    ref="sideMenu"
    class="side-menu"
    :style="{ maxWidth: scrollableSectionWidth }"
  >
    <div id="plan-title">
      <!-- <p id="plan-name">싸방학 언제 와</p> -->
      <VInput txt="제목을 입력하세요" id="name-input" v-model="planName" />
      <!-- <p id="plan-date">2023.12.04 ~ 2023.12.08</p> -->
      <div id="plan-date" class="plan-date-input">
        <!-- <div class="start-container">
          <p>여행 시작일</p>
          <input type="date" v-model="startDate" />
        </div>
        <div class="end-container">
          <p>여행 종료일</p>
          <input type="date" v-model="endDate" />
        </div> -->

        <div>
          <VDatePicker />
        </div>
      </div>
    </div>
    <div id="plan-title-container">
      <side-menu-search
        v-if="day === 'all'"
        :places="places"
      ></side-menu-search>

      <!-- <div class="scrollable-section" @mousedown="startDrag"> -->

      <div class="select-plan-section" @mousedown="startDrag">
        <div class="scrollable-section">
          <SideMenuSelect
            v-for="dayPlan in filterdDayPlans"
            :key="dayPlan.day"
            :dayPlan="dayPlan"
            @mark-place="handleMarkPlace"
          />
        </div>

        <!-- 수정 -->
        <div class="drag-handle">제발... 보여줘....</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import VDatePicker from "@/components/Common/VDatePicker.vue";
import SideMenuSelect from "../SideMenu/SideMenuSelect.vue";
import SideMenuSearch from "../SideMenu/SideMenuSearch.vue";
import { usePlaceStore } from "@/stores/place.js";
import { storeToRefs } from "pinia";
import { ref, onMounted, onUnmounted, watch } from "vue";
import { useRoute } from "vue-router";
import { watchEffect, computed } from "vue";
import VInput from "../Common/VInput.vue";
const placeStore = usePlaceStore();
const { places, dayPlaces, planDetails, selectPlanOptions } =
  storeToRefs(placeStore);
const startDate = ref("2023-12-04"); // 시작 날짜의 기본값 설정
const endDate = ref("2023-12-08"); // 종료 날짜의 기본값 설정
const planName = ref("");

watch(() => {
  selectPlanOptions.value.title = planName.value;
  selectPlanOptions.value.start = startDate.value;
  selectPlanOptions.value.end = endDate.value;

  console.log(selectPlanOptions.value);
});

onMounted(() => {
  selectPlanOptions.value.title = "";
  selectPlanOptions.value.start = "";
  selectPlanOptions.value.end = "";
});

const tempDay = {
  day: 1,
  date: "2023 / 12 / 12",
};
const emit = defineEmits("markPlace");
function handleMarkPlace(place) {
  console.log("planView", place);
  emit("markPlace", place);
}
const route = useRoute();
const day = ref("all");
const scrollableSectionWidth = ref("900px"); // 초기 너비 값

const updateScrollableSectionWidth = (newWidth) => {
  scrollableSectionWidth.value = newWidth + "px";
};

let widthValue = ref(300);
watchEffect(() => {
  if (route.params.day && !isNaN(route.params.day)) {
    day.value = route.params.day.toString();
    widthValue.value = 300;
  } else {
    day.value = "all";
    widthValue.value = 900;
  }
  console.log("현재 위치", day.value);

  updateScrollableSectionWidth(widthValue.value);
});

const filterdDayPlans = computed(() => {
  if (day.value === "all") {
    console.log("planDetails", planDetails.value);
    return planDetails.value;
  } else {
    return planDetails.value.filter(
      (planDetail) => planDetail.day.toString() === day.value
    );
  }
});

// const dayPlans = ref([
//   {
//     number: 1,
//     date: 12.05,
//     places: [
//       {
//         name: "혜인식탁",
//         type: "맛집",
//         x: "33.24833404783013",
//         y: "126.56835909631332",
//         address: "도로명 주소1",
//         tel: "010-1234-1234",
//         openopenTime: "11:30 ~ 16:00",
//         info: "반려동물 동반 가능 / 무료",
//       },
//     ],
//   },
//   {
//     number: 2,
//     date: 12.06,
//     places: [
//       {
//         name: "원빈식탁",
//         type: "맛집",
//         x: "33.27874670832252",
//         y: "126.70801347099405",
//         address: "도로명 주소1",
//         tel: "010-9876-9876",
//         openopenTime: "12:30 ~ 15:00",
//         info: "반려동물 동반 가능 / 무료",
//       },
//     ],
//   },
//   {
//     number: 3,
//     date: 12.07,
//     places: [
//       {
//         name: "은서식탁",
//         type: "맛집",
//         x: "33.2488301865394",
//         y: "126.32352822201112",
//         address: "도로명 주소1",
//         tel: "010-9876-9876",
//         openopenTime: "12:30 ~ 15:00",
//         info: "반려동물 동반 가능 / 무료",
//       },
//     ],
//   },
// ]);

const sideMenu = ref(null);
const minWidth = 600; // 최소 너비 설정
const maxWidth = 1200; // 최대 너비 설정
let startX = 0;
let startWidth = 0;

const onMouseMove = (e) => {
  let newWidth = startWidth + e.clientX - startX;
  newWidth = Math.max(minWidth, newWidth);
  newWidth = Math.min(maxWidth, newWidth);
  if (sideMenu.value) {
    sideMenu.value.style.width = `${newWidth}px`;
  }
};

const onMouseUp = () => {
  document.removeEventListener("mousemove", onMouseMove);
  document.removeEventListener("mouseup", onMouseUp);
  if (sideMenu.value) {
    sideMenu.value.classList.remove("dragging");
  }
};

const startDrag = (e) => {
  if (e.target.classList.contains("drag-handle")) {
    console.log("우와 마우스가 움직여");
    startX = e.clientX;
    startWidth = parseInt(
      document.defaultView.getComputedStyle(sideMenu.value).width,
      10
    );
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
    e.preventDefault();
    if (sideMenu.value) {
      sideMenu.value.classList.add("dragging");
    }
  }
};

onMounted(() => {
  if (sideMenu.value) {
    sideMenu.value.classList.remove("dragging");
  }
});

onUnmounted(() => {
  document.removeEventListener("mousemove", onMouseMove);
  document.removeEventListener("mouseup", onMouseUp);
});
</script>

<style scoped>
.side-menu {
  width: calc(300px + 300px);
  /* 고정 + 스크롤 */
  max-width: 900px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-right: 1.5px solid #eaeaea;
}

#plan-name,
#plan-date {
  color: #000;
  font-style: normal;
  font-weight: 600;
  line-height: 1.72888rem;
  letter-spacing: 0.03375rem;
}

.plan-date-input {
  display: flex;
  width: 270px;
}

#plan-name {
  font-size: 22px;
}

#plan-date {
  font-size: 18px;
}

.scrollable-section {
  width: 600px;
  display: flex;
  overflow-x: auto;
}

.dragging {
  cursor: pointer;
}

/* .end-container,
.start-container {
  display: flex;
} */
#plan-title-container {
  display: flex;
  min-height: 86vh;
}

#plan-title {
  margin: 30px 0 15px 15px;
  width: 600px;
}

#plan-name {
  margin-bottom: 10px;
  font-weight: 700;
}

#plan-date {
  color: #b7b7b7;
  font-weight: 500;
}

.drag-handle {
  width: 600px;
  background-color: #333;
}

#name-input {
  height: 2.5rem;
  width: 270px;
  margin-bottom: 7px;
}
</style>
