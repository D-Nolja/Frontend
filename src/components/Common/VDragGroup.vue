<template>
  <div class="list-container">
    <div class="list">
      <h3>List 1</h3>
      <VueDraggableNext v-model="plans" group="items" class="dragArea">
        <VPlaceCardSmall
          v-for="(plan, index) in plans"
          :key="plan.name"
          :place="plan"
          :number="index + 1"
          cardColor="blue"
        />
      </VueDraggableNext>
    </div>
    <div class="list">
      <h3>List 2</h3>
      <VueDraggableNext v-model="places" group="items" class="dragArea">
        <VPlaceCardBig
          v-for="place in places"
          :key="place.id"
          :place="place"
          cardColor="blue"
        />
      </VueDraggableNext>
    </div>
  </div>
</template>

<script setup>
import VPlaceCardBig from "@/components/Common/cards/VPlaceCardBig.vue";
import VPlaceCardSmall from "@/components/Common/cards/VPlaceCardSmall.vue";
import { onMounted, ref, watch } from "vue";
import { storeToRefs } from "pinia";
import { VueDraggableNext } from "vue-draggable-next";
import { usePlaceStore } from "@/stores/place";

const placeStore = usePlaceStore();
let { searchPlaces } = storeToRefs(placeStore);
let places = ref([]);
const list1 = ref(["Item 1", "Item 2", "Item 3"]);
const list2 = ref(["Item 4", "Item 5", "Item 6"]);

onMounted(() => {
  places.value = searchPlaces.value;

  console.log("plans  ", plans.value);
  console.log("places ", places.value);
});

let plans = ref([
  {
    id: 1,
    name: "혜인식탁",
    category: "fcl",
    type: "동물병원",
    x: 126.530033,
    y: 33.49271794,
    address: "제주특별자치도 제주시 도남동  연삼로353",
    tel: "647022475",
    openTime: "월~금 09:00~19:00",
    parking: "N",
    info: "모두 가능",
    img: "https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20191221_26%2F1576910573697wAjVI_JPEG%2FV_DGwIxmBV_x7kCpgxFKVzci.jpg",
  },

  {
    id: 2,
    name: "한주식탁",
    category: "fcl",
    type: "동물병원",
    x: 126.530033,
    y: 33.49271794,
    address: "제주특별자치도 제주시 도남동  연삼로353",
    tel: "647022475",
    openTime: "월~금 09:00~19:00",
    parking: "N",
    info: "모두 가능",
    img: "https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20191221_26%2F1576910573697wAjVI_JPEG%2FV_DGwIxmBV_x7kCpgxFKVzci.jpg",
  },
]);

watch(places, (newValue, oldValue) => {
  if (newValue !== oldValue) {
    console.log("places", newValue);
  }
});

watch(plans, (newValue, oldValue) => {
  if (newValue !== oldValue) {
    console.log("plans", newValue);
  }
});
</script>

<style>
.list-container {
  display: flex;
  justify-content: space-around;
  padding: 20px;
}

.list {
  width: 300px;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.item {
  padding: 10px;
  margin: 5px 0;
  background-color: #f0f0f0;
  border-radius: 4px;
}

.dragArea {
  min-height: 100px;
}

.selectItems {
  display: flex;
  flex-direction: column;
  background-color: #e6b4b4;
}
</style>
