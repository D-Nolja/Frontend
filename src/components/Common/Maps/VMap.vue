<template>
  <div id="map"></div>
</template>

<script setup>
import { usePlaceStore } from "@/stores/place";
import { storeToRefs } from "pinia";
import { ref, onMounted, watchEffect } from "vue";
const { VITE_APP_KAKAO_API_KEY } = import.meta.env;
const placeStore = usePlaceStore();
let { getPlacesData } = storeToRefs(placeStore);
let places = ref(null);
let map = ref(null);
let mapLoaded = ref(false);

onMounted(() => {
  loadMap();

  // testMarker();
});

watchEffect(() => {
  // places가 변경될 때 마다 실행됩니다.
  if (mapLoaded.value && getPlacesData.value) {
    
    clearMarkers(); // 이전 마커들을 지웁니다.
  
    places.value = getPlacesData.value;
    placeSearch(); // 새로운 마커들을 표시합니다.
  }
});

let markers = ref([]);
function clearMarkers() {
  markers.value.forEach((marker) => {
    marker.setMap(null); // 마커를 지도에서 제거
  });
  markers.value = []; // 마커 배열을 비움
}

const initMap = () => {
  const container = document.getElementById("map");
  const options = {
    center: new kakao.maps.LatLng(33.450701, 126.570667),
    level: 5,
  };
  map.value = new kakao.maps.Map(container, options);
  mapLoaded.value = true;
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

function placeSearch() {
  if (!places.value || places.value.length === 0 || !map.value) return; // 비어있는 경우 처리

  const bounds = new kakao.maps.LatLngBounds(); // bounds 초기화

  console.log("placeSearch ", places.value);
  places.value.forEach((place) => {
    displayMarker(place, bounds);
  });

  if (map.value) {
    map.value.setBounds(bounds); // 지도의 경계를 설정
  }
}

function displayMarker(place, bounds) {
  const markerPosition = new kakao.maps.LatLng(place.y, place.x);
  let marker = new kakao.maps.Marker({
    position: markerPosition,
  });
  console.log(marker);
  markers.value.push(marker);
  marker.setMap(map.value);
  bounds.extend(markerPosition); // 마커 위치를 bounds에 추가
}

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

// function displayMarker(place, image) {
//   let marker = new kakao.maps.Marker({
//     position: new kakao.maps.LatLng(place.x, place.y),
//     image: image,
//   });

//   marker.setMap(map.value);
// }

// watch(
//   () => props.clickedPlace,
//   (newVal) => {
//     console.log("clickedPlace props 변경됨:", newVal);

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
