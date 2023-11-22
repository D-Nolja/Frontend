<template>
  <div id="rplace-card-container">
    <img src="../../assets/img/rline.svg" alt="" srcset="" />
    <p id="rplace-day">Day 01</p>
    <VMap id="rplace-map" />
    <div id="rplace-list">
      <template>
        <a-timeline>
          <a-timeline-item>Create a services site 2015-09-01</a-timeline-item>
          <a-timeline-item
            >Solve initial network problems 2015-09-01</a-timeline-item
          >
          <a-timeline-item>Technical testing 2015-09-01</a-timeline-item>
          <a-timeline-item
            >Network problems being solved 2015-09-01</a-timeline-item
          >
        </a-timeline>
      </template>
    </div>
    <VButtonSubmit txt="여행 후기 목록" color="white" />
  </div>
</template>

<script setup>
import VButtonSubmit from "@/components/Common/VButtonSubmit.vue";
import VMap from "@/components/Common/Maps/VMap.vue";
</script>

<style scoped>
#rplace-map {
  width: 100%;
  height: 10rem;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.2);
}
</style>
