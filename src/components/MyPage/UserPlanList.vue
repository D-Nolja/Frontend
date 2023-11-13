<script setup>
import UserPlanListItem from "./Item/UserPlanListItem.vue";
const data = [
  {
    title: '김댕댕 수난시대',
    date : "2023.03.02~2023.03.09",
    img : "../../assets/img/avatar.svg"
  },
  {
    title: '김댕댕 수난시대',
    date : "2023.03.02~2023.03.09",
    img : "../../assets/img/avatar.svg"
  },
  {
    title: '김댕댕 수난시대',
    date : "2023.03.02~2023.03.09",
    img : "../../assets/img/avatar.svg"
  },{
    title: '김댕댕 수난시대',
    date : "2023.03.02~2023.03.09",
    img : "../../assets/img/avatar.svg"
  },{
    title: '김댕댕 수난시대',
    date : "2023.03.02~2023.03.09",
    img : "../../assets/img/avatar.svg"
  }

];
</script>

<template>
 <a-list item-layout="horizontal" :data-source="data" class="planList">
    <template #renderItem="{ item }">
      <div class="list-item-container">
        <user-plan-list-item :plan="item"></user-plan-list-item>
      </div>
    </template>
  </a-list>
</template>

<style scoped>
.list-item-container {
    display: flex;   
    justify-content: center; 
    align-items: center;     
    width: 100%;             
    padding: 10px 0;        
}

.planList{
  margin-top: 20px;
}

</style>