<template>
  <div id="rplace-card-container">
    <img src="../../assets/img/rline.svg" alt="" srcset="" id="rplace-line" />
    <p id="rplace-day">Day {{ item.day }}</p>

    <div id="rplace-list">
      <VMap :mapId="mapId" :mapLocations="arrayLatLng" />
      <!-- <VMap :mapId="mapId" /> -->
      <!-- <VMap :mapId="mapId" /> -->
      <!-- center 잡기 -->
    </div>
    <VTimeline id="rplace-timeline" :item="item" />
    <VButtonSubmit txt="여행 후기 목록" color="default" id="replace-list-btn" />
  </div>
  <!-- <VMap /> -->
</template>

<script setup>
import VButtonSubmit from "@/components/Common/VButtonSubmit.vue";
import VTimeline from "@/components/Common/VTimeline.vue";
import VMap from "@/components/Common/Maps/VMap.vue";
import { onMounted, ref, watch } from "vue";
const props = defineProps({
  item: Object,
});

const mapId = ref("");

let arrayLatLng = ref([]);

watch(
  () => props.item.reviewDetails,
  (newDetails) => {
    if (newDetails && newDetails.length > 0) {
      arrayLatLng.value = newDetails.map((loc) => ({ x: loc.x, y: loc.y }));
    }
  },
  { immediate: true }
);
// onMounted(() => {
//   console.log("props.item.reviewDetails", props.item.reviewDetails);

//   let temp = [];
//   props.item.reviewDetails.forEach((loc) => {
//     // 새 객체를 생성하여 각 위치의 x, y 값을 저장
//     const newLatLng = { x: loc.x, y: loc.y };
//     console.log("newLatLng", newLatLng);
//     temp.push(newLatLng); // temp 배열에 추가
//   });

//   arrayLatLng.value = temp; // temp 배열을 arrayLatLng에 할당
//   console.log("arrayLatLng.value", arrayLatLng.value);
// });

watch(() => {
  mapId.value = `map${props.item.day}`;
  console.log("JJJ", props.item.day);
});
// const props = defineProps({
//   mapId: {
//     type: String,
//     default() {
//       return "map";
//     },
//   },
// });

console.log("props.mapId", props.mapId);
</script>

<style scoped>
#rplace-card-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px 0;
}
#rplace-day {
  color: #000;
  text-align: left;

  font-size: 1.05rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.55594rem; /* 113.161% */
  letter-spacing: 0.04125rem;
  margin: 20px 0 0 0;
}

#rplace-list {
  margin: 5px 0;
}

.map-container {
  width: 60vw;
  height: 14.5rem;
  border-radius: 10px;
}

#rplace-timeline {
  margin: 30px 0 0 0;
}

#replace-list-btn {
  margin: 0;
}
</style>
