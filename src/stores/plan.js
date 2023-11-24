import { defineStore } from "pinia";
import { ref } from "vue";
import {
  //   addPlan,
  getPlanList,
  getPlanDetail,
  //   modifyPlan,
  deletePlan,
} from "@/api/plan.js";

export const usePlanStore = defineStore("planStore", () => {
  const searchParamPlan = ref({
    keyword: "", // 키워드
    pageNo: 1, // 페이지 번호
    sizePerPage: 5, // 페이지당 조회 결과 수
  });

  const planList = ref(null);
  const thePlan = ref(null);
  const thePlanShow = ref(null);
  const showPlanList = async () => {
    await getPlanList(
      searchParamPlan.value,
      (response) => {
        console.log("showPlanList", response);
        let { data } = response;
        console.log(data.info.planList);
        planList.value = data.info.planList;
      },
      (error) => {
        console.log("showPlanList", error);
      }
    );
  };

  const showPlanDetail = async (planId) => {
    await getPlanDetail(
      planId,
      (response) => {
        console.log("showPlanDetail", response);
        let { data } = response;
        thePlan.value = data.info;
      },
      (error) => {
        console.log("showPlanDetail", error);
      }
    );
  };

  const showPlanShowDetail = async (planId) => {
    await getPlanDetail(
      planId,
      (response) => {
        console.log("showPlanDetail", response);
        let { data } = response;
        thePlanShow.value = data.info;
      },
      (error) => {
        console.log("showPlanDetail", error);
      }
    );
  };

  const delPlan = async (planId) => {
    await deletePlan(
      planId,
      (response) => {
        console.log("delPlan", response);
        let { data } = response;
        planList.value = data.info.planList;
        // console.log(data.info.planList);
      },
      (error) => {
        console.log("delPlan", error);
      }
    );
  };

  return {
    searchParamPlan,
    planList,
    thePlan,
    showPlanDetail,
    showPlanList,
    delPlan,
    thePlanShow,
    showPlanShowDetail,
  };
});
