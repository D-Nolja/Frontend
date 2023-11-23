import { getAuthInstance } from "@/utils/auth.js";
const auth = getAuthInstance();

async function getReviewList(param, success, fail) {
  await auth.get(`/review`).then(success).catch(fail);
}
async function saveReviewTemp(reviewId, param, success, fail) {
  await auth.post(`/review/item`, param).then(success).catch(fail);
}
async function getReviewDetail(param, success, fail) {
  await auth.get(`/review`).then(success).catch(fail);
}

async function writeReview(param, success, fail) {
  await auth.post(`/review`).then(success).catch(fail);
}

async function modifyReview(param, success, fail) {
  await auth.put(`/review`).then(success).catch(fail);
}

async function deleteReview(param, success, fail) {
  await auth.delete(`/review`).then(success).catch(fail);
}

export {
  getReviewList,
  saveReviewTemp,
  getReviewDetail,
  writeReview,
  modifyReview,
  deleteReview,
};
