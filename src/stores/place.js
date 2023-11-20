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

export const usePlaceStore = defineStore("headerStateStore", () => {
  const places = ref(null); // 배열값
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
  places.value = [
    {
      id: 157,
      name: "슈슈댕 제주점",
      category: "fcl",
      type: "반려동물용품",
      x: 126.482645,
      y: 33.48325376,
      address: "제주특별자치도 제주시 노형동  원노형6길32",
      tel: "0",
      openTime: "매일 00:00~24:00",
      parking: "Y",
      info: "모두 가능",
      img: "https://search.pstatic.net/sunny/?src=https%3A%2F%2Fmedia.istockphoto.com%2Fid%2F1090076814%2Fko%2F%25EB%25B2%25A1%25ED%2584%25B0%2F%25EC%2588%2598%25EC%259D%2598%25ED%2595%2599-%25EC%25BC%2580%25EC%2596%25B4-%25EC%2595%2584%25EC%259D%25B4%25EC%25BD%2598-%25EB%2585%25B9%25EC%2583%2589-%25EB%25B0%25B1%25EC%2583%2589-%25EB%25B0%259C%25EC%259D%2584-%25EA%25B0%2580%25EC%25A7%2584-%25EC%258B%25AD%25EC%259E%2590%25EA%25B0%2580.jpg%3Fs%3D612x612%26w%3Dis%26k%3D20%26c%3DJLtfgS2A8DT-H7ZFExr5e0uiXLAIoFCvM8UE8DyVmhQ%3D&type=sc960_832",
    },
    {
      id: 162,
      name: "신제주동물병원",
      category: "fcl",
      type: "동물병원",
      x: 126.482718,
      y: 33.48136343,
      address: "제주특별자치도 제주시 노형동  과원북4길7",
      tel: "647442772",
      openTime: "월~금 10:00~17:00",
      parking: "N",
      info: "모두 가능",
      img: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210514_116%2F1620981867446g9QX3_JPEG%2FtaW3d0CsKd1-j55Zeg71JjTL.jpg",
    },
  ];

  let param = searchParams.value;

  const getPlacesAll = async () => {
    await searchPlacesAll(
      (response) => {
        console.log("전체 조회 ", response);
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
    places,
    searchParams,
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
