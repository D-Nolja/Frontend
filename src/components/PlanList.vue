<script setup>
import PlanListItem from "./item/PlanListItem.vue";
const data = [
  {
    title: "김댕댕 수난시대",
    date: "2023.03.02~2023.03.09",
    img: "../../assets/img/avatar.svg",
  },
  {
    title: "김댕댕 수난시대",
    date: "2023.03.02~2023.03.09",
    img: "../../assets/img/avatar.svg",
  },
  {
    title: "김댕댕 수난시대",
    date: "2023.03.02~2023.03.09",
    img: "../../assets/img/avatar.svg",
  },
];
</script>

<template>
  <a-list item-layout="horizontal" :data-source="data">
    <template #renderItem="{ item }">
      <PlanListItem :plan="item" />
    </template>
  </a-list>
</template>

<style scoped></style>
