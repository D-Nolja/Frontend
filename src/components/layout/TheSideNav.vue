<script setup>
import VButton from "@/components/common/VBtn.vue";
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

const clickedButton = ref(null);
const clickedAllButton = ref(true);
const router = useRouter();

const navigate = (path, day = null) => {
  if (path === "/plan/all") {
    clickedAllButton.value = true;
    clickedButton.value = null; // Reset day buttons when "전체일정" is clicked
  } else {
    clickedAllButton.value = false;
    clickedButton.value = day;
  }

  console.log("cab : ", clickedAllButton.value);
  console.log("cb : ", clickedButton.value);

  router.push(path);
};

const allButtonColor = computed(() =>
  clickedAllButton.value ? "blue" : "white"
);

const testDays = computed(() => {
  const tmpDays = [];

  for (let i = 1; i <= 3; i++) {
    tmpDays.push({
      day: i,
      color: clickedButton.value == i ? "blue" : "white",
    });
  }
  return tmpDays;
});

const moveMain = () => {
  router.push({ name: "home" });
};
</script>

<template>
  <nav class="sideNav">
    <div>
      <img
        src="../../assets/img/avatar.svg"
        alt="icon"
        id="logo"
        @click="moveMain"
      />
      <VButton
        :key="`all-${clickedAllButton.value}`"
        text="전체일정"
        @click="navigate('/plan/all')"
        class="v-btn"
        :color="allButtonColor"
      />

      <VButton
        v-for="dayItem in testDays"
        :key="dayItem.day"
        :text="`${dayItem.day}일차`"
        :color="dayItem.color"
        size="small"
        @click.prevent="navigate(`/plan/${dayItem.day}`, dayItem.day)"
        class="v-btn"
      />
    </div>
    <div>
      <VButton text="편집" @click="navigate('/edit')" class="v-btn" />
      <VButton text="다음" @click="navigate('/next')" class="v-btn" />
    </div>
  </nav>
</template>

<style scoped>
#logo {
  width: 65%;
  align-items: center;
  margin: 0 auto;
}

.sideNav {
  padding: 10px 10px;
  width: 8.25rem;
  display: flex;
  flex-direction: column;
  border-right: 1.5px solid #eaeaea;
  align-items: center;
  justify-content: space-between;
}

.sideNav div {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.v-btn:hover {
  background-color: #f0f0f0; /* 마우스 오버 시 밝은 회색 배경 */
  color: #333; /* 더 어두운 텍스트 색상 */
  cursor: pointer; /* 클릭 가능함을 나타내는 커서 */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); /* 그림자 효과 */
  transform: scale(1.01); /* 버튼 크기 증가 */
  transition: all 0.3s ease; /* 부드러운 전환 효과 */
}
</style>
