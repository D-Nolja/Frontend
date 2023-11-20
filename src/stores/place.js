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
  const searchParams = ref(null);

  /*
1)
{
  x : "",
  y : "",
  limit : "".
  maxcount : "",
  category : "",
  keyword : ""
}

2) 
// 최단거리 안 구할 때
pageNo
sizePerPage
keyWord
category
*/

  // dumy value

  let param = searchParams.value;

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
    param = " ";
    await searchPlacesKeyword(
      param,
      (response) => {
        console.log("[검색어] 시설조회 ", response);
      },
      (error) => {
        console.log("getPlacesKeyword ", error);
      }
    );
  };

  const getPlacesCategory = async () => {
    param = " ";
    await searchPlacesCategory(
      param,
      (response) => {
        console.log("[카테고리] 시설조회 ", response);
      },
      (error) => {
        console.log("getPlacesCategory ", error);
      }
    );
  };

  const getPlacesShortest = async () => {
    param = " ";
    await searchPlacesShortest(
      param,
      (response) => {
        console.log("[최단거리] 시설조회 ", response);
      },
      (error) => {
        console.log("getPlacesShortest ", error);
      }
    );
  };

  const getPlacesKnC = async () => {
    param = " ";
    await searchPlacesKnC(
      param,
      (response) => {
        console.log("[검색어+카테고리] 시설조회 ", response);
      },
      (error) => {
        console.log("getPlacesKnC ", error);
      }
    );
  };

  const getPlacesCnS = async () => {
    param = " ";
    await searchPlacesCnS(
      param,
      (response) => {
        console.log("[카테고리+최단거리] 시설조회 ", response);
      },
      (error) => {
        console.log("getPlacesCnS ", error);
      }
    );
  };

  const getPlacesKnS = async () => {
    param = " ";
    await searchPlacesKnS(
      param,
      (response) => {
        console.log("[검색어+카테고리] 시설조회 ", response);
      },
      (error) => {
        console.log("getPlacesKnS ", error);
      }
    );
  };

  const getPlacesKnCnS = async () => {
    param = " ";
    await searchPlacesKnCnS(
      param,
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
  };
});
