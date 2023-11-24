<template>
  <div id="rplace-card-container">
    <img src="../../assets/img/rline.svg" alt="" srcset="" id="rplace-line" />
    <p id="rplace-day">Day {{ item.day }}</p>

    <div id="rplace-list">
      <VMap :mapId="mapId" />
      <!-- center 잡기 -->
    </div>
    <VTimeline id="rplace-timeline" :item="item" />
    <!-- <VButtonSubmit txt="여행 후기 목록" color="default" id="replace-list-btn" /> -->
  </div>
  <!-- <VMap /> -->
</template>

<script setup>
import VTimeline from "@/components/Common/VTimelineModify.vue";
import VMap from "@/components/Common/Maps/VMap.vue";
import { watch, ref } from "vue";
const props = defineProps({
  item: Object,
});

const mapId = ref("");
watch(() => {
  mapId.value = `map${props.item.day}`;
  console.log("mapId.value", mapId.value);
  console.log("props.item", props.item);
});
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
  line-height: 1.55594rem;
  /* 113.161% */
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
