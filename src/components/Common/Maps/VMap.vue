<template>
  <div id="map"></div>
</template>

<script setup>
import { usePlaceStore } from "@/stores/place";
import { storeToRefs } from "pinia";
import { ref, onMounted, watch, watchEffect } from "vue";
const { VITE_APP_KAKAO_API_KEY } = import.meta.env;
const placeStore = usePlaceStore();
// let { places } = storeToRefs(placeStore);
let { getPlacesData  } = storeToRefs(placeStore);
// console.log("!! ", getPlacesData);

let map = ref(null);

onMounted(() => {
  loadMap();
  placeSearch();
  // testMarker();
});


watch(()=>{
  console.log("watch ", getPlacesData.value)
  placeSearch();
}) 



const initMap = () => {
  const container = document.getElementById("map");
  const options = {
    center: new kakao.maps.LatLng(33.450701, 126.570667),
    level: 10,
  };
  map.value = new kakao.maps.Map(container, options);
};

const loadMap = () => {
  if (window.kakao && window.kakao.maps) {
    initMap();
  } else {
    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${VITE_APP_KAKAO_API_KEY}&libraries=services,clusterer`;
    /* global kakao */
    script.onload = () => kakao.maps.load(() => initMap());
    document.head.appendChild(script);
  }
};

// const testMarker = () => {
//   const markerPosition = new kakao.maps.LatLng(33.48325376, 126.482645);
//   var marker = new kakao.maps.Marker({
//     position: markerPosition,
//   });
//   marker.setMap(map.value);
// };

// function createMarkerImage(src, size, options) {
//   var markerImage = new kakao.maps.MarkerImage(src, size, options);
//   return markerImage;
// }

// function createMarkerImgOptions() {
//   let markerImgSrc =
//     "https://github.com/D-Nolja/Frontend/blob/main/src/assets/img/marker.svg?raw=true";
//   let markerImgSize = new kakao.maps.Size(50, 50);
//   let markerImgOptions = {
//     spriteOrigin: new kakao.maps.Point(0, 0),
//     spriteSize: new kakao.maps.Size(30, 55),
//   };
//   const markerImage = createMarkerImage(
//     markerImgSrc,
//     markerImgSize,
//     markerImgOptions
//   );
//   return markerImage;
// }

function placeSearch() {
  console.log("placeSearch ", getPlacesData.value)
  getPlacesData.value.forEach((place) => {
    console.log(place.y, place.x);

    // let markerImage = createMarkerImgOptions();
    // displayMarker(place, markerImage);

    displayMarker(place);
  });
}

function displayMarker(place) {
  const markerPosition = new kakao.maps.LatLng(place.y, place.x);
  let marker = new kakao.maps.Marker({
    position: markerPosition,
  });
  marker.setMap(map.value);
}

// function displayMarker(place, image) {
//   let marker = new kakao.maps.Marker({
//     position: new kakao.maps.LatLng(place.x, place.y),
//     image: image,
//   });

//   marker.setMap(map.value);
// }

// const props = defineProps({
//   clickedPlace: {
//     type: Object,
//     default() {
//       return {
//         name: "형민식탁",
//         type: "맛집",
//         x: "33.239221362414035",
//         y: "126.60445492699344",
//         address: "도로명 주소1",
//         tel: "010-9876-9876",
//         openTime: "12:30 ~ 15:00",
//         info: "반려동물 동반 가능 / 무료",
//       };
//     },
//   },
// });

// watch(
//   () => props.clickedPlace,
//   (newVal) => {
//     console.log("clickedPlace prop 변경됨:", newVal);

//     const markerImage = createMarkerImage(
//       markerImgSrc,
//       markerImgSize,
//       markerImgOptions
//     );

//     displayMarker(newVal, markerImage);
//   },
//   { deep: true }
// );

// const bounds = new kakao.maps.LatLngBounds();
</script>

<style scoped>
#map {
  width: 100%;
  height: 100vh;
  z-index: 0;
}
</style>
