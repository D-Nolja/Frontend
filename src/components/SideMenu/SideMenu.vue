<template>
  <div ref="sideMenu" class="side-menu">
    <div id="plan-title">
      <p id="plan-name">싸방학 언제 와</p>
      <p id="plan-date">2023.12.04 ~ 2023.</p>
    </div>
    <div id="plan-title-container">
      <side-menu-search
        v-if="day === 'all'"
        :places="places"
      ></side-menu-search>

      <div class="scrollable-section" @mousedown="startDrag">
        <SideMenuSelect
          v-for="dayPlan in filterdDayPlans"
          :key="dayPlan.number"
          :dayPlan="dayPlan"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import SideMenuSelect from "../SideMenu/SideMenuSelect.vue";
import SideMenuSearch from "../SideMenu/SideMenuSearch.vue";
import { ref, onMounted, onUnmounted } from "vue";

import { useRoute } from "vue-router";
import { watchEffect, computed } from "vue";

const route = useRoute();
const day = ref("all");
watchEffect(() => {
  if (route.params.day && !isNaN(route.params.day)) {
    day.value = route.params.day.toString();
  } else {
    day.value = "all";
  }
  console.log("day : ", day.value);
});

const filterdDayPlans = computed(() => {
  if (day.value === "all") {
    return dayPlans.value;
  } else {
    return dayPlans.value.filter(
      (dayPlan) => dayPlan.number.toString() === day.value
    );
  }
});

const places = ref([
  {
    name: "혜인식탁",
    type: "맛집",
    x: "33.24833404783013",
    y: "126.56835909631332",
    address: "도로명 주소1",
    tel: "010-1234-1234",
    openTime: "11:30 ~ 16:00",
    info: "반려동물 동반 가능 / 무료",
  },
  {
    name: "원빈식탁",
    type: "맛집",
    x: "33.27874670832252",
    y: "126.70801347099405",
    address: "도로명 주소1",
    tel: "010-9876-9876",
    openTime: "12:30 ~ 15:00",
    info: "반려동물 동반 가능 / 무료",
  },
  {
    name: "형민식탁",
    type: "맛집",
    x: "33.239221362414035",
    y: "126.60445492699344",
    address: "도로명 주소1",
    tel: "010-9876-9876",
    openTime: "12:30 ~ 15:00",
    info: "반려동물 동반 가능 / 무료",
  },
  {
    name: "은서식탁",
    type: "맛집",
    x: "33.2488301865394",
    y: "126.32352822201112",
    address: "도로명 주소1",
    tel: "010-9876-9876",
    openTime: "12:30 ~ 15:00",
    info: "반려동물 동반 가능 / 무료",
  },
]);

const dayPlans = ref([
  {
    number: 1,
    date: 12.05,
    places: [
      {
        name: "혜인식탁",
        cate: "맛집",
        time: "11:30 ~ 16:00",
      },
      {
        name: "원빈식탁",
        cate: "맛집",
        time: "11:30 ~ 16:00",
      },
    ],
  },
  {
    number: 2,
    date: 12.06,
    places: [
      {
        name: "혜인식탁",
        cate: "맛집",
        time: "11:30 ~ 16:00",
      },
      {
        name: "원빈식탁",
        cate: "맛집",
        time: "11:30 ~ 16:00",
      },
    ],
  },
  {
    number: 3,
    date: 12.07,
    places: [
      {
        name: "혜인식탁",
        cate: "맛집",
        time: "11:30 ~ 16:00",
      },
      {
        name: "원빈식탁",
        cate: "맛집",
        time: "11:30 ~ 16:00",
      },
    ],
  },
]);

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
  width: calc(300px + 300px); /* 초기 너비 (고정 섹션 + 스크롤 섹션) */
  max-width: 900px; /* 최대 너비 */
  height: 100vh;
  display: flex; /* 내부 섹션들을 가로로 정렬 */
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

#plan-name {
  font-size: 22px;
}

#plan-date {
  font-size: 18px;
}

.scrollable-section {
  width: 600px; /* 스크롤 섹션의 초기 너비 */
  display: flex; /* 섹션들을 가로로 정렬 */
  overflow-x: auto; /* 가로 스크롤 허용 */
}

.dragging {
  cursor: pointer;
}

#plan-title-container {
  display: flex;
  min-height: 86vh;
}

#plan-title {
  margin: 30px 0 15px 15px;
  width: 300px;
}

#plan-name {
  margin-bottom: 10px;
  font-weight: 700;
}

#plan-date {
  color: #b7b7b7;
  font-weight: 500;
}
</style>
