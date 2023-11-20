import { defineStore } from "pinia";
import { computed, ref } from "vue";
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

export const usePlaceStore = defineStore("headerStateStore", () => {
  const places = ref([
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

  // default value
  const searchParams = ref({
    x: "",
    y: "",
    limit: 3,
    maxCount: 5,
    category: "",
    keyword: "",
    pageNo: 1,
    sizePerPage: 5,
  });

  const currentLatLng = ref({
    x: null,
    y: null,
  });

  /*
1)
{
  x : "",
  y : "",
  limit : "",
  maxcount : "",
  category : "",
  keyword : "",
  pageNo : "",
  sizePerPag : "",
  keyWord : "",
  category : "".
}

2) 
// 최단거리 안 구할 때
pageNo
sizePerPage
keyWord
category
*/

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

  const getPlacesData = computed(() => {
    return places.value;
  });

  const getPlacesAll = async () => {
    console.log("getPlacesAll");
    await searchPlacesAll(
      (response) => {
        console.log("전체 조회 ", response);
        let { data } = response;
        places.value = data.info.searchResult;
      },
      (error) => {
        console.log("getAllPlaces ", error);
      }
    );
  };

  const getPlacesKeyword = async () => {
    await searchPlacesKeyword(
      "",
      (response) => {
        console.log("[검색어] 시설조회 ", response);
      },
      (error) => {
        console.log("getPlacesKeyword ", error);
      }
    );
  };

  const getPlacesCategory = async () => {
    await searchPlacesCategory(
      searchParams.value,
      (response) => {
        console.log("[카테고리] 시설조회 ", response);
        let { data } = response;
        places.value = data.info.searchResult;
        console.log("places : ", places.value);
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

        let arrays = data.result;
        let temp = [];
        arrays.forEach((array) => {
          temp.push(array.targetLocation);
        });

        console.log("temp : ", temp);
        places.value = temp;
      },
      (error) => {
        console.log("getPlacesShortest ", error);
      }
    );
  };

  const getPlacesKnC = async () => {
    await searchPlacesKnC(
      "",
      (response) => {
        console.log("[검색어+카테고리] 시설조회 ", response);
      },
      (error) => {
        console.log("getPlacesKnC ", error);
      }
    );
  };

  const getPlacesCnS = async () => {
    await searchPlacesCnS(
      "",
      (response) => {
        console.log("[카테고리+최단거리] 시설조회 ", response);
      },
      (error) => {
        console.log("getPlacesCnS ", error);
      }
    );
  };

  const getPlacesKnS = async () => {
    await searchPlacesKnS(
      "",
      (response) => {
        console.log("[검색어+카테고리] 시설조회 ", response);
      },
      (error) => {
        console.log("getPlacesKnS ", error);
      }
    );
  };

  const getPlacesKnCnS = async () => {
    await searchPlacesKnCnS(
      "",
      (response) => {
        console.log("[검색어+카테고리+최단거리] 시설조회 ", response);
      },
      (error) => {
        console.log("getPlacesKnCnS ", error);
      }
    );
  };

  return {
    // places,
    currentLatLng,
    searchParams,
    getPlacesData,
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
  };
});
