import { defineStore } from "pinia";
import { ref, watch } from "vue";
import {
  searchPlacesAll,
  searchPlacesKeyword,
  searchPlacesCategory,
  searchPlacesShortest,
  searchPlacesKnC,
  searchPlacesCnS,
  searchPlacesKnS,
  searchPlacesKnCnS,
} from "@/api/place.js";
import { savePlan } from "../api/plan";

export const usePlaceStore = defineStore(
  "placeStore",
  () => {
    const searchPlaces = ref([
      {
        spotId: 1,
        name: "24시동물병원",
        category: "fcl",
        type: "동물병원",
        x: 126.530033,
        y: 33.49271794,
        address: "제주특별자치도 제주시 도남동  연삼로353",
        tel: "647022475",
        openTime: "월~금 09:00~19:00",
        parking: "N",
        info: "모두 가능",
        img: "https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20191221_26%2F1576910573697wAjVI_JPEG%2FV_DGwIxmBV_x7kCpgxFKVzci.jpg",
      },
    ]); // 배열값

    // 계획 저장 시 보낼 데이터
    const selectPlanOptions = ref({
      title: "여행계획 1",
      plans: [
        [1, 2, 3, 4, 5],
        [5, 6, 7, 8, 9],
        [10, 11, 12, 13],
      ],
      start: "1999/12/08",
      end: "1999/12/12",
    });

    const clickedPlace = ref(null);
    const stage = ref(0); // 관광지, 애견시설, 숙박

    // default value
    const searchParams = ref({
      x: "", // 현재 위치의 경도
      y: "", // 현재 위치의 위도
      limit: 3, // 거리
      maxCount: 5, //원하는 개수 출력
      category: "", // 카테고리
      keyword: "", // 키워드
      pageNo: 1, // 페이지 번호
      sizePerPage: 5, // 페이지당 조회 결과 수
    });

    const dayPlaces = ref([[], [], [], [], [], []]); // 0~5일 (총 6개, 0일)
    const updateSelectPlanOptions = () => {
      console.log("dayPlaces filter ", dayPlaces.value);
      console.log("selectPlanOptions!!!! ", selectPlanOptions.value);
      selectPlanOptions.value.plans = dayPlaces.value.filter(
        (dayPlan) => dayPlan.length > 0
      );
      console.log("selectPlanOptions!!!! ", selectPlanOptions.value);
    };

    const planDetails = ref([
      {
        day: 1,
        dailyPlan: [
          {
            reviewId: 28,
            order: 1,
            spotId: 732,
            name: "우리바다펜션",
            category: "stay",
            type: "숙박업소",
            x: 126.815451,
            y: 33.3082858,
            openTime: "매일 15:00~10:01",
            img: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210325_215%2F1616642660264WUAXL_JPEG%2Fimage.jpg",
          },

          {
            reviewId: 30,
            order: 3,
            spotId: 700,
            name: "테라스힐 가족 독채펜션",
            category: "stay",
            type: "숙박업소",
            x: 126.5727435,
            y: 33.4703745,
            openTime: "16:00~12:00",
            img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA3MjVfNDUg%2FMDAxNjkwMjcxNjMxNDYz.jhoP3oNS-AMB-N0Kq-LJsqnXYVlGNG3D0psjqCLtVegg.-XeMNx8HFiCs4f6nW1op6U5BcFVka4aftR68ZWYxBwAg.JPEG.banlife_official%2F%25B4%25D9%25BF%25EE%25B7%25CE%25B5%25E5_%25283%2529.jpeg",
          },
        ],
      },
      {
        day: 2,
        dailyPlan: [
          {
            reviewId: 33,
            order: 1,
            spotId: 701,
            name: "포 시즌 펜션",
            category: "stay",
            type: "숙박업소",
            x: 126.5834333,
            y: 33.248443,
            openTime: "14:00~12:00",
            img: "https://search.pstatic.net/common/?src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20220412_156%2F1649731934773vsPEA_JPEG%2Fupload_0adad15b84cdda52c82245d54007f1ca.jpeg",
          },
        ],
      },
      {
        day: 3,
        dailyPlan: [
          {
            reviewId: 35,
            order: 1,
            spotId: 601,
            name: "음식점/카페숑",
            category: "spot",
            type: "음식점/음식점/카페",
            x: 126.6427533,
            y: 33.2663436,
            openTime: "09:00~18:00",
            img: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200709_236%2F1594279379581D5nyD_JPEG%2FA0dTlAA4Ge0ZBAGW6vUT72s_.jpg",
          },
        ],
      },
    ]);

    const daynumbers = ref(0);
    watch(() => {
      daynumbers.value = planDetails.value.length;
      console.log("daynumbers.value", daynumbers.value);
    });
    const currentLatLng = ref({
      x: null,
      y: null,
    });

    // 검색 메소드 선택하는 부분 start
    function checkNull(word) {
      if (word == "" || word == null || word == undefined) {
        return false;
      }
      return true;
    }

    const selectSearchMethod = async (param) => {
      let sCate = param.category; // 카테고리
      let sKeyword = param.keyword; // 키워드(검색어)
      let sLimit = param.limit; //

      let statusCate = checkNull(sCate);
      let statusKeyword = checkNull(sKeyword);
      let statusLimit = checkNull(sLimit);

      console.log("checkNull", statusCate, statusKeyword, statusLimit);
      if (statusCate && !statusKeyword && !statusLimit) {
        console.log("cate");
        await getPlacesCategory();
      } else if (!statusCate && statusKeyword && !statusLimit) {
        console.log("keyword");
        await getPlacesKeyword();
      } else if (!statusCate && !statusKeyword && statusLimit) {
        console.log("shortest");
        await getPlacesShortest();
      } else if (statusCate && statusKeyword && !statusLimit) {
        console.log("cate + keyword");
        await getPlacesKnC();
      } else if (statusCate && !statusKeyword && statusLimit) {
        console.log("cate + shortest");
        await getPlacesCnS();
      } else if (!statusCate && statusKeyword && statusLimit) {
        console.log("keyword + shortest");
        await getPlacesKnS();
      } else if (!statusCate && !statusKeyword && !statusLimit) {
        console.log("all");
        await getPlacesAll();
      } else if (statusCate && statusKeyword && statusLimit) {
        console.log("cate + keyword + shortest");
        await getPlacesKnCnS();
      }

      searchParams.value.keyword = "";
    };

    // end

    const totalPageCount = ref(5);

    const initializeStore = async () => {
      await getPlacesAll();
    };

    const getCurrentLoc = async () => {
      return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const latLng = {
              x: position.coords.longitude,
              y: position.coords.latitude,
            };
            resolve(latLng);
          },
          (error) => {
            reject(error);
          }
        );
      });
    };

    const updateCurrentLocation = async () => {
      try {
        const latLng = await getCurrentLoc();
        currentLatLng.value = latLng;
      } catch (error) {
        console.error("위치 정보를 가져오는 데 실패했습니다.", error);
      }
    };

    const getPlacesAll = async () => {
      console.log("getPlacesAll");
      await searchPlacesAll(
        searchParams.value,
        (response) => {
          console.log("전체 조회 ", response);
          let { data } = response;
          searchPlaces.value = data.info.searchResult;
          totalPageCount.value = data.info.totalPageCount;
        },
        (error) => {
          console.log("getAllPlaces ", error);
        }
      );
    };

    const getPlacesKeyword = async () => {
      await searchPlacesKeyword(
        searchParams.value,
        (response) => {
          console.log("[검색어] 시설조회 ", response);
          let { data } = response;
          searchPlaces.value = data.info.searchResult;
          totalPageCount.value = data.info.totalPageCount;
        },
        (error) => {
          console.log("getPlacesKeyword ", error);
        }
      );
    };

    const getPlacesCategory = async () => {
      console.log("하...", searchParams.value);
      await searchPlacesCategory(
        searchParams.value,
        (response) => {
          let { data } = response;
          searchPlaces.value = data.info.searchResult;
          console.log("[카테고리] 시설조회  places : ", searchPlaces.value);
          totalPageCount.value = data.info.totalPageCount;
        },
        (error) => {
          console.log("getPlacesCategory ", error);
        }
      );
    };

    const getPlacesShortest = async () => {
      await searchPlacesShortest(
        searchParams.value,
        (response) => {
          console.log("[최단거리] 시설조회 ", response);
          let { data } = response;
          console.log("data ", data);
          console.log("data 길이 ", data.result.length);
          totalPageCount.value = 5;
          let arrays = data.result;
          let temp = [];
          arrays.forEach((array) => {
            temp.push(array.targetLocation);
          });

          console.log("temp : ", temp);
          searchPlaces.value = temp;
        },
        (error) => {
          console.log("getPlacesShortest ", error);
        }
      );
    };

    const getPlacesKnC = async () => {
      await searchPlacesKnC(
        searchParams.value,
        (response) => {
          console.log("[검색어+카테고리] 시설조회 ", response);
          let { data } = response;
          searchPlaces.value = data.info.searchResult;
        },

        (error) => {
          console.log("getPlacesKnC ", error);
        }
      );
    };

    const getPlacesCnS = async () => {
      console.log("searchPlacesCnS param", searchParams.value);
      await searchPlacesCnS(
        searchParams.value,
        (response) => {
          console.log("[카테고리+최단거리] 시설조회 ", response);
          let { data } = response;
          let arrays = data.result;
          let temp = [];
          arrays.forEach((array) => {
            temp.push(array.targetLocation);
          });

          searchPlaces.value = temp;
          totalPageCount.value = 5;
        },
        (error) => {
          console.log("getPlacesCnS ", error);
        }
      );
    };

    const getPlacesKnS = async () => {
      await searchPlacesKnS(
        searchParams.value,
        (response) => {
          console.log("[검색어+카테고리] 시설조회 ", response);
          let { data } = response;
          console.log("data ", data);
          console.log("data 길이 ", data.result.length);
          totalPageCount.value = 5;
          let arrays = data.result;
          let temp = [];
          arrays.forEach((array) => {
            temp.push(array.targetLocation);
          });

          console.log("temp : ", temp);
          searchPlaces.value = temp;
        },
        (error) => {
          console.log("getPlacesKnS ", error);
        }
      );
    };

    const getPlacesKnCnS = async () => {
      await searchPlacesKnCnS(
        searchParams.value,
        (response) => {
          console.log("[검색어+카테고리+최단거리] 시설조회 ", response);
          // totalPageCount.value = data.info.totalPageCount;
          let { data } = response;
          console.log("data ", data);
          console.log("data 길이 ", data.result.length);
          totalPageCount.value = 5;
          let arrays = data.result;
          let temp = [];
          arrays.forEach((array) => {
            temp.push(array.targetLocation);
          });

          console.log("temp : ", temp);
          searchPlaces.value = temp;
        },
        (error) => {
          console.log("getPlacesKnCnS ", error);
        }
      );
    };

    // 계획 저장
    const savePlanNow = async () => {
      await savePlan(
        selectPlanOptions.value,

        (respone) => {
          console.log("savePlan", respone);
        },
        (error) => {
          console.log("savePlan", error);
        }
      );
    };

    return {
      selectSearchMethod,
      currentLatLng,
      searchParams,
      searchPlaces,
      getPlacesAll,
      getPlacesKeyword,
      getPlacesCategory,
      getPlacesShortest,
      getPlacesKnC,
      getPlacesCnS,
      getPlacesKnS,
      getPlacesKnCnS,
      getCurrentLoc,
      updateCurrentLocation,
      clickedPlace,
      initializeStore,
      totalPageCount,
      stage,
      dayPlaces,
      planDetails,
      daynumbers,
      selectPlanOptions,
      updateSelectPlanOptions,
      savePlanNow,
    };
  },
  { persist: true }
);
