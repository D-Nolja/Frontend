<template>
  <div id="map"></div>
</template>

<script setup>
import { usePlaceStore } from "../../../stores/place";
import { storeToRefs } from "pinia";
import { ref, onMounted, watch } from "vue";
const { VITE_APP_KAKAO_API_KEY } = import.meta.env;
const placeStore = usePlaceStore();
const { places } = storeToRefs(placeStore);
const props = defineProps({
  clickedPlace: {
    type: Object,
    default() {
      return {
        name: "형민식탁",
        type: "맛집",
        x: "33.239221362414035",
        y: "126.60445492699344",
        address: "도로명 주소1",
        tel: "010-9876-9876",
        openTime: "12:30 ~ 15:00",
        info: "반려동물 동반 가능 / 무료",
      };
    },
  },
});

var map;

// onMounted(() => {
//   loadKakaoMaps();
// });

onMounted(() => {
  if (window.kakao && window.kakao.maps) {
    initMap();
  } else {
    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${
      import.meta.env.VITE_KAKAO_MAP_SERVICE_KEY
    }&libraries=services,clusterer`;
    /* global kakao */
    script.onload = () => kakao.maps.load(() => initMap());
    document.head.appendChild(script);
  }
});

// props 변화 감지
watch(
  () => props.clickedPlace,
  (newVal) => {
    console.log("clickedPlace prop 변경됨:", newVal);

    const markerImage = createMarkerImage(
      markerImgSrc,
      markerImgSize,
      markerImgOptions
    );
    // 마커 표시
    displayMarker(newVal, markerImage);
  },
  { deep: true }
);

// const map = ref(null);
const bounds = new kakao.maps.LatLngBounds();
let markerImgSrc =
  "https://github.com/D-Nolja/Frontend/blob/main/src/assets/img/marker.svg?raw=true";

// function loadKakaoMaps() {
//   if (window.kakao && window.kakao.maps) {
//     initMap();
//   } else {
//     const script = document.createElement("script");
//     script.onload = () => kakao.maps.load(initMap);
//     script.src = `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${VITE_APP_KAKAO_API_KEY}`;
//     document.head.appendChild(script);
//   }
// }

// function initMap() {
//   const container = document.getElementById("map");
//   const options = {
//     center: new kakao.maps.LatLng(33.450701, 126.570667),
//     level: 9,
//     zoomable: true,
//   };

//   map.value = new kakao.maps.Map(container, options);
//   // placeSearch();
//   map.value.setZoomable(true);
//   map.value.setBounds(bounds);
// }

const initMap = () => {
  const container = document.getElementById("map");
  const options = {
    center: new kakao.maps.LatLng(33.450701, 126.570667),
    level: 3,
  };
  map = new kakao.maps.Map(container, options);

  // loadMarkers();
};
var markerImgSize = new kakao.maps.Size(50, 50),
  markerImgOptions = {
    spriteOrigin: new kakao.maps.Point(0, 0),
    spriteSize: new kakao.maps.Size(30, 55),
  };
// 마커이미지의 주소와, 크기, 옵션으로 마커 이미지를 생성하여 리턴하는 함수입니다
function createMarkerImage(src, size, options) {
  var markerImage = new kakao.maps.MarkerImage(src, size, options);
  return markerImage;
}

function placeSearch() {
  places.value.forEach((place) => {
    bounds.extend(new kakao.maps.LatLng(place.x, place.y));

    const markerImage = createMarkerImage(
      markerImgSrc,
      markerImgSize,
      markerImgOptions
    );

    displayMarker(place, markerImage);
  });
}

// function showOverlay(overlay) {
//   if (overlay.getMap()) {
//     overlay.setMap(null);
//   } else {
//     overlay.setMap(map.value);
//   }
// }

// let currentOverlay = null;
function displayMarker(place, image) {
  var marker = new kakao.maps.Marker({
    map: map.value,
    position: new kakao.maps.LatLng(place.x, place.y),
    image: image,
  });
}
//   const content = `<div>${place.name}</div>`;
//   var customOverlay = new kakao.maps.CustomOverlay({
//     map: null, // 처음에는 보이지 않게 null로 초기화
//     position: marker.getPosition(),
//     content: content,
//   });

//   kakao.maps.event.addListener(marker, "click", function () {
//     // Close the currently opened overlay
//     if (currentOverlay) {
//       currentOverlay.setMap(null);
//     }

//     // Show the new overlay
//     showOverlay(customOverlay);
//     currentOverlay = customOverlay; // Update the currently opened overlay
//   });
// }
</script>

<style scoped>
#map {
  width: 100%;
  height: 100vh;
  z-index: 0;
}
</style>
