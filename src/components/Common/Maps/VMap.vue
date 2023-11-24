<template>
  <div :id="mapId" class="map-container"></div>
</template>

<script setup>
import { usePlaceStore } from "@/stores/place";
import { processExpression } from "@vue/compiler-core";
import { storeToRefs } from "pinia";
import { ref, onMounted, watch } from "vue";
const { VITE_APP_KAKAO_API_KEY } = import.meta.env;
const placeStore = usePlaceStore();
let { searchPlaces, clickedPlace, clickedDays, markerLatLngs } =
  storeToRefs(placeStore);
let places = ref(null);
let map = ref(null);
let mapLoaded = ref(false);
let changeClicked = ref(false);

const props = defineProps({
  mapId: {
    type: String,
    default() {
      return "map";
    },
  },
  mapLocations: {
    type: Array,
    default() {
      return [{ x: 126.570667, y: 33.450701 }];
    },
  },
});

onMounted(() => {
  if (searchPlaces != null) {
    // clickedPlace.value = null;
    loadMap();
  }

  if (props.mapLocations) {
    if (mapLoaded.value) {
      clearMarkers(); // 기존 마커 제거
      const bounds = new kakao.maps.LatLngBounds(); // bounds 초기화

      const temp = props.mapLocations;
      temp.forEach((location) => {
        console.log("marker 찍기", location);
        displayMarker(location, bounds); // 각 위치에 대한 마커 표시
      });

      if (map.value) {
        map.value.setBounds(bounds); // 모든 마커를 포함하도록 맵 경계 조정
      }
    }
  }
  console.log("props.mapLocations1", props);
});

watch(clickedDays, (newValue, oldValue) => {
  if (newValue != oldValue) {
    console.log("clickedDays in map", clickedDays.value);
    if (mapLoaded.value) {
      clearMarkers(); // 기존 마커 제거
      const bounds = new kakao.maps.LatLngBounds(); // bounds 초기화

      const temp = markerLatLngs.value;
      temp.forEach((location) => {
        console.log("marker 찍기", location);
        displayMarker(location, bounds); // 각 위치에 대한 마커 표시
      });

      if (map.value) {
        map.value.setBounds(bounds); // 모든 마커를 포함하도록 맵 경계 조정
        map.value.relayout();
      }
    }
  }
});

watch(
  props.mapLocations,
  () => {
    console.log("props.mapLocations", props.mapLocations);
    console.log("!!");
    if (mapLoaded.value) {
      clearMarkers(); // 기존 마커 제거
      const bounds = new kakao.maps.LatLngBounds(); // bounds 초기화

      const temp = props.mapLocations;
      temp.forEach((location) => {
        console.log("marker 찍기", location);
        displayMarker(location, bounds); // 각 위치에 대한 마커 표시
      });

      if (map.value) {
        map.value.setBounds(bounds); // 모든 마커를 포함하도록 맵 경계 조정
      }
    }
  },
  { immediate: true }
);

watch(
  searchPlaces,
  (newValue, oldValue) => {
    if (mapLoaded.value && newValue != oldValue) {
      clearMarkers();
      places.value = newValue;
      console.log("값은 바뀔까?");
      console.log("안바뀌는게 이상함", places.value);
      placeSearch();
    }
  },
  { immediate: true }
);

watch(
  clickedPlace,
  (newValue, oldValue) => {
    if (mapLoaded.value && newValue != oldValue) {
      changeClicked.value = true;
      clearMarkers();
      placeSearch();
    }
  },
  { immediate: true }
);

let markers = ref([]);
function clearMarkers() {
  markers.value.forEach((marker) => {
    marker.setMap(null);
  });
  markers.value = [];
}

const initMap = () => {
  console.log("initMap 되냐고!!!");
  // const container = document.getElementById("map");
  console.log("mapId 확인해볼게...", props.mapId);

  const container = document.getElementById(props.mapId);
  // const container = document.getElementById("map2");
  const options = {
    center: new kakao.maps.LatLng(33.450701, 126.570667),
    level: 7,
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
    console.log("load!");
    document.head.appendChild(script);
  }
};

function placeSearch() {
  if (!places.value || places.value.length === 0 || !map.value) return; // 비어있는 경우 처리

  const bounds = new kakao.maps.LatLngBounds(); // bounds 초기화
  if (changeClicked.value == true) {
    for (let i = 0; i < places.value.length; i++) {
      let target = places.value[i];
      if (target.id == clickedPlace.value.id) {
        console.log("target ", target);
        displayMarker(target, bounds);
        break;
      }
    }
  } else {
    console.log("여기는..?");
    places.value.forEach((place) => {
      displayMarker(place, bounds);
    });
  }

  changeClicked.value = false;
  if (map.value) {
    map.value.setBounds(bounds); // 지도의 경계를 설정
  }
}

function displayMarker(place, bounds) {
  const markerPosition = new kakao.maps.LatLng(place.y, place.x);
  let marker = new kakao.maps.Marker({
    position: markerPosition,
  });

  markers.value.push(marker);
  marker.setMap(map.value);
  bounds.extend(markerPosition); // 마커 위치를 bounds에 추가
}

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
</script>

<style scoped>
.map-container {
  width: 100% !important;
  height: 100vh;
  z-index: 0;
}

[id^="map"] {
  width: 100%;
  height: 100vh;
  z-index: 0;
}
</style>
