// import { usePlaceStore } from "@/stores/placeStore";
// const placeStore = usePlaceStore();
// const {
//   getPlacesAll,
//   getPlacesKeyword,
//   getPlacesCategory,
//   getPlacesShortest,
//   getPlacesKnC,
//   getPlacesCnS,
//   getPlacesKnS,
//   getPlacesKnCnS,
// } = placeStore;

// const selectSearchMethod = async (param) => {
//   let sCate = param.category; // 카테고리
//   let sKeyword = param.keyword; // 키워드(검색어)
//   let sLimit = param.limit; //

//   let statusCate = checkNull(sCate);
//   let statusKeyword = checkNull(sKeyword);
//   let statusLimit = checkNull(sLimit);

//   if (statusCate && !statusKeyword && !statusLimit) {
//     console.log("cate");
//     await getPlacesCategory();
//   } else if (!statusCate && statusKeyword && !statusLimit) {
//     console.log("shortest");
//     await getPlacesShortest();
//   } else if (!statusCate && !statusKeyword && statusLimit) {
//     console.log("keyword");
//     await getPlacesKeyword();
//   } else if (statusCate && statusKeyword && !statusLimit) {
//     console.log("cate + keyword");
//     await getPlacesKnC();
//   } else if (statusCate && !statusKeyword && statusLimit) {
//     console.log("cate + shortest");
//     await getPlacesCnS();
//   } else if (!statusCate && statusKeyword && statusLimit) {
//     console.log("keyword + shortest");
//     await getPlacesKnS();
//   } else if (!statusCate && !statusKeyword && !statusLimit) {
//     console.log("cate + keyword + shortest");
//     await getPlacesKnCnS();
//   } else if (statusCate && statusKeyword && statusLimit) {
//     console.log("all");
//     await getPlacesAll();
//   }
// };

// function checkNull(word) {
//   if (word == "" || word == null || word == undefined) {
//     return true;
//   }
//   return false;
// }

// export default { selectSearchMethod };
