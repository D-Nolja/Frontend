<script setup>
// import MainView from "./views/MainView.vue";
import { RouterView } from "vue-router";
// import TheFooter from './components/layout/TheFooter.vue';
// import PlanList from './components/PlanList.vue';
// import VTab from './components/VTab.vue';
// import VPlaceCardBig from './components/VPlaceCardBig.vue';
// import VPlaceCardSmall from './components/VPlaceCardSmall.vue';
// import VButton f∏rom './components/VButton.vue';
// import PlanView from './views/PlanView.vue';
import { onMounted } from "vue";
import {useHeaderStateStore} from "@/stores/headerState.js";
import { storeToRefs } from "pinia";
const headerStateStore = useHeaderStateStore();
// const {headerItemList} = storeToRefs(headerStateStore);

// onMounted(()=>{
//   console.log(headerItemList);
// })
</script>

<template>
  <!-- <main-view></main-view> -->

<!-- <TheHeader/>
  <TheFooter/> -->
<!-- <PlanList/> -->
<!-- <VPlaceCardBig cardColor="blue"/>  -->
<!-- <VTab/> -->
<!-- <VButton  text="hi"/> -->
  <!-- <plan-view></plan-view> -->

  <router-view></router-view>


</template>

<style scoped>
 
</style>
