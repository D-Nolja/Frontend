<script setup>
import { ref, watch } from "vue";
import { usePlaceStore } from "@/stores/place.js";
import { storeToRefs } from "pinia";

let placeStore = usePlaceStore();
const { searchParams, totalPageCount } = storeToRefs(placeStore);
const { selectSearchMethod } = placeStore;
console.log("pagination", searchParams.value);
let total = ref(5); // 데이터 전체 개수
let pageSize = ref(5); // 한 페이지에 나타낼 장소 개수
let current = ref(1); // 현재 페이지 번호

watch(
  totalPageCount,
  (newValue, oldValue) => {
    if (newValue != oldValue) {
      total.value = newValue;
      pageSize.value = searchParams.value.sizePerPage;
      current.value = searchParams.value.pageNo;
    }
  },
  { immediate: true }
);

const goToPage = (pageNo, pageSize) => {
  console.log("page정보", pageNo, pageSize);
  searchParams.value.pageNo = pageNo;
  console.log("searchParams : ", searchParams.value);
  selectSearchMethod(searchParams.value);
};
</script>

<template>
  <a-pagination
    v-model:current="current"
    simple
    :total="total"
    :pageSize="pageSize"
    @change="goToPage"
  />
</template>

<style></style>
