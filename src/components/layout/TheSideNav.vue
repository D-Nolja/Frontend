<script setup>
import VButton from "@/components/common/VBtn.vue";
import { ref, computed, watch } from "vue";
import { useRouter } from "vue-router";
import { usePlaceStore } from "@/stores/place";
import { storeToRefs } from "pinia";

const placeStore = usePlaceStore();
let {
  stage,
  daynumbers,
  searchParams,
  selectPlanOptions,
  dayPlaces,
  dayPlacesDetail,
  markerLatLngs,
  clickedDays,
} = storeToRefs(placeStore);
const { selectSearchMethod, savePlanNow } = placeStore;
const clickedButton = ref(null);
const clickedAllButton = ref(true);
const router = useRouter();
const canIMoveNext = ref(true);
const canIMoveBefore = ref(false);

watch(() => {
  if (stage.value == 2) {
    canIMoveNext.value = false;
  } else {
    canIMoveNext.value = true;
  }
});

watch(() => {
  if (stage.value > 0) {
    canIMoveBefore.value = true;
  } else {
    canIMoveBefore.value = false;
  }
});
let temp = [];
const navigate = (path, day = null) => {
  markerLatLngs.value = [];
  temp = [];

  console.log("markerLatLngs.value", markerLatLngs.value);
  if (path === "/plan/all") {
    clickedAllButton.value = true;
    clickedButton.value = null;
  } else {
    console.log("clickedDays.value in nav", clickedDays.value);
    clickedAllButton.value = false;
    clickedButton.value = day;
    console.log("dayPlacesDetail", dayPlacesDetail.value[day]);
    clickedDays.value = !clickedDays.value;
    dayPlacesDetail.value[day].forEach((place) => {
      const newLatLng = { x: place.x, y: place.y };
      temp.push(newLatLng);
    });
    markerLatLngs.value = temp;
  }

  console.log("dayPlageaksjfs", selectPlanOptions.value);

  console.log(
    "selectPlanOptions.value.plans[day-1]",
    selectPlanOptions.value.plans[day - 1]
  );
  console.log("clickedAllButton : ", clickedAllButton.value);
  console.log("clickedButton : ", clickedButton.value);

  router.push(path);
  // clickedDays.value = false;
};

const allButtonColor = computed(() =>
  clickedAllButton.value ? "blue" : "white"
);

const testDays = computed(() => {
  const tmpDays = [];

  let tmpNumber = daynumbers.value;
  for (let i = 1; i <= tmpNumber; i++) {
    tmpDays.push({
      day: i,
      color: clickedButton.value == i ? "blue" : "white",
    });
  }
  return tmpDays;
});

const moveMain = () => {
  router.push({ name: "home" });
};

const moveBefore = () => {
  searchParams.value.limit = "";
  searchParams.value.category = "";
  searchParams.value.keyword = "";
  console.log("편집!!!");
  stage.value = stage.value - 1;
  selectSearchMethod(searchParams.value);
};

const moveNext = () => {
  searchParams.value.limit = "";
  searchParams.value.category = "";
  searchParams.value.keyword = "";
  console.log("다음 이동 ---- ", searchParams.value);
  console.log("다음!!!");

  stage.value = stage.value + 1;
  selectSearchMethod(searchParams.value);
};

const save = async () => {
  console.log("계획을 저장해보자");
  console.log("계획 저장 ", selectPlanOptions.value);
  await savePlanNow();

  router.push({ name: "myPage" });
};
</script>

<template>
  <nav class="sideNav">
    <div>
      <img
        src="../../assets/img/avatar.svg"
        alt="icon"
        id="logo"
        @click="moveMain"
      />
      <VButton
        :key="`all-${clickedAllButton.value}`"
        text="전체일정"
        @click="navigate('/plan/all')"
        class="v-btn"
        :color="allButtonColor"
      />

      <VButton
        v-for="dayItem in testDays"
        :key="dayItem.day"
        :text="`${dayItem.day}일차`"
        :color="dayItem.color"
        size="small"
        @click.prevent="navigate(`/plan/${dayItem.day}`, dayItem.day)"
        class="v-btn"
      />
    </div>
    <div>
      <VButton
        v-if="canIMoveBefore"
        text="이전"
        @click="moveBefore"
        class="v-btn"
      />
      <VButton
        v-if="canIMoveNext"
        text="다음"
        @click="moveNext"
        class="v-btn"
      />
      <VButton v-if="!canIMoveNext" text="저장" @click="save" class="v-btn" />
    </div>
  </nav>
</template>

<style scoped>
#logo {
  width: 65%;
  align-items: center;
  margin: 0 auto;
}

.sideNav {
  padding: 10px 10px;
  width: 8.25rem;
  display: flex;
  flex-direction: column;
  border-right: 1.5px solid #eaeaea;
  align-items: center;
  justify-content: space-between;
}

.sideNav div {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.v-btn:hover {
  background-color: #f0f0f0; /* 마우스 오버 시 밝은 회색 배경 */
  color: #333; /* 더 어두운 텍스트 색상 */
  cursor: pointer; /* 클릭 가능함을 나타내는 커서 */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); /* 그림자 효과 */
  transform: scale(1.01); /* 버튼 크기 증가 */
  transition: all 0.3s ease; /* 부드러운 전환 효과 */
}
</style>
