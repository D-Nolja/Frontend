import { getAuthInstance } from "@/utils/auth.js";
const placeInstance = getAuthInstance();

// 전체
async function searchPlacesAll(success, fail) {
  await placeInstance.get(`/location`).then(success).catch(fail);
}

// 검색어
/*
pageNo
sizePerPage
keyWord
 */
async function searchPlacesKeyword(param, success, fail) {
  await placeInstance.get("/location").then(success).catch(fail);
}

// 카테고리
/*
pageNo
sizePerPage
category
 */
async function searchPlacesCategory(param, success, fail) {
  await placeInstance.get(`/shortest`).then(success).catch(fail);
}

// 최단거리
/*
x
y
limit (거리제한)
maxCount (검색 결과 최대 개수)
*/
async function searchPlacesShortest(param, success, fail) {
  await placeInstance.get(`/shortest`).then(success).catch(fail);
}

// 검색어+카테고리
/*
pageNo
sizePerPage
keyWord
category
 */
async function searchPlacesKnC(param, success, fail) {
  await placeInstance.get(`/shortest`).then(success).catch(fail);
}

// 카테고리+최단거리
/*
x
y
limit 
maxCount
category
*/
async function searchPlacesCnS(param, success, fail) {
  await placeInstance.get(`/shortest`).then(success).catch(fail);
}

// 검색어+최단거리
/*
x
y
limit 
maxCount
keyword
*/
async function searchPlacesKnS(param, success, fail) {
  await placeInstance.get(`/shortest`).then(success).catch(fail);
}

// 검색어+카테고리+최단거리
/*
x
y
limit 
maxCount
category
keyword
*/
async function searchPlacesKnCnS(param, success, fail) {
  await placeInstance.get(`/shortest`).then(success).catch(fail);
}

export {
  searchPlacesAll,
  searchPlacesKeyword,
  searchPlacesCategory,
  searchPlacesShortest,
  searchPlacesKnC,
  searchPlacesCnS,
  searchPlacesKnS,
  searchPlacesKnCnS,
};

// param값에 따라 파라미터 수정해야해!!!
