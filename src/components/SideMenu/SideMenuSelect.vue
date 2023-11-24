<template>
  <div class="menu-section" id="section2">
    <div id="day-section-title">
      <p>{{ dayPlan.day }}일차</p>
      <p>{{ dayPlan.date }}</p>
      <!-- 수정-->
    </div>

    <div class="day-section">
      <VueDraggableNext
        v-model="dayPlanPlaces"
        group="items"
        class="dragArea"
        :class="{ 'empty-group': dayPlanPlaces.length === 0 }"
      >
        <div v-if="dayPlanPlaces.length === 0">drag Here!</div>
        <VPlaceCardSmall
          v-for="(place, index) in dayPlanPlaces"
          :key="place.day"
          :place="place"
          :number="index + 1"
          cardColor="blue"
          @click="showPlace(place)"
        />
      </VueDraggableNext>
    </div>
  </div>
</template>

<script setup>
import VPlaceCardSmall from "@/components/Common/cards/VPlaceCardSmall.vue";
import { defineEmits, defineProps, watch, ref, onMounted } from "vue";
import { VueDraggableNext } from "vue-draggable-next";
import { usePlaceStore } from "@/stores/place.js";
import { storeToRefs } from "pinia";
import { UNREF } from "@vue/compiler-core";

const placeStore = usePlaceStore();
const { selectPlanOptions, dayPlaces } = storeToRefs(placeStore);
const { updateSelectPlanOptions } = placeStore;
const emit = defineEmits(["markPlace"]);
const dayPlanPlaces = ref([]);
const showPlace = (place) => {
  emit("markPlace", place);
};

const props = defineProps({
  dayPlan: {
    type: Object,
  },
});

const addPlaceOption = (places) => {
  dp.value = [];
  console.log("addPlaceOption", places);
  places.forEach((place) => {
    console.log("addPlaceOption", place);

    if ("spotId" in place) {
      dp.value.push(place.spotId);
    } else if ("id" in place) {
      dp.value.push(place.id);
    }
  });

  console.log("dp.value", dp.value);
  dayPlaces.value[places.day] = dp.value;
};

let day = ref(0);
onMounted(() => {
  dayPlanPlaces.value = props.dayPlan.dailyPlan;
  console.log("show!!");
  dayPlanPlaces.value.day = props.dayPlan.day;
  day.value = props.dayPlan.day;
  console.log("dayPlanPlaces : ", dayPlanPlaces.value);

  addPlaceOption(dayPlanPlaces.value);
  console.log("dayPlaces value", dayPlaces.value);
  console.log("updateSelectPlanOptions1");
  updateSelectPlanOptions();
});

let dp = ref([]);
watch(() => {
  console.log("props.dayPlan", props.dayPlan);
});

watch(dayPlanPlaces, (newValue, oldValue) => {
  if (newValue != oldValue) {
    console.log("---------------------");
    dayPlanPlaces.value = newValue;

    dayPlanPlaces.value.day = day.value;
    console.log("dayPlanPlaces2 : ", dayPlanPlaces.value);
    addPlaceOption(dayPlanPlaces.value);
    console.log("updateSelectPlanOptions", dayPlanPlaces.value);
    updateSelectPlanOptions();
  }
});
</script>

<style scoped>
.menu-section {
  width: 300px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#day-section-title {
  width: 270px;
  display: flex;
  justify-content: space-between;
  padding-bottom: 5px;
}

#day-section-title p:first-child {
  color: #000;
  text-align: center;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.72888rem;
  /* 153.676% */
  letter-spacing: 0.03375rem;
}

#day-section-title p:last-child {
  color: #b7b7b7;
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.72888rem;
  /* 172.885% */
  letter-spacing: 0.03rem;
}

.day-section {
  overflow-y: auto;
  overflow-x: hidden;
  height: 82vh;
  width: 270px;
  border-radius: 10px;
  background-color: #f7f8f9;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
}
.empty-group {
  min-height: 50px; /* or any suitable size */
  border: 1px dashed #ccc; /* a subtle border to indicate the area */
  background-color: #f9f9f9; /* a light background color */
  text-align: center; /* if using placeholder text */
}
</style>
