<template>
  <div id="search-section">
    <div id="search-section-title">
      <div id="sst1">
        <p>장소 추가</p>
        <div id="sst1-dropdown">
          <VDropdown name="카테고리" :items="fcl" />
          <VDropdown name="거리 순" :items="distance" />
        </div>
      </div>
      <div class="search-input-container">
        <input
          type="text"
          placeholder="관련 검색어를 입력해보세요"
          id="ss-input"
          @keyup.enter="searchKeyword"
        />
        <img
          class="search-icon"
          src="../../assets/img/search.svg"
          alt="검색"
          srcset=""
        />
      </div>

      <label id="ss-checkbox"
        ><input type="checkbox" name="parking" />
        <p>주차 가능</p>
      </label>
    </div>

    <!-- 드래그 영역 -->
    <div class="fixed-section" id="section1">
      <div v-if="places.length === 0">로딩 중</div>

      <VPlaceCardBig
        v-for="place in places"
        :key="place.id"
        :place="place"
        cardColor="blue"
        @click.prevent="getClickedPlace"
      />

      <div id="pagination-container">
        <VPagination />
      </div>
    </div>
  </div>
</template>

<script setup>
import VPagination from "@/components/Common/VPagination.vue";
import VPlaceCardBig from "@/components/Common/cards/VPlaceCardBig.vue";
import VDropdown from "../Common/VDropdown.vue";
import { usePlaceStore } from "@/stores/place";
import { storeToRefs } from "pinia";
import { onMounted, ref, watch } from "vue";

const placeStore = usePlaceStore();
let { searchPlaces, clickedPlace, searchParams } = storeToRefs(placeStore);
let places = ref([]);
const { getPlacesAll, selectSearchMethod } = placeStore;

onMounted(async () => {
  try {
    await getPlacesAll();

    places.value = searchPlaces.value;
  } catch (error) {
    console.log("search error ", error);
  }
});

watch(() => {
  if (searchPlaces.value != null) {
    places.value = searchPlaces.value;
  }
});

const searchKeyword = async (event) => {
  let target = event.currentTarget.value;
  console.log("검색어 입력", event.currentTarget.value);
  searchParams.value.keyword = target;
  console.log("searchParams ", searchParams.value);
  selectSearchMethod(searchParams.value);
};
const getClickedPlace = (event) => {
  // console.log("card clicked ", event.currentTarget);

  // const el = event.currentTarget;
  // console.log(el);

  // let placeName = event.currentTarget.querySelector("#place-name").textContent;
  let id = event.currentTarget
    .querySelector("#place-name")
    .getAttribute("data-id");
  console.log("id : ", id);
  // let placeCate = event.currentTarget.querySelector("#place-cate").textContent;
  // let placeTime = event.currentTarget.querySelector("#place-time").textContent;
  // let placeDescription =
  //   event.currentTarget.querySelector("#place-description").textContent;
  // console.log(placeName, placeCate, placeTime, placeDescription);

  places.value.forEach((place) => {
    if (place.id == id) {
      clickedPlace.value = place;

      return;
    }
  });
};

// 얘네도 따로 빼야
const fcl = [
  { type: 0, id: 0, name: "전체" },
  { type: 0, id: 1, name: "동물병원" },
  { type: 0, id: 2, name: "동물약국" },
  { type: 0, id: 3, name: "미용" },
  { type: 0, id: 4, name: "반려동물용품" },
];
const spot = [
  {
    id: 0,
    name: "박물관",
  },
  {
    id: 1,
    name: "여행지",
  },
  {
    id: 2,
    name: "미술관",
  },
  {
    id: 3,
    name: "문예회관",
  },
  {
    id: 4,
    name: "음식점/카페",
  },
  {
    id: 5,
    name: "관광지",
  },
];

const stay = [{ id: 0, name: "숙박업소" }];

const distance = [
  {
    type: 1,
    id: 0,
    name: "상관없음",
  },
  {
    type: 1,
    id: 3,
    name: "3km 이내 ",
  },
  {
    type: 1,
    id: 5,
    name: "5km 이내 ",
  },
  {
    type: 1,
    id: 10,
    name: "10km 이내 ",
  },
  {
    type: 1,
    id: 20,
    name: "20km 이내 ",
  },
];
</script>

<style>
#search-section {
  width: 270px;
  margin: 0 15px;
  border-radius: 10px;
  background-color: #f7f8f9;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#search-section-title {
  display: flex;
  flex-direction: column;
  padding: 10px 10px 5px 10px;
}

#sst1 {
  width: 100%;
  justify-content: space-between;
  display: flex;
  align-items: center;
  padding-left: 5px;
  padding-bottom: 5px;
}

#sst1 p,
#plan-name,
#plan-date {
  color: #000;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.72888rem;
  letter-spacing: 0.03375rem;
}

#sst1-dropdown {
  display: flex;
  justify-content: space-around;
}

.search-input-container {
  position: relative;
  /* 컨테이너에 relative 포지셔닝 */
  display: inline-block;
  /* 인라인 블록 요소로 설정 */
  width: 250px;
}

.search-icon {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  margin-right: 3px;
}

#ss-input {
  border-radius: 10px;
  background-color: #fff;
  color: #b7b7b7;
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 500;
  letter-spacing: 0.05rem;
  width: 250px;
  height: 2.625rem;
  border: none;
  padding-right: 30px;
  padding-left: 10px;
}

#ss-input:focus {
  color: #333;
}

#ss-checkbox {
  text-align: end;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: end;
  margin-right: 3px;
  margin-top: 10px;
}

#ss-checkbox p {
  margin-left: 5px;
}

.fixed-section {
  width: 300px;
  /* 고정 섹션의 너비 */
  flex-shrink: 0;
  /* 섹션 크기 유지 */
  display: flex;
  flex-direction: column;
  align-items: center;
}

#pagination-container {
  width: 270px;
  text-align: center;
  position: absolute;
  bottom: 5%;
}
</style>
