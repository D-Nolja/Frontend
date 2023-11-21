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
  await placeInstance
    .get(
      `/location?keyword=${param.keyword}&currentPage=${param.pageNo}&sizePerPage=${param.sizePerPage}`
    )
    .then(success)
    .catch(fail);
}

// 카테고리
/*
pageNo
sizePerPage
category
 */
async function searchPlacesCategory(param, success, fail) {
  await placeInstance
    .get(
      `/location?currentPage=${param.pageNo}&sizePerPage=${param.sizePerPage}`
    )
    .then(success)
    .catch(fail);
}

// 최단거리
/*
x
y
limit (거리제한)
maxCount (검색 결과 최대 개수)
*/
async function searchPlacesShortest(param, success, fail) {
  console.log("파파파파람 ", param);
  await placeInstance
    .get(
      `shortest?x=${param.x}&y=${param.y}&limit=${param.limit}&maxCount=${param.maxCount}`
    )
    .then(success)
    .catch(fail);
}

// 검색어+카테고리
/*
pageNo
sizePerPage
keyWord
category
 */
async function searchPlacesKnC(param, success, fail) {
  await placeInstance
    .get(
      `/location?keyword=${param.keyword}&currentPage=${param.pageNo}&sizePerPage=${param.sizePerPage}&category=${param.category}`
    )
    .then(success)
    .catch(fail);
}

// 카테고리+최단거리
/*
x
y
limit 
maxCount
category
*/

// D-nolja-prod.eba-pk7qjxkg.ap-northeast-2.elasticbeanstalk.com/shortest?x=126.6456514&y=33.473645&limit=3&maxCount=5&category=카페

async function searchPlacesCnS(param, success, fail) {
  console.log("searchPlacesCnS", param.category);
  await placeInstance
    .get(
      `/shortest?x=${param.x}&y=${param.y}&limit=${param.limit * 10}&maxCount=${
        param.maxCount
      }&category=${param.category}`
    )
    .then(success)
    .catch(fail);
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
  console.log("kns ", param);
  await placeInstance
    .get(
      `shortest?x=${param.x}&y=${param.y}&limit=${param.limit}&maxCount=${param.maxCount}&keyword=${param.keyword}`
    )
    .then(success)
    .catch(fail);
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
  console.log("kns param ", param);
  await placeInstance
    .get(
      `/shortest?x=${param.x}&y=${param.y}&limit=${param.limit * 10}&maxCount=${
        param.maxCount
      }&keyword=${param.keyword}&category=${param.category}`
    )
    .then(success)
    .catch(fail);
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
