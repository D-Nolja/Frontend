<script setup>
import UserPlanListItem from "@/components/MyPage/Item/UserPlanListItem.vue"
import { usePlanStore } from "../../stores/plan";
import { onMounted, watch, ref } from "vue";
import { storeToRefs } from "pinia";

const planStore = usePlanStore();
const { showPlanList } = planStore;
const { searchParamPlan, planList, } = storeToRefs(planStore);

let data = ref([]);
onMounted(() => {
  searchParamPlan.value.keyword = ""; // keyword
  searchParamPlan.value.pageNo = 1;  // currentPage
  searchParamPlan.value.sizePerPage = 20; // sizePerPage
  showPlanList();
  data.value = planList.value;
})

watch(planList, () => {
  console.log("planList", planList.value);
  data.value = planList.value
})

</script>

<template>
  <div class="list-container">
    <a-list item-layout="horizontal" :data-source="data">

      <template #renderItem="{ item }">
        <div class="list-item-container">
          <UserPlanListItem :plan="item"></UserPlanListItem>
        </div>
      </template>
    </a-list>
  </div>
</template>

<style scoped>
.list-container {
  margin-top: 6px;
}

.list-item-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px 0;
}

.planList {
  margin-top: 20px;
}
</style>