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
      <input
        type="text"
        placeholder="관련 검색어를 입력해보세요"
        id="ss-input"
      />
      <label id="ss-checkbox"
        ><input type="checkbox" name="parking" />
        <p>주차 가능</p></label
      >
    </div>

    <div class="fixed-section" id="section1">
      <VPlaceCardBig
        v-for="place in places"
        :key="place"
        :place="place"
        cardColor="blue"
      />
    </div>
  </div>
</template>

<script setup>
import VPlaceCardBig from "@/components/Common/cards/VPlaceCardBig.vue";
import VDropdown from "../Common/VDropdown.vue";
import { usePlaceStore } from "@/stores/place.js";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";

const placeStore = usePlaceStore();
const { places, searchParams } = storeToRefs(placeStore);
const {
  getPlacesAll,
  // getPlacesKeyword,
  // getPlacesCategory,
  // getPlacesShortest,
  // getPlacesKnC,
  // getPlacesCnS,
  // getPlacesKnS,
  // getPlacesKnCnS,
} = placeStore;

const fcl = [
  { id: 0, name: "전체" },
  { id: 1, name: "동물병원" },
  { id: 2, name: "동물약국" },
  { id: 3, name: "미용" },
  { id: 4, name: "반려동물용품" },
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
    id: 0,
    name: "상관없음",
  },
  {
    id: 3,
    name: "3km 이내 ",
  },
  {
    id: 5,
    name: "5km 이내 ",
  },
  {
    id: 10,
    name: "10km 이내 ",
  },
  {
    id: 20,
    name: "20km 이내 ",
  },
];

onMounted(async () => {
  // 전체 검색
  try {
    await getPlacesAll();
  } catch (error) {
    console.log("search error ", error);
  }
});
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
#ss-input {
  border-radius: 10px;
  background-color: #fff;
  color: #b7b7b7;
  font-size: 0.7rem;
  font-style: normal;
  font-weight: 500;
  letter-spacing: 0.05rem;
  width: 250px;
  height: 2.625rem;
  border: none;
  padding-left: 7px;
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
  width: 300px; /* 고정 섹션의 너비 */
  flex-shrink: 0; /* 섹션 크기 유지 */
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
