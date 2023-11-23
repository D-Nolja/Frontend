import { getAuthInstance } from "@/utils/auth.js";
const auth = getAuthInstance();

async function getReviewList(param, success, fail) {
  await auth.post(`/review`).then(success).catch(fail);
}
async function saveReviewTemp(param, success, fail) {
  await auth.post(`/review`).then(success).catch(fail);
}
async function getReviewDetail(param, success, fail) {
  await auth.post(`/review`).then(success).catch(fail);
}

async function writeReview(param, success, fail) {
  await auth.post(`/review`).then(success).catch(fail);
}

async function modifyReview(param, success, fail) {
  await auth.post(`/review`).then(success).catch(fail);
}

async function deleteReview(param, success, fail) {
  await auth.post(`/review`).then(success).catch(fail);
}

export {
  getReviewList,
  saveReviewTemp,
  getReviewDetail,
  writeReview,
  modifyReview,
  deleteReview,
};
