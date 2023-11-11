<script setup>
// import TheHeader from './components/layout/TheHeader.vue';
import TheFooter from './components/layout/TheFooter.vue';
import PlanList from './components/PlanList.vue';
import VTab from './components/VTab.vue';
import VPlaceCardBig from './components/VPlaceCardBig.vue';
import VPlaceCardSmall from './components/VPlaceCardSmall.vue';
</script>

<template>
  <!-- <TheHeader/> -->
  <PlanList/>
  <VPlaceCardSmall cardColor = "blue"/>
  <!-- <VPlaceCardBig cardColor="blue"/>  -->
  <VTab/>
  <!-- <TheFooter/> -->
</template>

<style scoped>
 
</style>