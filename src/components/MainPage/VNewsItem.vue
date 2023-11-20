<template>
  <div id="news-card-container">
    <div id="link-container">
      <p id="card-title">보도자료</p>
      <a :href="item.link" target="_blank">
        <img src="../../assets/img/plus.svg" alt="더 보기" id="newsLink" />
      </a>
    </div>
    <div id="contents-container">
      <p id="item-title">{{ item.title }}</p>
      <p id="item-content" ref="content">{{ item.content }}</p>
      <p id="item-date">{{ date }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
  item: Object,
});

let data = props.item.uploadDate;
let temp = data.split("|");

let date = ref(temp[2]);
// let writer = ref(temp[1]);

const content = ref(null);

onMounted(() => {
  if (content.value) {
    truncateTextToElement(content.value);
  }
});

function truncateTextToElement(element) {
  let text = element.innerText;
  const maxHeight = element.clientHeight; // 컨테이너의 최대 높이

  while (element.scrollHeight > maxHeight) {
    text = text.substring(0, text.length - 1);
    element.innerText = text + "...";
  }
}
</script>

<style scoped>
#news-card-container {
  width: 30vw;
  height: 300px;
  margin: 20px 0 10px 30px;
  padding: 40px 30px;
  border-radius: 15px;
  background: #f8f8f8;
  box-shadow: 0px 5.6px 140px 0px rgba(175, 173, 181, 0.1);
}
#link-container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

#news-card-container:hover {
  box-shadow: 0px 8px 160px 0px rgba(175, 173, 181, 0.2);
  transform: scale(1.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

#newsLink:hover {
  transform: rotate(45deg);
  transition: transform 0.3s ease;
}

#card-title {
  color: #17a2b8;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 175%; /* 31.5px */
  letter-spacing: -0.36px;
}
#contents-container {
  display: flex;
  flex-direction: column;
  height: 180px;
  margin: 10px 0;
}
#item-title {
  color: #333;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 48px */
  letter-spacing: -0.64px;
}

#item-content {
  margin-top: 10px;
  height: 90px;
  overflow: hidden;
}

#item-date {
  margin-top: 20px;
}
</style>
