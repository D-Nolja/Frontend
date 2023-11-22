<template>
  <div class="menu-section" id="section2">
    <div id="day-section-title">
      <p>{{ dayPlan.number }}일차</p>
      <p>{{ dayPlan.date }}</p>
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
          :key="place.name"
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

const emit = defineEmits(["markPlace"]);
const dayPlanPlaces = ref([]);
const showPlace = (place) => {
  emit("markPlace", place);
};

const props = defineProps({
  dayPlan: {
    type: Object,
    default() {
      return {
        number: 1,
        date: 12.05,
        places: [
          {
            name: "혜인식탁",
            cate: "맛집",
            time: "11:30 ~ 16:00",
          },
          {
            name: "원빈식탁",
            cate: "맛집",
            time: "11:30 ~ 16:00",
          },
        ],
      };
    },
  },
});

// onMounted(() => {
//   dayPlanPlaces.value = props.dayPlan.places;
// });
watch(dayPlanPlaces, (newValue, oldValue) => {
  if (newValue != oldValue) {
    dayPlanPlaces.value = newValue;
    console.log("dayPlanPlaces.value 선택했어", dayPlanPlaces.value);
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
