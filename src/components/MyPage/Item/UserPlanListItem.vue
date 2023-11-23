<script setup>
import { ref, watch } from 'vue';
import { useRouter } from "vue-router"
import { usePlanStore } from '@/stores/plan.js';

const props = defineProps({
  plan: {
    type: Object,
  }
})
const planStore = usePlanStore();
const { delPlan, showPlanDetail } = planStore;
const router = useRouter();
console.log("props", props)
let formatDate = `${props.plan.start} ~ ${props.plan.end}`

const mvPlanDetail = () => {
  console.log("상세보기");
  // router.push({ name: "" });
}
const mvWriteReview = async () => {
  console.log("후기 작성 페이지 이동");
  await showPlanDetail(props.plan.planId);
  router.push({ name: "reviewWrite" });
}
const deletePlan = async () => {
  console.log(props.plan.planId)
  console.log("여행 계획 삭제");

  await delPlan(props.plan.planId);
}
</script>

<template>
  <a-list-item id="plan-listItem">
    <template #actions>
      <a key="list-loadmore-edit" @click="mvPlanDetail">상세보기</a>
      <a key="list-loadmore-more" @click="mvWriteReview">후기 작성</a>
      <a key="list-loadmore-delete" @click="deletePlan">삭제</a>
    </template>


    <a-list-item-meta :description="formatDate" id="plan-description" class="text-truncate">
      <template #title>
        <p id="plan-title" class="text-truncate">{{ plan.title }}</p>

      </template>
      <template #avatar>
        <img src="@/assets/img/avatar.svg" alt="" id="plan-img">
      </template>
    </a-list-item-meta>
  </a-list-item>
</template>

<style scoped>
#plan-listItem {
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 89.48794rem; */
  width: 95%;
  padding: 1.5rem;
  border-radius: 0.87606rem;
  border: 1.869px solid #EAEAEA;
  background: var(--neutral-1, #FFF);
}


#plan-title {
  color: var(--character-primary-85, rgba(0, 0, 0, 0.85));
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
}

#plan-description {
  color: var(--character-secondary-45, rgba(0, 0, 0, 0.45));

  font-size: 1.638rem;
  font-style: normal;
  font-weight: 400;
  line-height: 131%;
  /* 2.14575rem */
}

a {
  color: #333;
}

#plan-listItem {
  /* 기존 스타일 유지 */
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  /* 전환 효과 추가 */
}

#plan-listItem:hover {
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  /* 호버 시 더 연한 그림자 효과 */
  transform: translateY(-3px);
  /* 호버 시 약간 위로 이동 */
}

#plan-title,
#plan-description,
a {
  transition: color 0.3s ease;
  /* 텍스트 색상 변화에도 부드러운 전환 적용 */
}

#plan-title:hover,
#plan-description:hover,
a:hover {
  color: #0056b3;
  /* 호버 시 텍스트 색상 변경 */
}
</style>