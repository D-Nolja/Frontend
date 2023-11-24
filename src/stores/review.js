import { defineStore } from "pinia";
import { ref, watch } from "vue";
import {
  getReviewList,
  saveReviewTemp,
  getReviewDetail,
  writeReview,
  // modifyReview,
  // deleteReview,
  uploadReviewImg,
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

  const saveReviewNow = async () => {
    console.log("saveReviewNow", writtenReview.value);
    await writeReview(
      writtenReview.value,
      () => {
        console.log("saveReview 성공");
      },
      (error) => {
        console.log("saveReview", error);
      }
    );
  };

  const tempId = ref(0);
  const reviewDetail = ref(null);
  const showReviewDetail = async (planId) => {
    await getReviewDetail(
      planId,
      (response) => {
        console.log("showReviewDetail 성공", response);
        let { data } = response;
        console.log("getReviewDetail", data.info);
        reviewDetail.value = data.info;
        console.log("reviewDetail.value", reviewDetail.value);
      },
      (error) => {
        console.log("showReviewDetail", error);
      }
    );
  };

  const getReviewDetailModify = async (planId) => {
    tempId.value = planId;

    await getReviewDetail(
      planId,
      (response) => {
        console.log("showReviewDetail 성공", response);
        let { data } = response;
        console.log("getReviewDetail", data.info);
        reviewDetail.value = data.info;
        console.log("reviewDetail.value", reviewDetail.value);
      },
      (error) => {
        console.log("showReviewDetail", error);
      }
    );
  };
  // var reviewImg = "";
  // const sendReviewImg = async (file) => {
  //   let formData = new FormData();
  //   formData.append("image", file);

  //   const config = {
  //     headers: {
  //       "Content-Type": "multipart/form-data",
  //     },
  //   };
  //   await uploadReviewImg(
  //     formData,
  //     config,
  //     (response) => {
  //       // console.log("review img 업로드 성공");
  //       // console.log("file upload : ", response);
  //       const { data } = response;
  //       console.log("dataaaa", data.info.url);
  //       reviewImg = data.info.url; // db 전달할 때는 img
  //       console.log("reviewImgggg", reviewImg);

  //       // console.log("data.info.url", data.info.url);
  //       // console.log("reviewImg Store ", reviewImg);
  //     },
  //     (error) => {
  //       console.log("review img 업로드 에러 : ", error.message);
  //     }
  //   );
  // };

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
    reviewDetail,
    searchParamReview,
    showReviewList,
    saveReviewTempNow,
    writtenReview,
    saveReviewNow,
    showReviewDetail,
    getReviewDetailModify,
    tempId,
  };
});
