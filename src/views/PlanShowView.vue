<script setup>
import TheSideNav from "@/components/layout/TheSideNav.vue";
import SideMenu from "@/components/SideMenuShow/SideMenu.vue";
import VMap from "@/components/Common/Maps/VMap.vue";
import { ref } from "vue";

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
