import { defineStore } from "pinia";
import { ref } from "vue";
// import { searchPlacesDistance, searchPlacesKeyword } from ".";

export const usePlaceStore = defineStore("headerStateStore", () => {
  const places = ref(null); // 배열값

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
    {
      id: 163,
      name: "신제주동물약국",
      category: "fcl",
      type: "동물약국",
      x: 126.474199,
      y: 33.49023224,
      address: "제주특별자치도 제주시 노형동  월랑로59",
      tel: "647477227",
      openTime: "월~금 08:30~20:00, 토 08:30~14:00",
      parking: "N",
      info: "모두 가능",
      img: "https://search.pstatic.net/sunny/?src=https%3A%2F%2Fmedia.istockphoto.com%2Fid%2F1090076814%2Fko%2F%25EB%25B2%25A1%25ED%2584%25B0%2F%25EC%2588%2598%25EC%259D%2598%25ED%2595%2599-%25EC%25BC%2580%25EC%2596%25B4-%25EC%2595%2584%25EC%259D%25B4%25EC%25BD%2598-%25EB%2585%25B9%25EC%2583%2589-%25EB%25B0%25B1%25EC%2583%2589-%25EB%25B0%259C%25EC%259D%2584-%25EA%25B0%2580%25EC%25A7%2584-%25EC%258B%25AD%25EC%259E%2590%25EA%25B0%2580.jpg%3Fs%3D612x612%26w%3Dis%26k%3D20%26c%3DJLtfgS2A8DT-H7ZFExr5e0uiXLAIoFCvM8UE8DyVmhQ%3D&type=sc960_832",
    },
    {
      id: 177,
      name: "아마존펫 제주시청점",
      category: "fcl",
      type: "반려동물용품",
      x: 126.530565,
      y: 33.50180567,
      address: "제주특별자치도 제주시 이도일동  동광로3길3",
      tel: "647238383",
      openTime: "매일 10:00~23:00",
      parking: "Y",
      info: "모두 가능",
      img: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210205_38%2F1612516294546Ls9fP_JPEG%2FwdVovVAgACixK0aoJ8xYv1v7.jpg",
    },
  ];
  /*
    "id": 157,
    "name": "슈슈댕 제주점",
    "category": "fcl",
    "type": "반려동물용품",
    "x": 126.482645,
    "y": 33.48325376,
    "address": "제주특별자치도 제주시 노형동  원노형6길32",
    "tel": "0",
    "openTime": "매일 00:00~24:00",
    "parking": "Y",
    "info": "모두 가능",
    "img": "(img src)"
  */

  //   const getPlaces = async () => {};

  return { places };
});
