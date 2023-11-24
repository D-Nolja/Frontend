<template>
  <a-timeline>
    <a-timeline-item v-for="rd in item.reviewDetails" :key="rd.reviewId">
      <p id="place-name">{{ rd.name }}</p>
      <p id="place-txt">
        {{ rd.content }}
      </p>

      <div id="place-img">
        <img v-if="rd.img" :src="rd.img" alt="" srcset="" />
      </div>
    </a-timeline-item>
  </a-timeline>
</template>
<script setup>
import { useReviewStore } from "@/stores/review";
import { storeToRefs } from "pinia";
import { ref, watch } from "vue";

const reviewStore = useReviewStore();
const { writtenReview } = storeToRefs(reviewStore);
const props = defineProps({
  item: Object,
});

console.log("props.item", props.item.reviewDetails);
// const props = defineProps({
//   item: Object,
// });
// const props = defineProps({
//   item: Object,
// });

// console.log("item reviewPlaces", props.item);
</script>
<style>
#place-name {
  font-size: 16px;
  font-weight: 600;
}

#place-img {
  width: 100vw;
  border-radius: 5px;
}

#place-img img {
  width: 25vw;
  height: 25vh;
  border-radius: 5px;
}
</style>
