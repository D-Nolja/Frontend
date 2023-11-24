<script setup>
import { useRouter } from "vue-router";
import { useReviewStore } from "@/stores/review.js";
import { onMounted, ref } from "vue";
const reviewStore = useReviewStore();
const { getReviewDetailModify } = reviewStore;
const props = defineProps({
  review: Object,
});

const router = useRouter();
console.log("props", props.review.planId);

// const mvReivew = () => {
//   console.log("후기 조회 페이지 이동");
//   router.push({ name: "review" });
// };

let data = ref(props.review);
onMounted(() => {
  console.log("props.review", props.review);
  const nullImg = props.review.mainImg;

  if (nullImg == "") {
    data.value = "../../../assets/img/dang.png";
  } else {
    data.value = props.review.mainImg;
  }
  // if ((props.review.mainImg = "" || props.review.mainImg == null)) {
  // }
});

const mvModifyReview = async () => {
  console.log("후기 수정");
  await getReviewDetailModify(props.review.planId);
  router.push({ name: "reviewModify" });
};
</script>

<template>
  <a-card class="cardItem">
    <template #cover>
      <img
        v-if="review.mainImg == ''"
        alt="example"
        src="../../../assets/img/dang.png"
      />
      <img v-else alt="example" :src="review.mainImg" />
    </template>
    <a-card-meta :title="review.reviewTitle">
      <template #description>
        <div class="rcard-decrip">
          <div>
            {{ review.userName }}
          </div>
          <div @click.stop="mvModifyReview" class="modify-btn">수정</div>
        </div>
      </template>
    </a-card-meta>
  </a-card>
</template>

<style scoped>
.cardItem {
  width: 310px;
  height: 280px;

  border-radius: 0.9375rem;
  border: 1px solid #f0f0f0;
  background: #fff;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  margin: 20px;
}
.rcard-decrip {
  display: flex;
  justify-content: space-between;
  padding-right: 10px;
}
.modify-btn {
  cursor: pointer;
}
</style>
