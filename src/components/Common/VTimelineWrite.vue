<template>
  <a-timeline>
    <a-timeline-item v-for="item in timelineItems" :key="item">
      <div id="place-name-with-write">
        <p id="place-name">혜인식탁</p>
        <img
          src="../../assets/img/write.svg"
          alt=""
          srcset=""
          id="write-icon"
          @click="toggle(item)"
        />
      </div>
      <div v-if="item.showDiv">
        <textarea
          id="review-all-txt"
          rows="10"
          placeholder="내용을 입력하세요"
        ></textarea>

        <div id="place-img">
          <img src="../../assets/img/dang.png" alt="" srcset="" />
        </div>
      </div>
    </a-timeline-item>
  </a-timeline>
</template>
<script setup>
import { ref } from "vue";
const timelineItems = ref([
  { id: 1, name: "혜인식탁", showDiv: false },
  { id: 2, name: "Another Place", showDiv: false },
  { id: 3, name: "Third Place", showDiv: false },
]);

function toggle(item) {
  item.showDiv = !item.showDiv;
}
</script>
<style>
#place-name-with-write {
  display: flex;
}
#write-icon {
  margin-left: 7px;
}
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

textarea {
  padding: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 3px;
  color: #333;
  width: 100%;
}

input:focus,
textarea:focus {
  border: 1px solid #729fdd !important;
  outline: none;
}
</style>
