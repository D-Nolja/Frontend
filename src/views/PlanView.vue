<script setup>
import TheSideNav from "@/components/layout/TheSideNav.vue";
import SideMenu from "@/components/SideMenu/SideMenu.vue";
import VMap from "@/components/Common/Maps/VMap.vue";
import { usePlaceStore } from "@/stores/place.js";
import { ref, watch } from "vue";
import { storeToRefs } from "pinia";

const placeStore = usePlaceStore();
const clickedPlace = ref(null);
</script>

<template>
  <div class="planView-container">
    <TheSideNav />
    <SideMenu @mark-place="handleMarkPlace" />
    <VMap :clickedPlace="clickedPlace" mapId="map" />
  </div>
</template>

<style scoped>
.planView-container {
  display: flex;
}
</style>
