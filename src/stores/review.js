import { defineStore } from "pinia";
import { ref } from "vue";
import {
  getReviewList,
  saveReviewTemp,
  // getReviewDetail,
  // writeReview,
  // modifyReview,
  // deleteReview,
} from "@/api/review.js";

export const useReviewStore = defineStore("reviewStore", () => {
  const searchParamReview = ref({
    keyword: "", // 키워드
    pageNo: 1, // 페이지 번호
    sizePerPage: 5, // 페이지당 조회 결과 수
  });

  const writtenReview = ref({
    planId: 1,
    reviewTitle: "",
    mainImg: "",
    mainContents: "",
    reviews: [],
  });

  const reviewList = ref(null);
  const showReviewList = async () => {
    console.log("리뷰리스트 좀 보여줘!!");
    await getReviewList(
      searchParamReview.value,
      (response) => {
        console.log("showReviewList", response);
        let { data } = response;
        console.log(data.info.reviews);
        reviewList.value = data.info.reviews;
      },
      (error) => {
        console.log("showReviewList", error);
      }
    );
  };

  const saveReviewTempNow = async (param) => {
    await saveReviewTemp(
      param.reviewId,
      param,
      () => {
        console.log("saveReviewTempNow 성공");
      },
      (error) => {
        console.log("saveReviewTempNow", error);
      }
    );
  };
  // const delPlan = async (planId) => {
  //   await getPlanList(
  //     planId,
  //     (response) => {
  //       console.log("delPlan", response);
  //       let { data } = response;
  //       planList.value = data.info.planList;
  //       // console.log(data.info.planList);
  //     },
  //     (error) => {
  //       console.log("delPlan", error);
  //     }
  //   );
  // };

  return {
    reviewList,
    searchParamReview,
    showReviewList,
    saveReviewTempNow,
    writtenReview,
  };
});
