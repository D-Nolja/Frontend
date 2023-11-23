<script setup>
import { useRouter } from 'vue-router';
const props = defineProps({
  review: Object,
});

const router = useRouter();
console.log("props", props.review);

const mvReivew = () => {
  console.log("후기 조회 페이지 이동");
  router.push({ name: "review" })
}
</script>

<template>
  <a-card class="cardItem" @click="mvReivew">
    <template #cover>
      <img alt="example" src="../../../assets/img/dang.png" />
    </template>
    <a-card-meta :title="review.reviewTitle">
      <template #description>{{ review.userName }}</template>
    </a-card-meta>
  </a-card>
</template>



<style scoped> .cardItem {
   width: 310px;
   height: 280px;

   border-radius: 0.9375rem;
   border: 1px solid #F0F0F0;
   background: #fff;
   box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
   margin: 20px;
 }
</style>~