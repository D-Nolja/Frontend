import { getAuthInstance } from "@/utils/auth.js";
const auth = getAuthInstance();

async function addPlan(param, success, fail) {
  await auth.post(`/plan`, param).then(success).catch(fail);
}

async function getPlanList(param, success, fail) {
  console.log("getPlanList", param);
  await auth.get(`/plan`).then(success).catch(fail);
}
async function getPlanDetail(planId, success, fail) {
  await auth.get(`/plan/${planId}`).then(success).catch(fail);
}

async function modifyPlan(planId, success, fail) {
  await auth.put(`/plan/${planId}`).then(success).catch(fail);
}

async function deletePlan(planId, success, fail) {
  await auth.delete(`/plan/${planId}`).then(success).catch(fail);
}

export { addPlan, getPlanList, getPlanDetail, modifyPlan, deletePlan };
