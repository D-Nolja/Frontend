import { getAuthInstance } from "@/utils/auth.js";
const auth = getAuthInstance();

async function getReviewList(param, success, fail) {
  await auth.get(`/review`).then(success).catch(fail);
}
async function saveReviewTemp(reviewId, param, success, fail) {
  await auth.post(`/review/item`, param).then(success).catch(fail);
}
async function getReviewDetail(planId, success, fail) {
  await auth.get(`/review/${planId}`).then(success).catch(fail);
}

async function writeReview(param, success, fail) {
  // console.log("writtenReview", param);
  await auth.post(`/review`, param).then(success).catch(fail);
}

async function modifyReview(param, success, fail) {
  await auth.put(`/review`).then(success).catch(fail);
}

async function deleteReview(param, success, fail) {
  await auth.delete(`/review`).then(success).catch(fail);
}
async function uploadReviewImg(param, config, success, fail) {
  await auth.post(`/image/review`, param, config).then(success).catch(fail);
}

export {
  getReviewList,
  saveReviewTemp,
  getReviewDetail,
  writeReview,
  modifyReview,
  deleteReview,
  uploadReviewImg,
};
