<script setup>
import UserPlanListItem from "@/components/MyPage/Item/UserPlanListItem.vue"


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

  <div class="list-container">
 <a-list item-layout="horizontal" :data-source="data">

    <template #renderItem="{ item }">
      <div class="list-item-container">
        <UserPlanListItem :plan="item"></UserPlanListItem>
      </div>
    </template>
  </a-list>
</div>
</template>

<style scoped>

.list-container{
  margin-top:6px;
}
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