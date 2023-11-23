import { getAuthInstance } from "@/utils/auth.js";
const auth = getAuthInstance();

async function savePlan(data, success, fail) {
  await auth.post(`/plan`, data).then(success).catch(fail);
}

export { savePlan };
