import { getAuthInstance } from "@/utils/auth.js";
const auth = getAuthInstance();

async function addPlan(param, success, fail) {
  await auth.post(`/plan`, param).then(success).catch(fail);
}

async function getPlanList(param, success, fail) {
  console.log("api getPlanList 넣어줄래?");
}

// async function getPlanList(param, success, fail) {
//   await auth
//     .post(`/plan?currentPage=${}&sizePerPage=${}0&keyword=${}`)
//     .then(success)
//     .catch(fail);
// }
async function getPlanDetail(planId, success, fail) {
  await auth.post(`/plan/${planId}`).then(success).catch(fail);
}

async function modifyPlan(planId, success, fail) {
  await auth.post(`/plan/${planId}`).then(success).catch(fail);
}

async function deletePlan(planId, success, fail) {
  await auth.post(`/plan/${planId}`).then(success).catch(fail);
}

export { addPlan, getPlanList, getPlanDetail, modifyPlan, deletePlan };
