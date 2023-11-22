<template>
  <a-timeline>
    <a-timeline-item v-for="item in timelineItems" :key="item.id">
      <div id="place-name-with-write">
        <p id="place-name">{{ item.name }}</p>
        <img
          src="../../assets/img/write.svg"
          alt=""
          srcset=""
          id="write-icon"
          @click="toggle(item)"
        />
      </div>
      <p v-if="item.review">{{ item.review }}</p>
      <template v-if="!item.showDiv">
        <img
          v-if="item.imageSrc"
          :src="item.imageSrc"
          alt="Review Image"
          id="preImage"
      /></template>

      <!-- 리뷰 표시 -->
      <div v-if="item.showDiv">
        <div id="upload-container">
          <input type="file" @change="handleFileChange($event, item)" />
          <img
            v-if="item.imageSrc"
            :src="item.imageSrc"
            alt="Uploaded Image"
            id="preImage"
          />
        </div>

        <textarea
          id="review-all-txt"
          rows="10"
          placeholder="내용을 입력하세요"
          v-model="item.tempReview"
        ></textarea>
        <div id="finish-btn-container">
          <VButtonSubmit
            txt="임시저장"
            id="finish-btn"
            @click="submitReview(item)"
          />
        </div>
      </div>
    </a-timeline-item>
  </a-timeline>
</template>

<script setup>
import VButtonSubmit from "@/components/Common/VButtonSubmit.vue";
import { useUserStore } from "../../stores/user";
import { ref } from "vue";

const userStore = useUserStore();
const { sendProfile } = userStore;
const timelineItems = ref([
  { id: 1, name: "혜인식탁", showDiv: false },
  { id: 2, name: "형민식탁", showDiv: false },
  { id: 3, name: "예은식탁", showDiv: false },
]);

function toggle(item) {
  item.showDiv = !item.showDiv;
}

function submitReview(item) {
  item.review = item.tempReview; // 리뷰 저장
  item.showDiv = false; // 입력 창 숨기기
}

const handleFileChange = (event, item) => {
  const file = event.target.files[0];
  if (file && file.type.startsWith("image/")) {
    // sendProfile(file);
    item.imageSrc = URL.createObjectURL(file);
  }
};
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
  font-weight: 500;
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

#upload-container {
  display: flex;
  flex-direction: column;
}
#preImage {
  width: 50%;
}

#finish-btn-container {
  width: 100%;
  text-align: end;
}
#finish-btn {
  margin: 5px 0;
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
