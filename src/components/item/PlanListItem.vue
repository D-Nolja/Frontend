<script setup>

defineProps({
    plan : {
        type: Object,
    }
})

</script>

<template>
    <a-list-item id="plan-listItem">
      <template #actions>
            <a key="list-loadmore-edit">상세보기</a>
            <a key="list-loadmore-more">후기 작성</a>
            <a key="list-loadmore-delete">삭제</a>
      </template>
        
      <a-list-item-meta
          :description="plan.date" id="plan-description"
        >
          <template #title>
            <p id="plan-title">{{ plan.title }}</p>
          </template>
          <template #avatar >
            <img src="../../assets/img/avatar.svg" alt=""  id="plan-img">
          </template>
        </a-list-item-meta> 
      </a-list-item>
</template>

<style scoped>

#plan-listItem{
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 89.48794rem; */
  width: 60%;
  padding: 1.0rem 2.0rem;
  margin-bottom: 2.70988rem;
  border-radius: 0.87606rem;
  border: 1.869px solid #EAEAEA;
  background: var(--neutral-1, #FFF);
}


#plan-title{
  color: var(--character-primary-85, rgba(0, 0, 0, 0.85));
  font-family: Pretendard;
  font-size : 1.2rem;
  font-style: normal;
  font-weight: 500;
  line-height: 3.024rem; /* 150% */
  margin-bottom: 0;
}

#plan-description{
  color: var(--character-secondary-45, rgba(0, 0, 0, 0.45));
  font-family: Pretendard;
  font-size: 1.638rem;
  font-style: normal;
  font-weight: 400;
  line-height: 131%; /* 2.14575rem */
}

a{
  color : black;
}



</style>