import { defineStore } from "pinia";
import { ref } from "vue";
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

export const usePlaceStore = defineStore(
  "placeStore",
  () => {
    const searchPlaces = ref([
      {
        id: 1,
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
    const clickedPlace = ref(null);

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
    };
  },
  { persist: true }
);
