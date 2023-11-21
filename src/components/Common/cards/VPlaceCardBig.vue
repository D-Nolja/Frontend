<script setup>
import { ref } from "vue";
const badgeColor = ref("#17A2B8");

const props = defineProps({
  place: {
    type: Object,
    default() {
      return {
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
      };
    },
  },
  cardColor: {
    type: String,
    default() {
      return "#17A2B8";
    },
  },
});

// console.log(props.cardColor)
if (props.cardColor === "red") {
  badgeColor.value = "#FF5F5F";
} else if (props.cardColor === "blue") {
  badgeColor.value = "#17A2B8";
} else {
  badgeColor.value = props.cardColor;
}
</script>

<template>
  <div id="card-container">
    <svg width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="-7" y="-5" width="23.9719" height="23.2043" rx="11.6021" :fill="badgeColor" />
    </svg>

    <div id="place-container">
      <div id="place-text-container">
        <div id="place-name" :data-id="place.id">{{ place.name }}</div>
        <div id="place-subInfo">
          <div id="place-ssubInfo">
            <p id="place-cate">{{ place.type }}</p>
            <p id="place-time">{{ place.openTime }}</p>
          </div>
          <div id="place-description">{{ place.info }}</div>
        </div>
      </div>
      <img :src="place.img" alt="장소 사진" id="placeImg" />
    </div>
  </div>
</template>

<style scoped>
svg {
  border-radius: 12px 0 0 0;
}

#card-container {
  margin: 5px;
  padding: 0 10px 5px 0;
  width: 250px;
  height: 12.5vh;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0 2px 8px 0 rgba(31, 38, 135, 0.08) !important;
}

#badge {
  display: inline-flex;
  width: 23.972px;
  height: 23.204px;
  padding: 4px 8px;
  gap: 9.181px;
  flex-shrink: 0;
  border-radius: 13.772px;
  background: #009e8b;
  position: absolute;
}

#place-container {
  display: flex;
  align-items: center;
  /* margin-bottom: 20px; */
  margin-left: 10px;
}

#place-text-container {
  margin-right: 7px;
}

#place-info {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 10px;
  justify-content: center;
}

#place-name {
  color: #333;

  font-family: Pretendard;

  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  margin-bottom: 5px;
}

#place-subInfo {
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
}

#place-ssubInfo {
  display: flex;
}

#place-description {
  color: #848484;
  font-family: pretendard;
  font-size: 0.7rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 5px;
}

#place-cate {
  color: rgba(23, 162, 184, 0.7);
  font-family: Pretendard;
  font-size: 0.7rem;
  font-style: normal;
  font-weight: 400;
  margin-right: 3px;
  line-height: normal;
  margin-bottom: 0;
}

#place-time {
  color: #b7b7b7;
  font-family: Pretendard;
  font-size: 12.04px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 0;
}

#placeImg {
  width: 80px;
  height: 80px;
  border-radius: 12px;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);
  background-size: cover;
  object-fit: cover;
}
</style>
