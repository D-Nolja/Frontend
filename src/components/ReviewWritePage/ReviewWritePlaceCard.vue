<template>
  <div id="rplace-card-container">
    <img src="../../assets/img/rline.svg" alt="" srcset="" id="rplace-line" />
    <p id="rplace-day">Day 01</p>

    <div id="rplace-list">
      <VMap :mapId="mapId" />
      <!-- center 잡기 -->
    </div>
    <VTimeline id="rplace-timeline" />
    <VButtonSubmit txt="여행 후기 목록" color="default" id="replace-list-btn" />
  </div>
  <!-- <VMap /> -->
</template>

<script setup>
import VButtonSubmit from "@/components/Common/VButtonSubmit.vue";
import VTimeline from "@/components/Common/VTimeline.vue";
import VMap from "@/components/Common/Maps/VMap.vue";
const props = defineProps({
  mapId: {
    type: String,
    default() {
      return "map";
    },
  },
});

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
