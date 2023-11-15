<script setup>
import VButton from "@/components/common/VBtn.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

const days = ref([1, 2, 3]);

const router = useRouter();

const navigate = (path) => {
  router.push(path);
};
</script>
ㄴ
<template>
  <nav class="sideNav">
    <div>
      <img src="../../assets/img/avatar.svg" alt="icon" id="logo" />
      <VButton text="전체일정" @click="navigate('/plan/all')" class="v-btn" />
      <VButton
        v-for="day in days"
        :key="day"
        :text="`${day}일차`"
        color="white"
        size="small"
        @click="navigate(`/plan/${day}`)"
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
