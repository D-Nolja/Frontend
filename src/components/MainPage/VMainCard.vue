<template>
  <div id="main-card1-container">
    <div id="mc-icon">
      <img :src="props.cardTxt.iconSrc" alt="" />
    </div>
    <p id="mc-title">{{ cardTxt.title }}</p>
    <p id="mc-sub-title">
      {{ cardTxt.txt }}
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  cardTxt: Object,
});
</script>

<style scoped>
#main-card1-container {
  display: flex;
  flex-direction: column;
  width: 29.5vw;
  height: 300px;
  background: #fff;
  box-shadow: 0px 7px 140px 0px rgba(175, 173, 181, 0.1);
  border-radius: 1.9375rem;
  padding: 25px;
  color: #444;
}

#mc-icon {
  border-radius: 50%;
  /* background-color: #f9f9f9; */
  width: 85px;
  height: 85px;
  text-align: center;
  line-height: 86.8px;
  margin-bottom: 20px;
}

#mc-title {
  font-size: 28px;
  font-weight: 600;
  padding: 10px 0;
}

#mc-sub-title {
  padding: 5px 0;
  font-size: 18px;
  font-weight: 400;
  line-height: 25px; /* 45.36px */
  overflow: hidden;
}
</style>
